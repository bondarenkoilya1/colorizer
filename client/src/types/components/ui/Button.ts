import { ButtonHTMLAttributes } from "react";

import { ChildrenType } from "@types";

export type ButtonProps = ChildrenType & ButtonHTMLAttributes<HTMLButtonElement> & ButtonVariants;

export type ButtonVariants = {
  variant: "primary" | "secondary" | "tertiary";
};
