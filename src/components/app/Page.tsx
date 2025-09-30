import Heading from "@/components/ui/Heading";
import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
};

const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <div className="flex justify-center w-full">
      <div className="max-w-2xl w-full px-4 sm:px-6 lg:px-8">{children}</div>
    </div>
  );
};

type PageProps = {
  title?: string;
  pretitle?: string;
  children?: ReactNode;
};

const Page = ({ title, pretitle, children }: PageProps) => {
  const hasTitle = title && title.length > 0;
  const hasPretitle = pretitle && pretitle.length > 0;

  if (!hasTitle && !hasPretitle) {
    return <PageContainer>{children}</PageContainer>;
  }

  return (
    <>
      <div className="h-24 sticky top-16 left-0 w-full z-30 lg:top-0">
        <div className="flex flex-col">
          <div className="flex flex-col justify-center bg-panel-2 h-20 shadow">
            <PageContainer>
              {hasPretitle && hasTitle && (
                <Heading level={1} pretitle={pretitle} margin="none" noBorder>
                  {title}
                </Heading>
              )}
            </PageContainer>
          </div>
          <div className="h-4 bg-topbar-transition"></div>
        </div>
      </div>
      <PageContainer>{children}</PageContainer>
    </>
  );
};

export default Page;
