import Muted from "@/components/ui/Muted";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import { getTextSize, type TextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

type ListTag = "ul" | "ol";
type ListProps = {
  margin?: MarginSize;
  spacing?: SpacingSize;
  variant?: "unordered" | "ordered" | "blank";
  children: ReactNode;
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
  textSize?: TextSize;
  muted?: boolean;
  children: ReactNode;
};

const Item = ({ textSize = "medium", muted, children }: ItemProps) => {
  const itemCss = classNames(getTextSize(textSize), {
    "[&::marker]:text-muted-color": muted
  });

  return (
    <li className={itemCss}>{muted ? <Muted size={textSize}>{children}</Muted> : children}</li>
  );
};

List.Item = Item;
export default List;
