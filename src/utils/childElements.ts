import { Children, isValidElement, type ElementType, type ReactNode } from "react";

export const hasChildElementOfType = (children: ReactNode, elementType: ElementType): boolean => {
  return Children.toArray(children).some((child) => {
    if (isValidElement(child)) console.log("type", child.type);
    return isValidElement(child) && child.type === elementType;
  });
};
