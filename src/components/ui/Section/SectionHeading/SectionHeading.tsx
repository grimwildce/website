import BlankSectionHeading, {
  type BlankSectionHeadingProps
} from "@/components/ui/Section/SectionHeading/BlankSectionHeading";
import SolidSectionHeading, {
  type SolidSectionHeadingProps
} from "@/components/ui/Section/SectionHeading/SolidSectionHeading";

export type SectionHeadingProps =
  | ({ titleVariant?: "blank" } & BlankSectionHeadingProps)
  | ({ titleVariant: "solid" } & SolidSectionHeadingProps);

const variantComponent = {
  blank: BlankSectionHeading,
  solid: SolidSectionHeading
};

const SectionHeading = ({ titleVariant = "blank", ...props }: SectionHeadingProps) => {
  const Component = variantComponent[titleVariant];

  return <Component {...props} />;
};

export default SectionHeading;
