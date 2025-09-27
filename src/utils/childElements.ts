import { Children, isValidElement, type ElementType, type ReactNode } from "react";

export const hasChildElementOfType = (children: ReactNode, elementType: ElementType): boolean => {
  return Children.toArray(children).some((child) => {
    return isValidElement(child) && child.type === elementType;
  });
};
