import { cloneElement, isValidElement, type ReactElement, type ReactNode } from "react";

type SmallCapsProps = {
  children: ReactNode;
};

const renderSmallCaps = (node: ReactNode): ReactNode => {
  if (typeof node === "string") {
    return node.split(/([a-z]+)/).map((part, index) =>
      /^[a-z]+$/.test(part) ? (
        <span className="small-caps" key={`${part}-${index}`}>
          {part}
        </span>
      ) : (
        part
      )
    );
  }
  if (Array.isArray(node)) {
    return node.map(renderSmallCaps);
  }
  if (isValidElement(node)) {
    const element = node as ReactElement<{ children?: ReactNode }>;
    return cloneElement(element, {
      children: renderSmallCaps(element.props.children)
    });
  }
  return node;
};

const SmallCaps = ({ children }: SmallCapsProps) => {
  return <>{renderSmallCaps(children)}</>;
};

export default SmallCaps;
