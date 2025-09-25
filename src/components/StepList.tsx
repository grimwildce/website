import Strong from "@/components/ui/Strong";
import { Children, cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type StepListItemProps = {
  number?: number;
  children: ReactNode;
};

const StepListItem = ({ number, children }: StepListItemProps) => {
  return (
    <li className="pl-7 pr-2 py-1 min-h-10 bg-panel-1 border border-base rounded-sm relative">
      {number !== undefined && (
        <div className="flex items-center justify-center size-8 bg-panel-3 rounded-sm absolute -left-4 top-1/2 -translate-y-1/2">
          <Strong>{number}</Strong>
        </div>
      )}
      {children}
    </li>
  );
};
StepListItem.displayName = "StepListItem";

type StepListProps = {
  children: ReactNode;
};

const StepList = ({ children }: StepListProps) => {
  const items = Children.toArray(children).map((child, idx) =>
    isValidElement(child) && (child.type as { displayName?: string }).displayName === "StepListItem"
      ? cloneElement(child as ReactElement<StepListItemProps>, {
          number: idx + 1,
          key: (child as ReactElement).key ?? idx
        })
      : child
  );
  return <ol className="px-6 space-y-4">{items}</ol>;
};

StepList.Item = StepListItem;
export default StepList;
