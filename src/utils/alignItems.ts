export type AlignItemsValue = "start" | "end" | "center" | "baseline" | "stretch";

const alignItemsCss: Record<AlignItemsValue, string> = {
  start: "items-start",
  end: "items-end",
  center: "items-center",
  baseline: "items-baseline",
  stretch: "items-stretch"
};

export const getAlignItems = (alignItems?: AlignItemsValue) => {
  if (!alignItems) return "";

  return alignItemsCss[alignItems];
};
