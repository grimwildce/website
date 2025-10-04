import SmallCaps from "@/components/ui/SmallCaps";
import type { ReactNode } from "react";

type TagProps = {
  children: ReactNode;
};

const Tag = ({ children }: TagProps) => {
  return (
    <span className="font-light">
      [<SmallCaps>{children}</SmallCaps>]
    </span>
  );
};

export default Tag;
