import TableContext, { type TableContextProps } from "@/components/ui/Table/TableContext";
import classNames from "classnames";
import { type ReactNode } from "react";

type TableVariant = "blank" | "striped" | "columns" | "solid" | "simple";
type TableProps = {
  children: ReactNode;
  fullWidth?: boolean;
  variant?: TableVariant;
} & TableContextProps;

const Table = ({ children, fullWidth, variant = "blank", ...context }: TableProps) => {
  const containerCss = classNames("overflow-x-auto", {
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
