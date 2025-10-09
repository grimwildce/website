import ListContext, { type ListContextProps } from "@/components/ui/List/ListContext";
import { getListColumns, type ListColumnsValue } from "@/utils/listColumns";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

type ListTag = "ul" | "ol";
type ListProps = {
  spacing?: SpacingSize;
  variant?: "unordered" | "ordered" | "blank";
  children: ReactNode;
  columns?: ListColumnsValue;
} & ListContextProps;

const List = ({
  children,
  variant = "unordered",
  spacing = "xs",
  columns,
  ...contextProps
}: ListProps) => {
  const Tag: ListTag = variant === "ordered" ? "ol" : "ul";

  const tagCss = classNames("pl-6", getSpacingSize(spacing), getListColumns(columns), {
    "list-disc": variant === "unordered",
    "list-decimal": variant === "ordered"
  });

  return (
    <ListContext.Provider value={contextProps}>
      <Tag className={tagCss}>{children}</Tag>
    </ListContext.Provider>
  );
};

export default List;
