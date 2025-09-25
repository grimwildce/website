import Heading from "@/components/ui/Heading";
import Stack from "@/components/ui/Stack";
import classNames from "classnames";
import type { ReactNode } from "react";

type ChapterTitleProps = {
  children: ReactNode;
  description?: string;
  center?: boolean;
};

const ChapterTitle = ({ children, description, center = false }: ChapterTitleProps) => {
  const descriptionCss = classNames("font-heading text-2xl font-bold", {
    "text-center": center
  });

  return (
    <Stack spacing="none" margin={{ top: "large" }}>
      {description && <div className={descriptionCss}>{description}:</div>}
      <Heading level={1} margin="none" center={center}>
        {children}
      </Heading>
    </Stack>
  );
};

export default ChapterTitle;
