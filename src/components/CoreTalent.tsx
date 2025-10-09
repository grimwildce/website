import Line from "@/components/ui/Line";
import Panel from "@/components/ui/Panel";
import Strong from "@/components/ui/Strong";
import classNames from "classnames";
import type { ReactNode } from "react";

type CoreTalentProps = {
  name: string;
  growth: string;
  children: ReactNode;
};

const CoreTalent = ({ name, growth, children }: CoreTalentProps) => {
  return (
    <Panel>
      <div className={classNames("flex justify-between items-baseline")}>
        <div className="font-heading text-xl uppercase font-bold">{name}</div>
        <div className="font-bold uppercase">Core Talent</div>
      </div>
      <div>{children}</div>
      <Line />
      <div>
        <Strong smallCaps>Growth</Strong>: {growth}
      </div>
    </Panel>
  );
};

export default CoreTalent;
