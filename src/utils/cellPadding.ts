export type CellPaddingSize = "none" | "tight" | "normal";

const cellPaddingSizeCss: Record<CellPaddingSize, string> = {
  none: "",
  tight: "py-0.5 px-2",
  normal: "py-1 px-4"
};

export const getCellPaddingSize = (size?: CellPaddingSize) => {
  return cellPaddingSizeCss[size || "normal"];
};
