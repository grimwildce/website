import { type ReactNode } from "react";

interface EmProps {
  children: ReactNode;
}

export const Em = ({ children }: EmProps) => {
  return <em>{children}</em>;
};

export default Em;
