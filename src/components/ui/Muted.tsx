import { getTextSize, type TextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

type MutedProps = {
  size?: TextSize;
  children: ReactNode;
};

const Muted = ({ size = "small", children }: MutedProps) => {
  const mutedCss = classNames("text-muted-color italic", getTextSize(size));
  return <span className={mutedCss}>{children}</span>;
};

export default Muted;
