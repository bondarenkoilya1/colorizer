import { BrowserRouter } from "react-router-dom";
import { ReactNode, FC } from "react";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "../../themes";

// TODO: If this prop will be repeated later I can take this out to types folder
export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </>
  );
};
