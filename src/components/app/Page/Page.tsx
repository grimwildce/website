import Container from "@/components/app/Container";
import Navigation, { type PageNavigationItem } from "@/components/app/Page/Navigation";
import Title from "@/components/app/Page/Title";
import type { SpacingSize } from "@/utils/spacing";
import { useState, type ReactNode } from "react";

type PageProps = {
  bookTitle?: string;
  title?: string;
  pretitle?: string;
  spacing?: SpacingSize;
  navigation?: PageNavigationItem[];
  children?: ReactNode;
};

const Page = ({ bookTitle, title, pretitle, spacing = "md", navigation, children }: PageProps) => {
  const [navOpen, setNavOpen] = useState(false);
  const hasNavigation = navigation && navigation.length > 0;

  return (
    <>
      <Title
        bookTitle={bookTitle}
        title={title}
        pretitle={pretitle}
        hasNavigation={hasNavigation}
        onOpenNav={() => setNavOpen(true)}
      />
      <Container spacing={spacing}>{children}</Container>
      <div className="mb-10" />
      {hasNavigation && (
        <Navigation navigation={navigation} open={navOpen} onClose={() => setNavOpen(false)} />
      )}
    </>
  );
};

export default Page;
