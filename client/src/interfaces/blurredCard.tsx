import { ReactNode } from "react";

export interface BlurredCardPropsI {
  cardTitle: string;
  cardSubTitle: string;
  cardText?: string;
  children: ReactNode;
}
