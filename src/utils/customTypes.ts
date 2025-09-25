export type MutuallyExclusiveBooleanProps<Keys extends string> =
  | {
      [K in Keys]: { [P in K]: true } & { [P in Exclude<Keys, K>]?: false | undefined };
    }[Keys]
  | { [K in Keys]?: false | undefined };
