import { BrowserRouter } from "react-router-dom";
import { FC } from "react";
import { ChildrenType } from "@types";

export const Providers: FC<ChildrenType> = ({ children }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};
