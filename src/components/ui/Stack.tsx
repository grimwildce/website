import { getAlignItems, type AlignItemsValue } from "@/utils/alignItems";
import { getFlexAndGridOptions, type FlexAndGridOptions } from "@/utils/flexAndGrid";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

type StackItemProps = {
  children: ReactNode;
} & FlexAndGridOptions;

const StackItem = ({ children, ...flexAndGridOptions }: StackItemProps) => {
  const itemCss = getFlexAndGridOptions(flexAndGridOptions);
  return <div className={itemCss}>{children}</div>;
};

type StackProps = {
  alignItems?: AlignItemsValue;
  direction?: "col" | "row";
  children: ReactNode;
  spacing?: SpacingSize;
  center?: boolean;
  spaceBetween?: boolean;
  wrap?: boolean;
} & FlexAndGridOptions;

const Stack = ({
  spacing,
  children,
  direction = "col",
  center,
  spaceBetween,
  wrap,
  alignItems,
  ...flexAndGridOptions
}: StackProps) => {
  const className = classNames(
    "flex",
    getSpacingSize(spacing, direction),
    getFlexAndGridOptions(flexAndGridOptions),
    getAlignItems(alignItems),
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
