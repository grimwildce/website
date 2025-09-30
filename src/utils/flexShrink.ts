export type FlexShrink = "none" | boolean;

export const getFlexShrink = (shrink?: FlexShrink): string => {
  if (shrink === "none") {
    return "shrink-0";
  } else if (shrink === true) {
    return "shrink";
  } else {
    return "";
  }
};
