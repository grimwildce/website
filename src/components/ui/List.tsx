import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

type ListTag = "ul" | "ol";
type ListProps = {
  variant?: "unordered" | "ordered" | "blank";
  children: ReactNode;
  margin?: MarginSize;
  spacing?: SpacingSize;
};

const List = ({ children, variant = "unordered", margin, spacing = "small" }: ListProps) => {
  const Tag: ListTag = variant === "ordered" ? "ol" : "ul";

  const tagCss = classNames("pl-6", getMarginSize(margin), getSpacingSize(spacing), {
    "list-disc": variant === "unordered",
    "list-decimal": variant === "ordered"
  });

  return <Tag className={tagCss}>{children}</Tag>;
};

type ItemProps = {
  children: ReactNode;
};

const Item = ({ children }: ItemProps) => {
  return <li>{children}</li>;
};

List.Item = Item;
export default List;
