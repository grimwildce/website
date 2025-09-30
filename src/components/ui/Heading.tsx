import Stack from "@/components/ui/Stack";
import { getMarginSize, resolveMargin, type MarginSize } from "@/utils/margin";
import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTag = `h${HeadingLevel}`;
type HeadingProps = {
  children: ReactNode;
  pretitle?: string;
  level: HeadingLevel;
  as?: HeadingTag;
  center?: boolean;
  margin?: MarginSize;
  noBorder?: boolean;
};

const textSize: Record<HeadingLevel, string> = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl",
  4: "text-xl",
  5: "text-lg",
  6: "text-base"
};

const Heading = ({ pretitle, level = 1, as, margin, center, noBorder, children }: HeadingProps) => {
  const hasPretitle = pretitle && pretitle.length > 0;
  const Tag: ElementType = as ?? (`h${level}` as HeadingTag);
  const defaultMargin: MarginSize = level <= 3 ? { top: "large", bottom: "medium" } : "medium";

  const pretitleCss = classNames("font-bold font-text uppercase", {
    "text-lg leading-5": level === 1,
    "text-base leading-2": level === 2,
    "text-sm": level >= 3
  });
  const headingCss = classNames(
    "font-heading font-bold text-heading-color uppercase",
    textSize[level],
    !hasPretitle && getMarginSize(margin, defaultMargin),
    {
      "text-center": center,
      "border-b border-solid": level <= 3 && !noBorder
    }
  );

  const headingContent = hasPretitle ? (
    <Stack spacing="none" margin={resolveMargin(margin, defaultMargin)}>
      <div className={pretitleCss}>{pretitle}</div>
      <Tag className={headingCss}>{children}</Tag>
    </Stack>
  ) : (
    <Tag className={headingCss}>{children}</Tag>
  );

  return headingContent;
};

export default Heading;
