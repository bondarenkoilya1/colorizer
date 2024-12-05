/* Utility type in the future.
   e.g. "404" | "403" | "502" */

type ErrorCodes = "404";

export type UnspecifiedErrorProps = {
  iconSize?: number;
  unspecifiedErrorMessage?: string;
  className?: string;
};

export type ErrorProps = UnspecifiedErrorProps & {
  errorCode?: ErrorCodes;
};
