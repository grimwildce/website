import Item, { type NavigationItem } from "@/components/app/Sidebar/Item";

type SidebarProps = {
  navigation: NavigationItem[];
  onSelect?: () => void;
};

const Sidebar = ({ navigation, onSelect }: SidebarProps) => {
  return (
    <div className="relative flex grow flex-col overflow-y-auto border-r px-6 gap-5 border-sidebar bg-sidebar">
      <div className="h-16 shrink-0 text-heading-color font-heading flex flex-col justify-center">
        <div className="flex items-baseline justify-between">
          <div className="font-bold text-lg">Grimwild</div>
          <div className="italic text-sm text-muted-color">Community Edition</div>
        </div>
      </div>
      <nav className="relative flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col">
          <li>
            <ul role="list" className="-mx-2">
              {navigation.map((item) => (
                <Item key={item.name} item={item} onSelect={onSelect} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
