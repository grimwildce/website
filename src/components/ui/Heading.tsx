import Stack from "@/components/ui/Stack";
import { getMarginSize, resolveMargin, type MarginSize } from "@/utils/margin";
import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

type HeadingLevel = 1 | 2 | 3;
type HeadingTag = `h${HeadingLevel}`;
type HeadingProps = {
  level: HeadingLevel;
  children: ReactNode;
  id?: string;
  pretitle?: string;
  center?: boolean;
  margin?: MarginSize;
  noBorder?: boolean;
};

const pretitleSizeCss: Record<HeadingLevel, string> = {
  1: "text-lg leading-5",
  2: "text-base leading-2",
  3: "text-sm"
};

const headingSizeCss: Record<HeadingLevel, string> = {
  1: "text-4xl",
  2: "text-3xl",
  3: "text-2xl"
};

const defaultMargin: MarginSize = { top: "large", bottom: "medium" };

const Heading = ({ level = 1, children, id, pretitle, center, margin, noBorder }: HeadingProps) => {
  const hasPretitle = pretitle && pretitle.length > 0;
  const Component: ElementType = `h${level}` as HeadingTag;

  const pretitleCss = classNames("font-bold font-text uppercase", pretitleSizeCss[level]);
  const headingCss = classNames(
    "font-heading font-bold text-heading-color uppercase scroll-mt-52 lg:scroll-mt-36",
    headingSizeCss[level],
    !hasPretitle && getMarginSize(margin, defaultMargin),
    {
      "text-center": center,
      "border-b border-solid": !noBorder
    }
  );

  const heading = (
    <Component id={id} className={headingCss}>
      {children}
    </Component>
  );

  const headingContent = hasPretitle ? (
    <Stack spacing="none" margin={resolveMargin(margin, defaultMargin)}>
      <div className={pretitleCss}>{pretitle}</div>
      {heading}
    </Stack>
  ) : (
    heading
  );

  return headingContent;
};

export default Heading;
