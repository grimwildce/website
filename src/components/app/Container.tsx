import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-2xl w-full px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

export default Container;
