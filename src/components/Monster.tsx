import Em from "@/components/ui/Em";
import SmallCaps from "@/components/ui/SmallCaps";
import Strong from "@/components/ui/Strong";
import StrongEm from "@/components/ui/StrongEm";
import Text from "@/components/ui/Text";
import PerspectiveDiceFive from "@/svgs/rpg_awesome/PerspectiveDiceFive";
import PerspectiveDiceFour from "@/svgs/rpg_awesome/PerspectiveDiceFour";
import PerspectiveDiceOne from "@/svgs/rpg_awesome/PerspectiveDiceOne";
import PerspectiveDiceSix from "@/svgs/rpg_awesome/PerspectiveDiceSix";
import PerspectiveDiceThree from "@/svgs/rpg_awesome/PerspectiveDiceThree";
import PerspectiveDiceTwo from "@/svgs/rpg_awesome/PerspectiveDiceTwo";
import { getSpacingSize } from "@/utils/spacing";
import classNames from "classnames";
import type { ReactNode } from "react";

const tableDiceIcon = {
  0: PerspectiveDiceOne,
  1: PerspectiveDiceTwo,
  2: PerspectiveDiceThree,
  3: PerspectiveDiceFour,
  4: PerspectiveDiceFive,
  5: PerspectiveDiceSix
};

type MonsterType =
  | "lurker"
  | "predator"
  | "brute"
  | "marauder"
  | "swarmer"
  | "protector"
  | "overseer"
  | "trickster"
  | "tactician"
  | "skirmisher"
  | "blaster"
  | "marksman";

type MonsterProps = {
  name: string;
  type: MonsterType;
  colors: string[];
  description: string;
  traits: string[];
  moves: string[];
  wants: string;
  doesntWant: string;
  sight: string;
  sound: string;
  smell: string;
  tableTitle: string;
  tableDescription?: string;
  tableRows: string[][];
  children?: ReactNode;
};

const Monster = ({
  name,
  type,
  colors,
  description,
  traits,
  moves,
  wants,
  doesntWant,
  sight,
  sound,
  smell,
  tableTitle,
  tableDescription,
  tableRows,
  children
}: MonsterProps) => {
  const hasChildren = Boolean(children);

  return (
    <div>
      <div className="flex items-center justify-between bg-solid text-solid-color py-1 px-4 rounded-t-sm border-t border-x border-muted">
        <div className="font-bold text-xl font-heading uppercase">{name}</div>
        <div className="uppercase text-sm text-muted-color">{type}</div>
      </div>
      <div className="flex flex-col border-b border-muted border-x sm:flex-row">
        {colors.slice(0, 3).map((color, index) => (
          <div
            key={`${color}-${index}`}
            className="text-xs text-muted-color text-center w-full border-muted py-0.5 not-last:border-b sm:w-1/3 sm:not-first:border-l sm:not-last:border-b-0"
          >
            {color}
          </div>
        ))}
      </div>
      <div className="p-4 border-x border-b border-muted">
        <Text size="small">{description}</Text>
      </div>
      <div className="border-x border-b border-muted p-4 grid gap-4 grid-cols-1 sm:grid-cols-2 items-stretch">
        <div className="text-sm">
          {traits.map((trait, index) => (
            <div key={`${trait}-${index}`} className="flex">
              <div className="flex-none">✱</div>
              <div className="flex-1 ml-2">
                <Em>{trait}</Em>
              </div>
            </div>
          ))}
        </div>
        <div className="text-sm">
          {moves.map((move, index) => (
            <div key={`${move}-${index}`} className="flex">
              <div className="flex-none">◉</div>
              <div className="flex-1 ml-2">
                <Strong>
                  <SmallCaps>{move}</SmallCaps>
                </Strong>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 border-x border-b border-muted space-y-1">
        <Text size="small">
          <StrongEm>Wants</StrongEm> <Em>{wants}</Em>
        </Text>
        <Text size="small">
          <StrongEm>Doesn't want</StrongEm> <Em>{doesntWant}</Em>
        </Text>
      </div>
      <div className="p-4 border-x border-muted space-y-1 text-sm">
        <div className="flex">
          <div className="flex-none">👁️</div>
          <div className="flex-1 ml-2">
            <Em>{sight}</Em>
          </div>
        </div>
        <div className="flex">
          <div className="flex-none">👂</div>
          <div className="flex-1 ml-2">
            <Em>{sound}</Em>
          </div>
        </div>
        <div className="flex">
          <div className="flex-none">👃</div>
          <div className="flex-1 ml-2">
            <Em>{smell}</Em>
          </div>
        </div>
      </div>
      <div
        className={classNames("border-x border-b border-muted", {
          "rounded-b-sm": !hasChildren
        })}
      >
        <table className="w-full">
          <thead>
            <tr>
              <td colSpan={tableRows.length} className="border-b px-4 py-1">
                <Strong allCaps>{tableTitle}</Strong>
                {tableDescription && (
                  <>
                    {" "}
                    <Strong>({tableDescription})</Strong>
                  </>
                )}
              </td>
            </tr>
          </thead>
          {tableRows.map((row, rowIndex) => {
            const rowKey = `row-${rowIndex}-${row.join("-")}`;
            const DiceIcon = tableDiceIcon[(rowIndex % 6) as keyof typeof tableDiceIcon];

            return (
              <tr key={rowKey} className={rowIndex % 2 === 0 ? undefined : "bg-panel-1"}>
                {row.map((col, colIndex) => {
                  return (
                    <td key={`col-${colIndex}-${col}`} className="px-4 py-1">
                      <div className="flex items-center">
                        <DiceIcon size="medium" />
                        <div className="text-sm ml-2">
                          <Em>{col}</Em>
                        </div>
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </table>
      </div>
      {hasChildren && (
        <div
          className={classNames(
            "px-4 pt-8 pb-4 border-x border-b border-muted",
            getSpacingSize("sm")
          )}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default Monster;
