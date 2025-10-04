import ListContext, { type ListContextType } from "@/components/ui/List/ListContext";
import { getListColumns, type ListColumnsValue } from "@/utils/listColumns";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

type ListTag = "ul" | "ol";
type ListProps = {
  margin?: MarginSize;
  spacing?: SpacingSize;
  variant?: "unordered" | "ordered" | "blank";
  children: ReactNode;
  columns?: ListColumnsValue;
} & ListContextType;

const List = ({
  children,
  variant = "unordered",
  margin,
  spacing = "small",
  columns,
  ...contextProps
}: ListProps) => {
  const Tag: ListTag = variant === "ordered" ? "ol" : "ul";

  const tagCss = classNames(
    "pl-6",
    getMarginSize(margin),
    getSpacingSize(spacing),
    getListColumns(columns),
    {
      "list-disc": variant === "unordered",
      "list-decimal": variant === "ordered"
    }
  );

  return (
    <ListContext.Provider value={contextProps}>
      <Tag className={tagCss}>{children}</Tag>
    </ListContext.Provider>
  );
};

export default List;
