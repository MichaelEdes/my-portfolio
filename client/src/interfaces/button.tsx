export interface ButtonPropsI {
  children: React.ReactNode;
  onClick?: () => void;
  variation?: "Default" | "Download";
}
