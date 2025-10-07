import Heading from "@/components/SectionHeading/Heading";
import Tag from "@/components/ui/Tag";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import type { ReactNode } from "react";

export type BlankSectionHeadingProps = {
  description?: string;
  margin?: MarginSize;
  children: ReactNode;
};

const BlankSectionHeading = ({ description, margin, children }: BlankSectionHeadingProps) => {
  const hasDescription = description && description.length > 0;

  return (
    <div className={getMarginSize(margin)}>
      <Heading as="span">{children}</Heading>
      {hasDescription && (
        <>
          {" "}
          <Tag>{description}</Tag>
        </>
      )}
    </div>
  );
};

export default BlankSectionHeading;
