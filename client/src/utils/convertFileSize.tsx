import { BYTES_IN_ONE_MEGABYTE } from "@constants";

export const convertBytesToMegaBytes = (initialSize: number) => {
  return (initialSize / BYTES_IN_ONE_MEGABYTE).toFixed(2);
};
