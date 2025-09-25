import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
};

const ExternalLink = ({ href, children }: ExternalLinkProps) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center">
      {children}
      <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="ml-1" size="xs" />
    </a>
  );
};

export default ExternalLink;
