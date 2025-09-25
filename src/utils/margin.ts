export type MarginSide = "both" | "top" | "bottom";
export type MarginValue = "none" | "small" | "medium" | "large";
export type MarginObject = { [K in MarginSide]?: MarginValue };
export type MarginSize = MarginValue | MarginObject;

const defaultMarginValue = "medium";
const marginSizeCss: Record<MarginSide, Record<MarginValue, string>> = {
  both: {
    none: "",
    small: "my-2",
    medium: "my-4",
    large: "my-8"
  },
  top: {
    none: "",
    small: "mt-2",
    medium: "mt-4",
    large: "mt-8"
  },
  bottom: {
    none: "",
    small: "mb-2",
    medium: "mb-4",
    large: "mb-8"
  }
};

const getMarginSizeDefault = (defaultMargin?: MarginSize): Record<MarginSide, string> => {
  if (!defaultMargin) {
    return {
      both: marginSizeCss.both[defaultMarginValue],
      top: marginSizeCss.top[defaultMarginValue],
      bottom: marginSizeCss.bottom[defaultMarginValue]
    };
  }

  if (typeof defaultMargin === "string") {
    return {
      both: marginSizeCss.both[defaultMargin],
      top: marginSizeCss.top[defaultMargin],
      bottom: marginSizeCss.bottom[defaultMargin]
    };
  }

  const { both, top, bottom } = defaultMargin;
  if (both) {
    return {
      both: marginSizeCss.both[both],
      top: marginSizeCss.top[both],
      bottom: marginSizeCss.bottom[both]
    };
  } else {
    const topMargin = top ? marginSizeCss.top[top] : marginSizeCss.top[defaultMarginValue];
    const bottomMargin = bottom
      ? marginSizeCss.bottom[bottom]
      : marginSizeCss.bottom[defaultMarginValue];
    return {
      both: `${topMargin} ${bottomMargin}`.trim(),
      top: topMargin,
      bottom: bottomMargin
    };
  }
};

// Accepts a string:
//   margin="small"
// Or an object:
//   margin={top: "small", bottom: "none"}
export const getMarginSize = (margin?: MarginSize, defaultMarginProp?: MarginSize): string => {
  const defaultMargin = getMarginSizeDefault(defaultMarginProp);

  console.log("Default Margin:", defaultMargin);

  if (!margin) return defaultMargin.both;

  if (typeof margin === "string") {
    return marginSizeCss.both[margin];
  }

  const { both, top, bottom } = margin;
  if (both) {
    return marginSizeCss.both[both];
  } else {
    return (
      [
        top !== "none" && (top ? marginSizeCss.top[top] : defaultMargin.top),
        bottom !== "none" && (bottom ? marginSizeCss.bottom[bottom] : defaultMargin.bottom)
      ]
        .filter(Boolean)
        .join(" ") || ""
    );
  }
};
