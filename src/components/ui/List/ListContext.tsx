import { type TextSize } from "@/utils/textSize";
import { createContext } from "react";

export type ListContextType = {
  italic?: boolean;
  muted?: boolean;
  textSize?: TextSize;
};

const ListContext = createContext<ListContextType>({});

export default ListContext;
