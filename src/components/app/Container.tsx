import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

type ContainerProps = {
  spacing?: SpacingSize;
  children?: ReactNode;
};

const Container = ({ spacing, children }: ContainerProps) => {
  return (
    <div className="flex justify-center w-full">
      <div className={classNames("max-w-2xl w-full px-4 sm:px-6 lg:px-8", getSpacingSize(spacing))}>
        {children}
      </div>
    </div>
  );
};

export default Container;
