import Heading from "@/components/SectionHeading/Heading";
import { type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";
import type { ReactNode } from "react";

export type SolidSectionHeadingProps = {
  icon?: IconDefinition;
  description?: string;
  children: ReactNode;
};

const SolidSectionHeading = ({ icon, description, children }: SolidSectionHeadingProps) => {
  const hasIcon = typeof icon !== "undefined";
  const hasDescription = typeof description !== "undefined";

  const wrapperCss = classNames(
    "flex items-baseline py-0.5 justify-between rounded-sm bg-panel-1",
    {
      "border-l-8": !hasIcon
    }
  );

  return (
    <div className={wrapperCss}>
      <div className="flex">
        {hasIcon && (
          <div className="bg-solid text-solid-color rounded-l-sm p-1">
            <FontAwesomeIcon icon={icon} />
          </div>
        )}
        <Heading as="div" className="px-2">
          {children}
        </Heading>
      </div>
      {hasDescription && <div className="text-sm italic pr-2">{description}</div>}
    </div>
  );
};

export default SolidSectionHeading;
