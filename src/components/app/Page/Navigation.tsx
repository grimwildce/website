import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";
import { Link } from "react-router";

type NestedPageNavigationItem = {
  name: string;
  anchor: string;
};

export type PageNavigationItem = {
  children?: NestedPageNavigationItem[];
} & NestedPageNavigationItem;

type NavigationProps = {
  navigation: PageNavigationItem[];
  open: boolean;
  onClose: (value: boolean) => void;
};

const Navigation = ({ navigation, open, onClose }: NavigationProps) => {
  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
      />

      <div className="fixed inset-0 flex">
        <DialogPanel
          transition
          className="relative ml-auto flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:translate-x-full"
        >
          <TransitionChild>
            <div className="absolute top-0 right-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
              <button type="button" onClick={() => onClose(false)} className="-m-2.5 p-2.5">
                <span className="sr-only">Close sidebar</span>
                <FontAwesomeIcon icon={faXmark} aria-hidden="true" className="size-6 text-white" />
              </button>
            </div>
          </TransitionChild>

          <div className="relative flex grow flex-col overflow-y-auto border-l p-6 gap-5 border-muted bg-panel-1">
            <nav className="flex flex-1 flex-col bg-panel-1">
              <ul role="list" className="flex flex-1 flex-col gap-y-2">
                {navigation.map((item) => (
                  <Item
                    key={`${item.name}-${item.anchor}`}
                    item={item}
                    onClick={() => onClose(false)}
                  />
                ))}
              </ul>
            </nav>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

type ItemProps = {
  item: PageNavigationItem;
  onClick?: () => void;
};

const Item = ({ item, onClick }: ItemProps) => {
  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className="flex flex-col">
      <Link to={item.anchor} className="block text-base-color hover:font-bold" onClick={onClick}>
        {item.name}
      </Link>
      {hasChildren && (
        <ul role="list" className="ml-4 flex flex-1 flex-col gap-y-1">
          {item.children!.map((child) => (
            <li key={`${child.name}-${child.anchor}`}>
              <Link
                to={child.anchor}
                className="block text-muted-color hover:font-bold"
                onClick={onClick}
              >
                {child.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Navigation;
