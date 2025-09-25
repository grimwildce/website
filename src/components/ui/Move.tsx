import { type ReactNode } from "react";

type MoveProps = {
  children: ReactNode;
};

const Move = ({ children }: MoveProps) => {
  return <span className="font-light font-text-sc">{children}</span>;
};

export default Move;
