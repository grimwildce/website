import SmallCaps from "@/components/ui/SmallCaps";
import { type MutuallyExclusiveBooleanProps } from "@/utils/customTypes";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getTextAlign, type TextAlign } from "@/utils/textAlign";
import { getTextSize, type TextSize } from "@/utils/textSize";
import { getVerticalAlign, type VerticalAlign } from "@/utils/verticalAlign";
import classNames from "classnames";
import { type ReactNode } from "react";

type TableVariant = "blank" | "striped" | "columns" | "solid" | "crucible" | "simple";
type TableProps = {
  children: ReactNode;
  margin?: MarginSize;
  variant?: TableVariant;
  fullWidth?: boolean;
  textSize?: TextSize;
};

const Table = ({
  margin,
  textSize,
  children,
  fullWidth = false,
  variant = "blank"
}: TableProps) => {
  const containerCss = classNames("overflow-x-auto", getMarginSize(margin), getTextSize(textSize), {
    "w-full": fullWidth
  });
  const tableCss = classNames(variant, "table-auto border-collapse", {
    "w-full": fullWidth
  });
  return (
    <div className={containerCss}>
      <table className={tableCss}>{children}</table>
    </div>
  );
};

type TableHeadProps = {
  children: ReactNode;
};

const TableHead = ({ children }: TableHeadProps) => {
  return <thead>{children}</thead>;
};

type TableBodyProps = {
  children: ReactNode;
};

const TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>;
};

type TableRowProps = {
  children: ReactNode;
};

const TableRow = ({ children }: TableRowProps) => {
  return <tr>{children}</tr>;
};

type CellPaddingSize = "none" | "tight" | "normal";
const cellPaddingSizeCss: Record<CellPaddingSize, string> = {
  none: "",
  tight: "py-0.5 px-2",
  normal: "py-1 px-4"
};
const getCellPaddingSize = (size?: CellPaddingSize) => {
  return cellPaddingSizeCss[size || "normal"];
};

type TableCellProps = {
  align?: TextAlign;
  padding?: CellPaddingSize;
  colSpan?: number;
  verticalAlign?: VerticalAlign;
  children?: ReactNode;
} & MutuallyExclusiveBooleanProps<"allCaps" | "smallCaps">;

const TableCell = ({
  align,
  padding,
  children,
  colSpan,
  verticalAlign,
  allCaps,
  smallCaps
}: TableCellProps) => {
  const cellCss = classNames(
    getCellPaddingSize(padding),
    getTextAlign(align),
    getVerticalAlign(verticalAlign),
    {
      uppercase: allCaps
    }
  );
  return (
    <td className={cellCss} colSpan={colSpan}>
      {smallCaps ? <SmallCaps>{children}</SmallCaps> : children}
    </td>
  );
};

type TableHeaderCellProps = {
  align?: TextAlign;
  padding?: CellPaddingSize;
  colSpan?: number;
  verticalAlign?: VerticalAlign;
  children?: ReactNode;
} & MutuallyExclusiveBooleanProps<"allCaps" | "smallCaps">;

const TableHeaderCell = ({
  align = "left",
  padding,
  children,
  colSpan,
  verticalAlign,
  allCaps,
  smallCaps
}: TableHeaderCellProps) => {
  const cellCss = classNames(
    "font-bold",
    getCellPaddingSize(padding),
    getTextAlign(align),
    getVerticalAlign(verticalAlign),
    {
      uppercase: allCaps
    }
  );
  return (
    <th className={cellCss} colSpan={colSpan}>
      {smallCaps ? <SmallCaps>{children}</SmallCaps> : children}
    </th>
  );
};

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.HeaderCell = TableHeaderCell;
export default Table;
