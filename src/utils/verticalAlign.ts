export type VerticalAlign = "top" | "middle" | "bottom";

const verticalAlignCss: Record<VerticalAlign, string> = {
  top: "align-top",
  middle: "align-middle",
  bottom: "align-bottom"
};

export const getVerticalAlign = (align?: VerticalAlign): string => {
  return align ? verticalAlignCss[align] : "";
};
