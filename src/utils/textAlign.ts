export type TextAlign = "left" | "center" | "right" | "justify";

const alignCss: Record<TextAlign, string> = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify"
};

export const getTextAlign = (align?: TextAlign): string => {
  return align ? alignCss[align] : "";
};
