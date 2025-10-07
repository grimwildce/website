import Heading from "@/components/ui/Heading";
import Strong from "@/components/ui/Strong";
import StrongEm from "@/components/ui/StrongEm";
import Text from "@/components/ui/Text";
import type { ReactNode } from "react";

type PathProps = {
  id?: string;
  name: string;
  also?: string[];
  children?: ReactNode;
};

const Path = ({ id, name, also, children }: PathProps) => {
  const hasAlso = also && also.length > 0;

  return (
    <>
      <Heading level={2} pretitle="Path of the" id={id} margin={{ top: "large", bottom: "small" }}>
        {name}
      </Heading>
      {hasAlso && (
        <Text margin={{ top: "small" }}>
          <Strong allCaps>Also</Strong>:{" "}
          {also.map((item, index) => (
            <>
              <StrongEm key={index}>{item}</StrongEm>
              {index < also.length - 1 && ", "}
            </>
          ))}
        </Text>
      )}
      {children}
    </>
  );
};

export default Path;
