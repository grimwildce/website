import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

type StackProps = {
  direction?: "col" | "row";
  children: ReactNode;
  margin?: MarginSize;
  spacing?: SpacingSize;
  center?: boolean;
  wrap?: boolean;
};

const Stack = ({
  margin,
  spacing = "medium",
  children,
  direction = "col",
  center = false,
  wrap = false
}: StackProps) => {
  const className = classNames("flex", getMarginSize(margin), getSpacingSize(spacing, direction), {
    "flex-col": direction === "col",
    "flex-row": direction === "row",
    "items-center": center && direction === "col",
    "justify-center": center && direction === "row",
    "flex-wrap": wrap
  });

  return <div className={className}>{children}</div>;
};

export default Stack;
