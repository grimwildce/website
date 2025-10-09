import { getPaddingSize, type PaddingSize } from "@/utils/padding";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

type PanelRowProps = {
  padding?: PaddingSize;
  spacing?: SpacingSize;
  children: ReactNode;
};

const PanelRow = ({ padding = "md", spacing = "sm", children }: PanelRowProps) => {
  return (
    <div className={classNames("panel-row", getPaddingSize(padding), getSpacingSize(spacing))}>
      {children}
    </div>
  );
};
PanelRow.displayName = "Panel.Row";

export default PanelRow;
