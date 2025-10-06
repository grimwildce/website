import { DisclosureButton } from "@headlessui/react";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router";

type LinkProps = {
  to: string;
  forMobile?: boolean;
  className?: string;
  children?: ReactNode;
  onClick?: () => void;
};

const Link = ({ to, forMobile = false, className, children, onClick }: LinkProps) => {
  return forMobile ? (
    <DisclosureButton as={RouterLink} to={to} className={className} onClick={onClick}>
      {children}
    </DisclosureButton>
  ) : (
    <RouterLink to={to} className={className} onClick={onClick}>
      {children}
    </RouterLink>
  );
};

export default Link;
