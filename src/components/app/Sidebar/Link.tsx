import { DisclosureButton } from "@headlessui/react";
import type { ReactNode } from "react";
import { Link as RouterLink } from "react-router";

type LinkProps = {
  to: string;
  forMobile?: boolean;
  className?: string;
  children?: ReactNode;
};

const Link = ({ to, forMobile = false, className, children }: LinkProps) => {
  return forMobile ? (
    <DisclosureButton as={RouterLink} to={to} className={className}>
      {children}
    </DisclosureButton>
  ) : (
    <RouterLink to={to} className={className}>
      {children}
    </RouterLink>
  );
};

export default Link;
