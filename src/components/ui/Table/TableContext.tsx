import { type CellPaddingSize } from "@/utils/cellPadding";
import { type MutuallyExclusiveBooleanProps } from "@/utils/customTypes";
import { type TextAlign } from "@/utils/textAlign";
import { type TextSize } from "@/utils/textSize";
import { type VerticalAlign } from "@/utils/verticalAlign";
import { createContext } from "react";

export type TableContextType = {
  align?: TextAlign;
  padding?: CellPaddingSize;
  textSize?: TextSize;
  verticalAlign?: VerticalAlign;
  italic?: boolean;
} & MutuallyExclusiveBooleanProps<"allCaps" | "smallCaps">;

const TableContext = createContext<TableContextType>({});

export default TableContext;
