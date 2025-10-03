import { type ReactNode } from "react";

type TableRowProps = {
  children: ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
  return <tr>{children}</tr>;
};

export default TableRow;
