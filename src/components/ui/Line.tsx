import { getBorderColor, type BorderColor } from "@/utils/borderColor";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import classNames from "classnames";

type LineProps = {
  margin?: MarginSize;
  color?: BorderColor;
};

const Line = ({ margin, color = "base" }: LineProps) => {
  const lineCss = classNames("border-t", getBorderColor(color), getMarginSize(margin));

  return <hr className={lineCss} />;
};

export default Line;
