import ListContext, { type ListContextType } from "@/components/ui/List/ListContext";
import Muted from "@/components/ui/Muted";
import { getTextSize } from "@/utils/textSize";
import classNames from "classnames";
import { useContext, type ReactNode } from "react";

type ListItemProps = {
  children: ReactNode;
} & ListContextType;

const ListItem = ({ children, ...overrides }: ListItemProps) => {
  const context = useContext(ListContext);

  const textSize = overrides.textSize ?? context.textSize ?? "medium";
  const muted = overrides.muted ?? context.muted;
  const italic = overrides.italic ?? context.italic;

  const itemCss = classNames(getTextSize(textSize), {
    "[&::marker]:text-muted-color": muted,
    italic: italic
  });

  return (
    <li className={itemCss}>{muted ? <Muted size={textSize}>{children}</Muted> : children}</li>
  );
};

export default ListItem;
