import Muted from "@/components/ui/Muted";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getTextAlign, type TextAlign } from "@/utils/textAlign";
import { getTextSize, type TextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

type TextProps = {
  children?: ReactNode;
  align?: TextAlign;
  margin?: MarginSize;
  size?: TextSize;
  muted?: boolean;
};

const Text = ({ align, margin, size = "medium", muted = false, children }: TextProps) => {
  const className = classNames(getMarginSize(margin), getTextAlign(align), getTextSize(size));
  return <p className={className}>{muted ? <Muted size={size}>{children}</Muted> : children}</p>;
};

export default Text;
