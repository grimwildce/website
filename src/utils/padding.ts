type PaddingSizeValue = "none" | "xs" | "sm" | "md" | "lg";
type PaddingObjectSide = "x" | "y";
type PaddingObject = { [K in PaddingObjectSide]?: PaddingSizeValue };
import classNames from "classnames";

export type PaddingSize = PaddingSizeValue | PaddingObject;

const paddingSizeCss: Record<PaddingObjectSide | "both", Record<PaddingSizeValue, string>> = {
  both: {
    none: "",
    xs: "p-1",
    sm: "p-2",
    md: "p-4",
    lg: "p-8"
  },
  x: {
    none: "",
    xs: "px-1",
    sm: "px-2",
    md: "px-4",
    lg: "px-8"
  },
  y: {
    none: "",
    xs: "py-1",
    sm: "py-2",
    md: "py-4",
    lg: "py-8"
  }
};

const mergePaddingSizes = (size1?: PaddingSize, size2?: PaddingSize): PaddingSize | undefined => {
  // Return undefined if both sides are undefined
  if (typeof size1 === "undefined" && typeof size2 === "undefined") return undefined;

  // Return the defined size if one side is undefined
  if (typeof size1 === "undefined") return size2;
  if (typeof size2 === "undefined") return size1;

  // If side 1 is a string, keep it
  if (typeof size1 === "string") return size1;

  // Expand object sides
  const { x: x1, y: y1 } = size1;
  const { x: x2, y: y2 } = typeof size2 === "string" ? { x: size2, y: size2 } : size2;

  // Merge sides, using side 2 only if side 1 is undefined
  const merged: PaddingObject = {
    x: x1 ?? x2,
    y: y1 ?? y2
  };

  return merged;
};

export const getPaddingSize = (size?: PaddingSize, defaultSize?: PaddingSize): string => {
  const paddingSize = mergePaddingSizes(size, defaultSize);

  if (typeof paddingSize === "undefined") return paddingSizeCss.both.none;
  if (typeof paddingSize === "string") return paddingSizeCss.both[paddingSize];

  const { x, y } = paddingSize;

  return classNames(paddingSizeCss.x[x ?? "none"], paddingSizeCss.y[y ?? "none"]);
};
