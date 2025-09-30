import type { MutuallyExclusiveBooleanProps } from "@/utils/customTypes";
import { getTextSize, type TextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

type MutedProps = {
  size?: TextSize;
  children: ReactNode;
} & MutuallyExclusiveBooleanProps<"allCaps" | "smallCaps">;

const Muted = ({ allCaps, smallCaps, size = "small", children }: MutedProps) => {
  const mutedCss = classNames("text-muted-color italic", getTextSize(size), {
    uppercase: allCaps,
    "font-text-sc": smallCaps
  });
  return <span className={mutedCss}>{children}</span>;
};

export default Muted;
