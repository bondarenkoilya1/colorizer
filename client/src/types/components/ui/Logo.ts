import { HrefType } from "../../global";

/* TODO: Maybe create a special type only for color
   TODO: Maybe set an utility type for a set of colors which will be used in all of color themes
*/
export type LogoProps = HrefType & {
  titleColor?: string;
  subtitleColor?: string;
  className?: string;
};
