import classNames from "classnames";
import { useId } from "react";

type ChallengeSuspenseSize = "small" | "medium";
type ChallengeSuspenseProps = {
  size?: ChallengeSuspenseSize;
};

const ChallengeSuspense = ({ size = "medium" }: ChallengeSuspenseProps) => {
  const id1 = useId();
  const id2 = useId();

  const inputCss = classNames(
    "appearance-none rounded-full border-2 border-strong bg-input checked:bg-checked",
    {
      "size-3": size === "small",
      "size-4": size === "medium"
    }
  );

  return (
    <span className="space-x-0.25">
      <input id={id1} type="checkbox" className={inputCss} />
      <input id={id2} type="checkbox" className={inputCss} />
    </span>
  );
};

export default ChallengeSuspense;
