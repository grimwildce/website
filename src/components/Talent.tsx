import Strong from "@/components/ui/Strong";
import Tag from "@/components/ui/Tag";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import { getTextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

type TalentProps = {
  name: string;
  prohibited?: string;
  children: ReactNode;
  spacing?: SpacingSize;
};

const Talent = ({ name, prohibited, children, spacing = "md" }: TalentProps) => {
  return (
    <div className={getSpacingSize("xs")}>
      <div className="flex justify-between">
        <div className={classNames(getTextSize("large"))}>
          <Strong smallCaps>{name}</Strong>
        </div>
        {prohibited && (
          <div className={getTextSize("small")}>
            <Tag>Prohibited: {prohibited}</Tag>
          </div>
        )}
      </div>
      <div className={classNames(getSpacingSize(spacing))}>{children}</div>
    </div>
  );
};

export default Talent;
