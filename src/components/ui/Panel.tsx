import Descriptor from "@/components/Descriptor";
import { hasChildElementOfType } from "@/utils/childElements";
import { type DepthValue } from "@/utils/depth";
import { getFlexSize, type FlexSize } from "@/utils/flexSize";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getTextSize, type TextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

type VariantType = "blank" | "normal" | "deep";
type PanelProps = {
  title?: string;
  description?: string;
  depth?: DepthValue;
  margin?: MarginSize;
  textSize?: TextSize;
  variant?: VariantType;
  flex?: FlexSize;
  border?: boolean;
  centerTitle?: boolean;
  children: ReactNode;
};

const Panel = ({
  title,
  description,
  textSize,
  margin,
  variant = "normal",
  border = false,
  centerTitle = false,
  flex,
  children
}: PanelProps) => {
  const hasTitle = typeof title !== "undefined";
  const hasPanelRows = hasChildElementOfType(children, PanelRow);

  const containerCss = classNames(
    "flex flex-col",
    getMarginSize(margin),
    getTextSize(textSize),
    getFlexSize(flex),
    {
      "border-b-2": border,
      "border-t-2": !hasTitle && border
    }
  );
  const titleCss = classNames("bg-solid rounded-t-sm py-1 px-4 text-solid-color", {
    "flex justify-center": centerTitle
  });
  const contentCss = classNames("px-4", {
    "border-x border-b border-muted": variant === "blank",
    "bg-panel-1": variant === "normal",
    "bg-panel-2": variant === "deep",
    "rounded-t-sm": !hasTitle && !border,
    "rounded-b-sm": !border,
    "[&>.panel-row:nth-child(even)]:bg-panel-row-alt": hasPanelRows,
    "[&>.panel-row:last-child]:rounded-b-sm": hasPanelRows && !border
  });

  return (
    <div className={containerCss}>
      {hasTitle && (
        <div className={titleCss}>
          <Descriptor text={title} description={description} />
        </div>
      )}
      <div className={contentCss}>{children}</div>
    </div>
  );
};

type PanelRowProps = {
  children: ReactNode;
};

const PanelRow = ({ children }: PanelRowProps) => {
  return <div className="panel-row p-4 -mx-4">{children}</div>;
};

Panel.Row = PanelRow;
export default Panel;
