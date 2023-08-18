import React, { ReactNode, AnchorHTMLAttributes } from "react";
import styles from "./IconButtons.module.scss";

interface IconButtonProps {
  classname?: string;
  href?: string;
  blank?: boolean;
  noReferrer?: boolean;
  children: ReactNode;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  ref?: React.Ref<HTMLAnchorElement>;
}

const IconButton = ({
  classname,
  href,
  blank,
  noReferrer,
  children,
  target,
  ref,
}: IconButtonProps) => {
  let rel = "";
  if (blank) target = "_blank";
  if (noReferrer || blank) rel += "noopener noreferrer";

  return (
    <a
      className={`${classname} ${styles.iconButton}`}
      href={href}
      target={target}
      ref={ref}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default IconButton;
