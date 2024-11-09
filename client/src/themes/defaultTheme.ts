import { createTheme } from "@mui/material/styles";

export const defaultTheme = createTheme({
  palette: {
    primary: { main: "#B5734C", contrastText: "#FFF" }
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
        disableElevation: true
      },
      styleOverrides: {
        text: {
          textTransform: "none"
        }
      }
    }
  }
});
