import { BrowserRouter } from "react-router-dom";
import { ReactNode, FC } from "react";

// TODO: If this prop will be repeated later I can take this out to types folder
export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
