import SmallCaps from "@/components/ui/SmallCaps";
import { type ReactNode } from "react";

type MoveProps = {
  children: ReactNode;
};

const Move = ({ children }: MoveProps) => {
  return (
    <span className="font-light">
      <SmallCaps>{children}</SmallCaps>
    </span>
  );
};

export default Move;
