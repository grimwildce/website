import { hasChildElementOfType } from "@/utils/childElements";
import { type DepthValue } from "@/utils/depth";
import { getFlexAndGridOptions, type FlexAndGridOptions } from "@/utils/flexAndGrid";
import { getPaddingSize, type PaddingSize } from "@/utils/padding";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import { getTextSize, type TextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

type VariantType = "blank" | "normal" | "deep";
type PanelProps = {
  title?: string;
  description?: string;
  depth?: DepthValue;
  textSize?: TextSize;
  variant?: VariantType;
  border?: boolean;
  centerTitle?: boolean;
  rowBorders?: boolean;
  titleNormalCaps?: boolean;
  spacing?: SpacingSize;
  padding?: PaddingSize;
  children: ReactNode;
} & FlexAndGridOptions;

const Panel = ({
  title,
  description,
  textSize,
  variant = "normal",
  border,
  centerTitle,
  rowBorders,
  titleNormalCaps,
  spacing = "sm",
  padding = "md",
  children,
  ...flexAndGridOptions
}: PanelProps) => {
  const hasTitle = typeof title !== "undefined";
  const hasPanelRows = hasChildElementOfType(children, "Panel.Row");

  const containerCss = classNames(
    "flex flex-col shrink-0",
    getTextSize(textSize),
    getFlexAndGridOptions(flexAndGridOptions),
    {
      "border-b-2": border,
      "border-t-2": !hasTitle && border
    }
  );
  const titleCss = classNames("bg-solid rounded-t-sm py-1 px-4 text-solid-color", {
    "flex justify-center": centerTitle
  });
  const contentCss = classNames(
    "flex-1",
    !hasPanelRows && getSpacingSize(spacing),
    !hasPanelRows && getPaddingSize(padding),
    {
      "border-x border-b border-muted": variant === "blank",
      "bg-panel-1": variant === "normal",
      "bg-panel-2": variant === "deep",
      "rounded-t-sm": !hasTitle && !border,
      "rounded-b-sm": !border,
      "[&>.panel-row:nth-child(even)]:bg-panel-row-alt": hasPanelRows,
      "[&>.panel-row:last-child]:rounded-b-sm": hasPanelRows && !border,
      "[&>.panel-row:not(:last-child)]:border-b [&>.panel-row:not(:last-child)]:border-muted":
        hasPanelRows && rowBorders
    }
  );

  return (
    <div className={containerCss}>
      {hasTitle && (
        <div className={titleCss}>
          <div className="flex justify-between items-baseline w-full flex-wrap">
            <div className={classNames("text-base font-bold", { uppercase: !titleNormalCaps })}>
              {title}
            </div>
            <div className="text-sm font-medium ml-2">
              <em>{description}</em>
            </div>
          </div>
        </div>
      )}
      <div className={contentCss}>{children}</div>
    </div>
  );
};

export default Panel;
