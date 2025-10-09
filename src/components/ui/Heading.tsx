import Stack from "@/components/ui/Stack";
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
  noBorder?: boolean;
  noMargin?: boolean;
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

const Heading = ({
  level = 1,
  id,
  children,
  pretitle,
  center,
  noBorder,
  noMargin
}: HeadingProps) => {
  const hasId = id && id.length > 0;
  const hasPretitle = pretitle && pretitle.length > 0;
  const Component: ElementType = `h${level}` as HeadingTag;

  const pretitleCss = classNames("font-bold font-text uppercase", pretitleSizeCss[level], {
    "mt-12": !noMargin && hasPretitle
  });
  const headingCss = classNames(
    "font-heading font-bold text-heading-color uppercase",
    headingSizeCss[level],
    {
      "text-center": center,
      "border-b border-solid": !noBorder,
      "scroll-mt-52 lg:scroll-mt-36": hasId,
      "mt-12": !noMargin && !hasPretitle
    }
  );

  const heading = (
    <Component id={id} className={headingCss}>
      {children}
    </Component>
  );

  const headingContent = hasPretitle ? (
    <Stack spacing="none">
      <div className={pretitleCss}>{pretitle}</div>
      {heading}
    </Stack>
  ) : (
    heading
  );

  return headingContent;
};

export default Heading;
