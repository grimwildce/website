import { getBorderColor, type BorderColor } from "@/utils/borderColor";
import classNames from "classnames";

type LineProps = {
  color?: BorderColor;
};

const Line = ({ color = "base" }: LineProps) => {
  const lineCss = classNames("border-t", getBorderColor(color));

  return <hr className={lineCss} />;
};

export default Line;
