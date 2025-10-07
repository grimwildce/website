// type SectionHeadingProps = {
//   variant?: SectionHeadingVariant;
// } & (BlankSectionHeadingProps | SolidSectionHeadingProps);
import BlankSectionHeading, {
  type BlankSectionHeadingProps
} from "@/components/SectionHeading/BlankSectionHeading";
import SolidSectionHeading, {
  type SolidSectionHeadingProps
} from "@/components/SectionHeading/SolidSectionHeading";

type SectionHeadingProps =
  | ({ variant?: "blank" } & BlankSectionHeadingProps)
  | ({ variant: "solid" } & SolidSectionHeadingProps);

const variantComponent = {
  blank: BlankSectionHeading,
  solid: SolidSectionHeading
};

const SectionHeading = ({ variant = "blank", ...props }: SectionHeadingProps) => {
  const Component = variantComponent[variant];

  return <Component {...props} />;
};

export default SectionHeading;
