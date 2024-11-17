import { ChildrenType, HrefType } from "../../global";

export type NavItemProps = ChildrenType &
  HrefType & {
    key: string;
  };
