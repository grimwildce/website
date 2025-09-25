import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import classNames from "classnames";
import { Link, useLocation } from "react-router";

type NestedNavigationItem = {
  name: string;
  href: string;
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
              "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-base-color hover:bg-sidebar-active hover:cursor-pointer"
            )}
          >
            <FontAwesomeIcon
              icon={faChevronRight}
              aria-hidden="true"
              className="size-5 shrink-0 text-base-color group-data-open:rotate-90"
            />
            {item.name}
          </DisclosureButton>
          <DisclosurePanel as="ul" className="mt-1 px-2">
            {item.children.map((subItem) => (
              <li
                key={subItem.name}
                className={classNames("first:rounded-t-md last:rounded-b-md", {
                  "bg-sidebar-active": isActive(subItem),
                  "hover:bg-sidebar-active": !isActive(subItem)
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
          </DisclosurePanel>
        </Disclosure>
      ) : (
        <Link
          to={item.href}
          className={classNames(
            "block rounded-sm py-2 pr-2 pl-10 text-sm/6 font-semibold text-base-color",
            {
              "bg-sidebar-active": isActive(item),
              "hover:bg-sidebar-active": !isActive(item)
            }
          )}
          onClick={onSelect}
        >
          {item.name}
        </Link>
      )}
    </li>
  );
};

export default Item;
