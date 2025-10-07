import Line from "@/components/ui/Line";
import Panel from "@/components/ui/Panel";
import Strong from "@/components/ui/Strong";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import classNames from "classnames";
import type { ReactNode } from "react";

type CoreTalentProps = {
  name: string;
  growth: string;
  children: ReactNode;
  margin?: MarginSize;
};

const CoreTalent = ({ name, growth, children, margin }: CoreTalentProps) => {
  const interiorMargin = getMarginSize("small");

  return (
    <Panel margin={margin}>
      <div className={classNames("flex justify-between items-baseline", interiorMargin)}>
        <div className="font-heading text-xl uppercase font-bold">{name}</div>
        <div className="font-bold uppercase">Core Talent</div>
      </div>
      <div className={interiorMargin}>{children}</div>
      <Line margin="small" />
      <div className={interiorMargin}>
        <Strong smallCaps>Growth</Strong>: {growth}
      </div>
    </Panel>
  );
};

export default CoreTalent;
