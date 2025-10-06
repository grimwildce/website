import Container from "@/components/app/Container";
import Navigation, { type PageNavigationItem } from "@/components/app/Page/Navigation";
import Title from "@/components/app/Page/Title";
import { useState, type ReactNode } from "react";

type PageProps = {
  navigation?: PageNavigationItem[];
  bookTitle?: string;
  title?: string;
  pretitle?: string;
  children?: ReactNode;
};

const Page = ({ bookTitle, title, pretitle, navigation, children }: PageProps) => {
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
      <Container>{children}</Container>
      {hasNavigation && (
        <Navigation navigation={navigation} open={navOpen} onClose={() => setNavOpen(false)} />
      )}
    </>
  );
};

export default Page;
