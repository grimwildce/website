import { getFlexShrink, type FlexShrink } from "@/utils/flexShrink";
import { getFlexSize, type FlexSize } from "@/utils/flexSize";
import { getMinWidth, type MinWidth } from "@/utils/minWidth";
import classNames from "classnames";

export type FlexAndGridOptions = {
  flex?: FlexSize;
  flexShrink?: FlexShrink;
  minWidth?: MinWidth;
};

type GetFlexAndGridOptionsProps = {
  [key: string]: unknown;
} & FlexAndGridOptions;

export const getFlexAndGridOptions = ({
  flex,
  flexShrink,
  minWidth
}: GetFlexAndGridOptionsProps) => {
  return classNames(getFlexSize(flex), getFlexShrink(flexShrink), getMinWidth(minWidth));
};
