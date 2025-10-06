import Link from "@/components/app/VerticalNav/Link";
import { faBook, faChevronRight, type IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import classNames from "classnames";
import { useLocation } from "react-router";

type NestedNavigationItem = {
  name: string;
  href: string;
  icon?: IconDefinition;
};
export type NavigationItem = {
  children?: NestedNavigationItem[];
} & NestedNavigationItem;

type ItemProps = {
  item: NavigationItem;
  onSelect?: () => void;
};

const Item = ({ item, onSelect }: ItemProps) => {
  const location = useLocation();

  const isActive = (item: NavigationItem | NestedNavigationItem) => {
    return location.pathname === item.href;
  };

  const isParentOfActive = (item: NavigationItem | NestedNavigationItem) => {
    return location.pathname.startsWith(item.href + "/");
  };

  const isActiveOrPareentOfActive = (item: NavigationItem | NestedNavigationItem) => {
    return isActive(item) || isParentOfActive(item);
  };

  const isOpen =
    isActiveOrPareentOfActive(item) ||
    (item.children && item.children.some((child) => isActiveOrPareentOfActive(child)));

  return (
    <li>
      {item.children ? (
        <Disclosure as="div" defaultOpen={isOpen}>
          <DisclosureButton
            className={classNames(
              "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-base-color hover:cursor-pointer"
            )}
          >
            <FontAwesomeIcon
              icon={item.icon ?? faBook}
              aria-hidden="true"
              size="lg"
              className="shrink-0"
            />
            <div className="flex-1">{item.name}</div>
            <FontAwesomeIcon
              icon={faChevronRight}
              aria-hidden="true"
              className="shrink-0 group-data-open:rotate-90"
            />
          </DisclosureButton>
          <DisclosurePanel as="ul" className="mt-1 px-2">
            <ul className="space-y-0.5">
              {item.children.map((subItem) => (
                <li
                  key={subItem.name}
                  className={classNames("rounded-md hover:cursor-pointer", {
                    "bg-panel-2": isActive(subItem),
                    "hover:bg-panel-2": !isActive(subItem)
                  })}
                >
                  <Link
                    to={subItem.href}
                    className={classNames("block py-2 pr-2 pl-9 text-sm/6 text-base-color")}
                    onClick={onSelect}
                  >
                    {subItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </DisclosurePanel>
        </Disclosure>
      ) : (
        <Link
          to={item.href}
          className={classNames(
            "flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-base-color hover:cursor-pointer",
            {
              "bg-panel-2": isActive(item),
              "hover:bg-panel-2": !isActive(item)
            }
          )}
          onClick={onSelect}
        >
          <FontAwesomeIcon
            icon={item.icon ?? faBook}
            aria-hidden="true"
            size="lg"
            className="shrink-0 text-base-color"
          />
          {item.name}
        </Link>
      )}
    </li>
  );
};

export default Item;
