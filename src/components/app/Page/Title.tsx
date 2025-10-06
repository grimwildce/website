import Container from "@/components/app/Container";
import Heading from "@/components/ui/Heading";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

type TitleProps = {
  bookTitle?: string;
  title?: string;
  pretitle?: string;
  hasNavigation?: boolean;
  onOpenNav?: () => void;
};

const Title = ({ bookTitle, title, pretitle, hasNavigation, onOpenNav }: TitleProps) => {
  const hasBookTitle = bookTitle && bookTitle.length > 0;
  const hasTitle = title && title.length > 0;

  if (!hasBookTitle && !hasTitle) {
    return null;
  }

  return (
    <div className="sticky bg-panel-2 shadow py-2 w-full top-16 left-0 z-30 lg:top-0">
      <Container>
        {hasBookTitle && (
          <div className={classNames("flex items-center justify-between", { "mb-4": hasTitle })}>
            <div className={classNames("font-heading font-bold text-2xl italic", {})}>
              {bookTitle}
            </div>
            {!hasTitle && hasNavigation && (
              <button
                type="button"
                className="ml-1 hover:bg-panel-3 rounded-md p-2 flex-none"
                onClick={onOpenNav}
              >
                <span className="sr-only">Open page navigation</span>
                <FontAwesomeIcon icon={faBarsStaggered} aria-hidden="true" />
              </button>
            )}
          </div>
        )}
        {hasTitle && (
          <div className="flex items-center justify-between">
            <Heading level={1} pretitle={pretitle} margin="none" noBorder>
              {title}
            </Heading>
            {hasNavigation && (
              <button
                type="button"
                className="ml-1 hover:bg-panel-3 rounded-md p-2 flex-none"
                onClick={onOpenNav}
              >
                <span className="sr-only">Open page navigation</span>
                <FontAwesomeIcon icon={faBarsStaggered} aria-hidden="true" />
              </button>
            )}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Title;
