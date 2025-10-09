import Heading from "@/components/SectionHeading/Heading";
import Tag from "@/components/ui/Tag";
import type { ReactNode } from "react";

export type BlankSectionHeadingProps = {
  description?: string;
  children: ReactNode;
};

const BlankSectionHeading = ({ description, children }: BlankSectionHeadingProps) => {
  const hasDescription = description && description.length > 0;

  return (
    <div>
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
