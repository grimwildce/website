import { getMarginSize, type MarginSize } from "@/utils/margin";
import classNames from "classnames";
import { type ReactNode } from "react";

type ColumnSize = "small" | "medium" | "large";
type GapSize = "none" | "small" | "medium" | "large";
type GridProps = {
  columns?: ColumnSize;
  gap?: GapSize;
  margin?: MarginSize;
  children?: ReactNode;
};

const Grid = ({ children, columns = "medium", gap = "medium", margin }: GridProps) => {
  const gridCss = classNames("grid", getMarginSize(margin), {
    "grid-cols-1 sm:grid-cols-2": columns === "large",
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-3": columns === "medium",
    "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4": columns === "small",
    "gap-0": gap === "none",
    "gap-2": gap === "small",
    "gap-4": gap === "medium",
    "gap-6": gap === "large"
  });
  return <div className={gridCss}>{children}</div>;
};

export default Grid;
