import Muted from "@/components/ui/Muted";
import { getTextAlign, type TextAlign } from "@/utils/textAlign";
import { getTextSize, type TextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

export type TextProps = {
  children?: ReactNode;
  align?: TextAlign;
  size?: TextSize;
  muted?: boolean;
};

const Text = ({ align, size = "medium", muted = false, children }: TextProps) => {
  const className = classNames(getTextAlign(align), getTextSize(size));
  return <p className={className}>{muted ? <Muted size={size}>{children}</Muted> : children}</p>;
};

export default Text;
