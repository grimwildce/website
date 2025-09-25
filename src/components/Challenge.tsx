import ChallengeSuspense from "@/components/ChallengeSuspense";
import ReferenceList, { type ReferenceItem } from "@/components/ReferenceList";
import Line from "@/components/ui/Line";
import Strong from "@/components/ui/Strong";
import { getDepth, type DepthValue } from "@/utils/depth";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { getTextSize, type TextSize } from "@/utils/textSize";
import classNames from "classnames";
import { type ReactNode } from "react";

type WidthSize = "small" | "medium" | "large" | "full";
type ChallengeProps = {
  title: string;
  poolSize: 4 | 6 | 8;
  textSize?: TextSize;
  margin?: MarginSize;
  width?: WidthSize;
  traits?: string[];
  moves?: string[];
  failState?: string;
  depth?: DepthValue;
  references?: ReferenceItem[];
};

const Challenge = ({
  title,
  poolSize,
  textSize,
  margin,
  width = "full",
  traits = [],
  moves = [],
  failState,
  depth = 1,
  references = []
}: ChallengeProps) => {
  const hasTraits = traits.length > 0;
  const hasMoves = moves.length > 0;
  const hasPanels = references.length > 0;

  const containerCss = classNames(
    "relative text-sm",
    getTextSize(textSize),
    getMarginSize(margin),
    {
      "w-full": width === "full",
      "w-xs": width === "large",
      "w-64": width === "medium",
      "w-56": width === "small"
    }
  );
  const referencesCss = classNames(
    "bg-panel-3 px-4 py-1 italic text-sm space-y-1",
    getDepth(depth + 1)
  );
  const contentCss = classNames("bg-panel-1 rounded-b-sm px-2 py-2 space-y-2", getDepth(depth));

  return (
    <div className={containerCss}>
      <div className="bg-solid text-solid-color font-text-sc font-bold px-4 py-1 rounded-t-sm">
        {poolSize}d | {title}
      </div>
      {hasPanels && <ReferenceList className={referencesCss} references={references} />}
      <div className="absolute top-5 right-1">
        <ChallengeSuspense />
      </div>
      <div className={contentCss}>
        {hasTraits && (
          <ul className="space-y-1">
            {traits.map((trait, index) => (
              <ChallengeItem variant="trait" key={index}>
                <em>{trait}</em>
              </ChallengeItem>
            ))}
          </ul>
        )}
        {hasTraits && (hasMoves || failState) && <Line color="muted" margin="none" />}
        {hasMoves && (
          <ul className="space-y-1">
            {moves.map((move, index) => (
              <ChallengeItem variant="move" key={index}>
                <Strong smallCaps>{move}</Strong>
              </ChallengeItem>
            ))}
          </ul>
        )}
        {hasMoves && failState && <Line color="muted" margin="none" />}
        {failState && (
          <ul className="space-y-1">
            <ChallengeItem variant="fail">
              <strong>
                <em>{failState}</em>
              </strong>
            </ChallengeItem>
          </ul>
        )}
      </div>
    </div>
  );
};

type ChallengeItemVariants = "trait" | "move" | "fail";
type ChallengeItemProps = {
  variant: ChallengeItemVariants;
  children: ReactNode;
};

const challengeItemIcons: Record<ChallengeItemVariants, ReactNode> = {
  trait: "✱",
  move: "◉",
  fail: "✘"
};

const ChallengeItem = ({ variant, children }: ChallengeItemProps) => {
  const icon = challengeItemIcons[variant];
  return (
    <li className="flex">
      <div className="w-6 text-center flex-none">{icon}</div>
      <div className="flex-1">{children}</div>
    </li>
  );
};

export default Challenge;
