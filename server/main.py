import base64
import os

import cv2
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
from dotenv import load_dotenv

load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS
SITE_ADDRESS = os.getenv("SITE_ADDRESS")
CORS(app, resources={r"/colorize": {"origins": SITE_ADDRESS}})

# Define allowed image extensions
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}

# Define paths to model files and resources
DIR = os.getenv("SERVER_DIRECTORY")
PROTOTXT = os.path.join(DIR, "model/colorization_deploy_v2.prototxt")
POINTS = os.path.join(DIR, "model/pts_in_hull.npy")
MODEL = os.path.join(DIR, "model/colorization_release_v2.caffemodel")

# Load the pre-trained model and configuration
def load_model():
    print("Loading model...")
    net = cv2.dnn.readNetFromCaffe(PROTOTXT, MODEL)
    pts = np.load(POINTS)

    # Prepare the model layers
    class8_layer_id = net.getLayerId("class8_ab")
    conv8_layer_id = net.getLayerId("conv8_313_rh")

    pts = pts.transpose().reshape(2, 313, 1, 1)
    net.getLayer(class8_layer_id).blobs = [pts.astype("float32")]
    net.getLayer(conv8_layer_id).blobs = [np.full([1, 313], 2.606, dtype="float32")]

    return net


# Preprocess the image before passing it to the model
def preprocess_image(image_data):
    image = cv2.imdecode(np.frombuffer(image_data, np.uint8), cv2.IMREAD_COLOR)
    scaled_image = image.astype("float32") / 255.0
    lab_image = cv2.cvtColor(scaled_image, cv2.COLOR_BGR2LAB)

    # Resize image to match the model's expected input size
    resized_image = cv2.resize(lab_image, (224, 224))
    L_channel = cv2.split(resized_image)[0]
    L_channel -= 50  # Normalize L-channel

    return image, lab_image, L_channel


# Apply the model to generate colorized output
def colorize_image(net, L_channel, original_image):
    print("Colorizing the image...")
    net.setInput(cv2.dnn.blobFromImage(L_channel))
    ab_channels = net.forward()[0, :, :, :].transpose((1, 2, 0))

    # Resize the predicted ab channels to the original image size
    ab_channels_resized = cv2.resize(ab_channels, (original_image.shape[1], original_image.shape[0]))

    # Combine L-channel and colorized ab channels
    L_channel_split = cv2.split(original_image)[0]
    colorized_image = np.concatenate((L_channel_split[:, :, np.newaxis], ab_channels_resized), axis=2)

    # Convert back to BGR for display and clipping values to [0, 255]
    colorized_image_bgr = cv2.cvtColor(colorized_image, cv2.COLOR_LAB2BGR)
    colorized_image_bgr = np.clip(colorized_image_bgr, 0, 1)

    return (255 * colorized_image_bgr).astype("uint8")


# Check if the uploaded file is an image
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


# Route to handle image upload and processing
@app.route('/colorize', methods=['POST'])
def colorize():
    if 'image' not in request.files:
        return "No image provided", 400

    image_file = request.files['image']

    if image_file and allowed_file(image_file.filename):
        filename = secure_filename(image_file.filename)
        image_data = image_file.read()

        # Check file size limit (2MB = 2 * 2**20 bytes)
        if len(image_data) > 2* 2**20:
            return "File size exceeds the 2MB limit.", 400

        # Process the image
        net = load_model()
        original_image, lab_image, L_channel = preprocess_image(image_data)
        colorized_image = colorize_image(net, L_channel, original_image)

        # Convert to base64 to send it as a response
        _, img_encoded = cv2.imencode('.png', colorized_image)
        img_bytes = img_encoded.tobytes()
        base64_img = base64.b64encode(img_bytes).decode('utf-8')

        return jsonify({
            'colorizedImage': f"data:image/png;base64,{base64_img}"
        })

    else:
        return "Invalid file type. Only PNG, JPG, and JPEG are allowed.", 400


if __name__ == '__main__':
    app.run(debug=True)
