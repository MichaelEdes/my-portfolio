import styles from "./IconButtons.module.scss";
import { IconButtonPropsI } from "../../interfaces/iconButton";

const IconButton = ({
  classname,
  href,
  blank,
  noReferrer,
  children,
  target,
  ref,
}: IconButtonPropsI) => {
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
