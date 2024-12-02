import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import { ChildrenType } from "@types";

// TODO: If this prop will be repeated later I can take this out to types folder
export const Providers: FC<ChildrenType> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
