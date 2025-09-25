import { getMarginSize, type MarginSize } from "@/utils/margin";
import classNames from "classnames";
import { type ReactNode } from "react";

type PathCardProps = {
  name: string;
  description: string;
  icon: ReactNode;
  margin?: MarginSize;
};

const PathCard = ({ name, description, icon, margin }: PathCardProps) => {
  const containerCss = classNames("pt-4", getMarginSize(margin));

  return (
    <div className={containerCss}>
      <div className="relative flex flex-col bg-panel-1 border border-muted shadow pt-6 px-2 pb-2 rounded-md">
        <div className="absolute h-8 -top-4 left-1/2 -translate-x-1/2 bg-panel-3 border border-muted shadow w-9/12 rounded-md flex items-center justify-center font-bold">
          <div className="font-bold uppercase">{name}</div>
        </div>
        <div className="flex items-center justify-center my-2">{icon}</div>
        <div className="uppercase text-center text-sm">{description}</div>
      </div>
    </div>
  );
};

export default PathCard;
