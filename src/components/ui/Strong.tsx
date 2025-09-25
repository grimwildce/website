import { type MutuallyExclusiveBooleanProps } from "@/utils/customTypes";
import classNames from "classnames";
import { type ReactNode } from "react";

type StrongProps = {
  children: ReactNode;
} & MutuallyExclusiveBooleanProps<"allCaps" | "smallCaps">;

const Strong = ({ allCaps, smallCaps, children }: StrongProps) => {
  const strongCss = classNames({
    uppercase: allCaps,
    "font-text-sc": smallCaps
  });

  return <strong className={strongCss}>{children}</strong>;
};

export default Strong;
