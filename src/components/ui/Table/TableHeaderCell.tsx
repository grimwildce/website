import ContextAwareSmallCaps from "@/components/ui/Table/ContextAwareSmallCaps";
import { type TableContextType } from "@/components/ui/Table/TableContext";
import { useTableCellCss } from "@/components/ui/Table/useTableCellCss";
import { type ReactNode } from "react";

type TableHeaderCellProps = {
  colSpan?: number;
  children?: ReactNode;
} & TableContextType;

const TableHeaderCell = ({ colSpan, children, ...contextOverrides }: TableHeaderCellProps) => {
  const cellCss = useTableCellCss(contextOverrides, "font-bold");

  return (
    <th className={cellCss} colSpan={colSpan}>
      <ContextAwareSmallCaps {...contextOverrides}>{children}</ContextAwareSmallCaps>
    </th>
  );
};
export default TableHeaderCell;
