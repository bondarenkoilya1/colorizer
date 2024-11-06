import prettier from "eslint-plugin-prettier";
import react from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all
});

export default [
  ...compat.extends(
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended"
  ),
  {
    plugins: {
      react,
      prettier,
      "simple-import-sort": simpleImportSort
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.node,
        ...globals.jest,
        google: "readonly"
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: "detect"
      }
    },

    rules: {
      "prettier/prettier": [
        "error",
        {
          endOfLine: "auto"
        }
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^\\w"],
            ["^@"],
            ["App"],
            ["./styled", "^styled(/.*|$)"],
            ["^themes(/.*|$)"],
            ["^layout(/.*|$)"],
            ["^pages(/.*|$)"],
            ["^config(/.*|$)"],
            ["^constants(/.*|$)"],
            ["^data(/.*|$)"],
            ["^components(/.*|$)"],
            ["^import\\s+type"],
            ["^types", "^types(/.*|$)"],
            ["^utils(/.*|$)"],
            ["^http(/.*|$)"],
            ["^services(/.*|$)"],
            ["^\\u0000"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.?(css)$"]
          ]
        }
      ],

      "react/react-in-jsx-scope": "off"
    }
  },
  {
    files: ["**/*.ts"],

    rules: {
      "no-unused-vars": "off"
    }
  }
];
