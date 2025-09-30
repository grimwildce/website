import { getFlexShrink, type FlexShrink } from "@/utils/flexShrink";
import { getFlexSize, type FlexSize } from "@/utils/flexSize";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getMinWidth, type MinWidth } from "@/utils/minWidth";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

type StackItemProps = {
  flex?: FlexSize;
  flexShrink?: FlexShrink;
  minWidth?: MinWidth;
  children: ReactNode;
};

const StackItem = ({ flex, flexShrink, minWidth, children }: StackItemProps) => {
  const itemCss = classNames(getFlexSize(flex), getFlexShrink(flexShrink), getMinWidth(minWidth));
  return <div className={itemCss}>{children}</div>;
};

type StackProps = {
  direction?: "col" | "row";
  children: ReactNode;
  margin?: MarginSize;
  spacing?: SpacingSize;
  center?: boolean;
  spaceBetween?: boolean;
  wrap?: boolean;
} & StackItemProps;

const Stack = ({
  margin,
  spacing = "medium",
  children,
  direction = "col",
  center,
  spaceBetween,
  wrap,
  flex,
  flexShrink,
  minWidth
}: StackProps) => {
  const className = classNames(
    "flex",
    getMarginSize(margin),
    getSpacingSize(spacing, direction),
    getFlexSize(flex),
    getFlexShrink(flexShrink),
    getMinWidth(minWidth),
    {
      "flex-col": direction === "col",
      "flex-row": direction === "row",
      "items-center": center && direction === "col",
      "justify-center": center && direction === "row",
      "justify-between": spaceBetween && direction === "col",
      "content-between": spaceBetween && direction === "row",
      "flex-wrap": wrap
    }
  );

  return <div className={className}>{children}</div>;
};

Stack.Item = StackItem;
export default Stack;
