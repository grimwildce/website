export type ListColumnsValue = 2 | 3;

const columnsCss: Record<ListColumnsValue, string> = {
  2: "sm:columns-2",
  3: "sm:columns-2 md:columns-3"
};

export const getListColumns = (columns?: ListColumnsValue) => {
  if (!columns) return "";

  return columnsCss[columns];
};
