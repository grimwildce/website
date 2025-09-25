import { getMarginSize, type MarginSize } from "@/utils/margin";
import classNames from "classnames";
import type { ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingTag = `h${HeadingLevel}`;
type HeadingProps = {
  level?: HeadingLevel;
  center?: boolean;
  margin?: MarginSize;
  children: ReactNode;
};

const textSize: Record<HeadingLevel, string> = {
  1: "text-6xl",
  2: "text-4xl",
  3: "text-3xl",
  4: "text-2xl",
  5: "text-xl",
  6: "text-lg"
} as const;

const Heading = ({ children, margin, center = false, level = 1 }: HeadingProps) => {
  const Tag = `h${level}` as HeadingTag;
  const defaultMargin: MarginSize = level <= 3 ? { top: "large", bottom: "medium" } : "medium";
  const headingCss = classNames(
    "font-heading font-bold text-heading-color uppercase",
    textSize[level],
    getMarginSize(margin, defaultMargin),
    {
      "text-center": center,
      "border-b border-solid": level <= 3
    }
  );

  return <Tag className={headingCss}>{children}</Tag>;
};

export default Heading;
