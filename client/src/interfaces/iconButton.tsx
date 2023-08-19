import { ReactNode, AnchorHTMLAttributes } from "react";

export interface IconButtonPropsI {
  classname?: string;
  href?: string;
  blank?: boolean;
  noReferrer?: boolean;
  children: ReactNode;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  ref?: React.Ref<HTMLAnchorElement>;
}
