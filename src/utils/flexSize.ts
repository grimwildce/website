export type FlexSize = "auto" | "none" | 1 | 2;

const flexSizeCss: Record<FlexSize, string> = {
  auto: "flex-auto",
  none: "flex-none",
  1: "flex-1",
  2: "flex-2"
};

export const getFlexSize = (size?: FlexSize): string => {
  return size ? flexSizeCss[size] : "";
};
