import { type TextSize } from "@/utils/textSize";
import { createContext } from "react";

export type ListContextProps = {
  italic?: boolean;
  muted?: boolean;
  textSize?: TextSize;
};

const ListContext = createContext<ListContextProps>({});

export default ListContext;
