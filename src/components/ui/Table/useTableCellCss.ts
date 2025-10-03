import TableContext, { type TableContextType } from "@/components/ui/Table/TableContext";
import { getCellPaddingSize } from "@/utils/cellPadding";
import { getTextAlign } from "@/utils/textAlign";
import { getTextSize } from "@/utils/textSize";
import { getVerticalAlign } from "@/utils/verticalAlign";
import classNames from "classnames";
import { useContext } from "react";

export const useTableCellCss = (overrides: TableContextType, defaultCss?: string) => {
  const { padding, align, textSize, verticalAlign, allCaps, italic } = useContext(TableContext);

  return classNames(
    defaultCss,
    getCellPaddingSize(overrides.padding ?? padding),
    getTextAlign(overrides.align ?? align),
    getTextSize(overrides.textSize ?? textSize),
    getVerticalAlign(overrides.verticalAlign ?? verticalAlign),
    { uppercase: overrides.allCaps ?? allCaps, italic: overrides.italic ?? italic }
  );
};
