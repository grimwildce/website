import ContextAwareSmallCaps from "@/components/ui/Table/ContextAwareSmallCaps";
import { type TableContextProps } from "@/components/ui/Table/TableContext";
import { useTableCellCss } from "@/components/ui/Table/useTableCellCss";
import { type ReactNode } from "react";

type TableCellProps = {
  colSpan?: number;
  children?: ReactNode;
} & TableContextProps;

const TableCell = ({ colSpan, children, ...contextOverrides }: TableCellProps) => {
  const cellCss = useTableCellCss(contextOverrides);

  return (
    <td className={cellCss} colSpan={colSpan}>
      <ContextAwareSmallCaps {...contextOverrides}>{children}</ContextAwareSmallCaps>
    </td>
  );
};

export default TableCell;
