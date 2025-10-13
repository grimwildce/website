import SectionHeading, { type SectionHeadingProps } from "@/components/ui/Section/SectionHeading";
import Stack from "@/components/ui/Stack";
import type { SpacingSize } from "@/utils/spacing";
import type { ReactNode } from "react";

type SectionProps = {
  title: ReactNode;
  spacing?: SpacingSize;
  children: ReactNode;
} & SectionHeadingProps;

const Section = ({ title, spacing = "md", children, ...sectionHeadingProps }: SectionProps) => {
  return (
    <Stack spacing="sm">
      <SectionHeading {...sectionHeadingProps}>{title}</SectionHeading>
      <Stack spacing={spacing}>{children}</Stack>
    </Stack>
  );
};

export default Section;
