import { ReactNode } from "react";
import { LinkProps } from "react-router-dom";

export type ChildrenType = {
  children: ReactNode;
};

export type HrefType = {
  href: LinkProps["to"];
};
