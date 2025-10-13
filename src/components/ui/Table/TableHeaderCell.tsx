import ContextAwareSmallCaps from "@/components/ui/Table/ContextAwareSmallCaps";
import { type TableContextProps } from "@/components/ui/Table/TableContext";
import { useTableCellCss } from "@/components/ui/Table/useTableCellCss";
import { type ReactNode } from "react";

type TableHeaderCellProps = {
  colSpan?: number;
  rowSpan?: number;
  children?: ReactNode;
} & TableContextProps;

const TableHeaderCell = ({
  colSpan,
  rowSpan,
  children,
  ...contextOverrides
}: TableHeaderCellProps) => {
  const cellCss = useTableCellCss(contextOverrides, "font-bold");

  return (
    <th className={cellCss} colSpan={colSpan} rowSpan={rowSpan}>
      <ContextAwareSmallCaps {...contextOverrides}>{children}</ContextAwareSmallCaps>
    </th>
  );
};
export default TableHeaderCell;
