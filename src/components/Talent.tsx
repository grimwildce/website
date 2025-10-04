import Strong from "@/components/ui/Strong";
import Tag from "@/components/ui/Tag";
import Text, { type TextProps } from "@/components/ui/Text";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getSpacingSize, type SpacingSize } from "@/utils/spacing";
import { getTextSize } from "@/utils/textSize";
import classNames from "classnames";
import type { ReactNode } from "react";

type TalentProps = {
  name: string;
  prohibited?: string;
  children: ReactNode;
  margin?: MarginSize;
  spacing?: SpacingSize;
};

const defaultMargin: MarginSize = { top: "medium", bottom: "large" };

const Talent = ({ name, prohibited, children, margin, spacing = "medium" }: TalentProps) => {
  const containerCss = classNames(getMarginSize(margin, defaultMargin));
  const titleCss = classNames(
    getMarginSize({ top: "none", bottom: "small" }),
    getTextSize("large")
  );
  const contentCss = classNames(getSpacingSize(spacing));

  return (
    <div className={containerCss}>
      <div className="flex justify-between">
        <div className={titleCss}>
          <Strong smallCaps>{name}</Strong>
        </div>
        {prohibited && (
          <div className={getTextSize("small")}>
            <Tag>Prohibited: {prohibited}</Tag>
          </div>
        )}
      </div>
      <div className={contentCss}>{children}</div>
    </div>
  );
};

type TalentTextProps = Omit<TextProps, "margin">;

const TalentText = ({ children, ...props }: TalentTextProps) => {
  return (
    <Text margin="none" {...props}>
      {children}
    </Text>
  );
};

Talent.Text = TalentText;
export default Talent;
