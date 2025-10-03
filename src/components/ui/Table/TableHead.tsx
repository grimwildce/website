import { type ReactNode } from "react";

type TableHeadProps = {
  children: ReactNode;
};

const TableHead = ({ children }: TableHeadProps) => {
  return <thead>{children}</thead>;
};

export default TableHead;
