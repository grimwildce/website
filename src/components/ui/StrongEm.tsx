import Em from "@/components/ui/Em";
import Strong, { type StrongProps } from "@/components/ui/Strong";

const StrongEm = ({ children, ...props }: StrongProps) => {
  return (
    <Strong {...props}>
      <Em>{children}</Em>
    </Strong>
  );
};

export default StrongEm;
