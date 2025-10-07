export type MarginSide = "both" | "top" | "bottom";
export type MarginValue = "none" | "small" | "medium" | "large";
export type MarginObject = { [K in MarginSide]?: MarginValue };
export type MarginSize = MarginValue | MarginObject;

const defaultMarginValue = "medium";
const marginSizeCss: Record<MarginSide, Record<MarginValue, string>> = {
  both: {
    none: "",
    small: "my-4",
    medium: "my-8",
    large: "my-12"
  },
  top: {
    none: "",
    small: "mt-4",
    medium: "mt-8",
    large: "mt-12"
  },
  bottom: {
    none: "",
    small: "mb-4",
    medium: "mb-8",
    large: "mb-12"
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

const expandMargin = (margin?: MarginSize): MarginObject => {
  if (!margin) {
    return {
      both: defaultMarginValue
    };
  }

  if (typeof margin === "string") {
    return {
      both: margin
    };
  }

  const { both, top, bottom } = margin;
  if (both) {
    return {
      both
    };
  } else {
    return {
      top: top || defaultMarginValue,
      bottom: bottom || defaultMarginValue
    };
  }
};

export const resolveMargin = (
  margin?: MarginSize,
  defaultMargin?: MarginSize
): MarginSize | undefined => {
  if (!margin) return defaultMargin;
  if (!defaultMargin) return margin;

  const expandedMargin = expandMargin(margin);
  const expandedDefaultMargin = expandMargin(defaultMargin);

  if (expandedMargin.both) {
    return expandedMargin;
  }

  const { top, bottom } = expandedMargin;
  const { both: defaultBoth, top: defaultTop, bottom: defaultBottom } = expandedDefaultMargin;
  return {
    top: top || defaultBoth || defaultTop,
    bottom: bottom || defaultBoth || defaultBottom
  };
};

// Accepts a string:
//   margin="small"
// Or an object:
//   margin={top: "small", bottom: "none"}
export const getMarginSize = (margin?: MarginSize, defaultMarginProp?: MarginSize): string => {
  const defaultMargin = getMarginSizeDefault(defaultMarginProp);

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
