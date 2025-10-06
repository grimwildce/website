import SmallCaps from "@/components/ui/SmallCaps";
import TableContext, { type TableContextProps } from "@/components/ui/Table/TableContext";
import { useContext, type ReactNode } from "react";

type ContextAwareSmallCapsProps = {
  children: ReactNode;
} & TableContextProps;

const ContextAwareSmallCaps = ({ children, ...overrides }: ContextAwareSmallCapsProps) => {
  const { smallCaps } = useContext(TableContext);
  const hasSmallCaps = overrides.smallCaps ?? smallCaps;

  if (hasSmallCaps) {
    return <SmallCaps>{children}</SmallCaps>;
  }

  return <>{children}</>;
};

export default ContextAwareSmallCaps;
