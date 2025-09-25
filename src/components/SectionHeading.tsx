import Heading from "@/components/ui/Heading";
import { getMarginSize, type MarginSize } from "@/utils/margin";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import type { ReactNode } from "react";

type SectionHeadingProps = {
  icon?: IconDefinition;
  description?: string;
  margin?: MarginSize;
  children: ReactNode;
};

const SectionHeading = ({ icon, description, margin, children }: SectionHeadingProps) => {
  const hasIcon = typeof icon !== "undefined";
  const hasDescription = typeof description !== "undefined";

  const headingCss = classNames(
    "flex items-baseline py-0.5 justify-between rounded-sm bg-panel-1",
    getMarginSize(margin),
    {
      "border-l-8": !hasIcon
    }
  );

  return (
    <div className={headingCss}>
      <div className="flex">
        {hasIcon && (
          <div className="bg-solid text-solid-color rounded-l-sm p-1">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <div className="px-2">
          <Heading level={4} margin="none">
            {children}
          </Heading>
        </div>
      </div>
      {hasDescription && <div className="text-sm italic pr-2">{description}</div>}
    </div>
  );
};

export default SectionHeading;
