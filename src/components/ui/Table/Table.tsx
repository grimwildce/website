import TableContext, { type TableContextProps } from "@/components/ui/Table/TableContext";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import classNames from "classnames";
import { type ReactNode } from "react";

type TableVariant = "blank" | "striped" | "columns" | "solid" | "crucible" | "simple";
type TableProps = {
  children: ReactNode;
  fullWidth?: boolean;
  margin?: MarginSize;
  variant?: TableVariant;
} & TableContextProps;

const Table = ({ children, fullWidth, margin, variant = "blank", ...context }: TableProps) => {
  const containerCss = classNames("overflow-x-auto", getMarginSize(margin), {
    "w-full": fullWidth
  });
  const tableCss = classNames(variant, "table-auto border-collapse", {
    "w-full": fullWidth
  });

  return (
    <TableContext.Provider value={context}>
      <div className={containerCss}>
        <table className={tableCss}>{children}</table>
      </div>
    </TableContext.Provider>
  );
};

export default Table;
