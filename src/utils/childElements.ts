import { Children, isValidElement, type ReactNode } from "react";

export const hasChildElementOfType = (children: ReactNode, elementDisplayName: string): boolean => {
  return Children.toArray(children).some((child) => {
    return (
      isValidElement(child) &&
      (child.type as { displayName?: string }).displayName === elementDisplayName
    );
  });
};
