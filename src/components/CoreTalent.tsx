import Line from "@/components/ui/Line";
import Panel from "@/components/ui/Panel";
import Strong from "@/components/ui/Strong";
import { type MarginSize } from "@/utils/margin";
import type { ReactNode } from "react";

type CoreTalentProps = {
  name: string;
  growth: string;
  children: ReactNode;
  margin?: MarginSize;
};

const CoreTalent = ({ name, growth, children, margin }: CoreTalentProps) => {
  return (
    <Panel margin={margin}>
      <div className="flex justify-between items-baseline my-4">
        <div className="font-heading text-xl uppercase font-bold">{name}</div>
        <div className="font-bold uppercase">Core Talent</div>
      </div>
      <div className="my-4">{children}</div>
      <Line />
      <div className="my-4">
        <Strong smallCaps>Growth</Strong>: {growth}
      </div>
    </Panel>
  );
};

export default CoreTalent;
