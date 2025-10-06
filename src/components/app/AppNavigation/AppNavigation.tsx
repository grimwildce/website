import Item, { type AppNavigationItem } from "@/components/app/AppNavigation/Item";

type VerticalNavProps = {
  navigation: AppNavigationItem[];
  onSelect?: () => void;
};

const VerticalNav = ({ navigation, onSelect }: VerticalNavProps) => {
  return (
    <div className="relative flex grow flex-col overflow-y-auto border-r px-6 gap-5 border-muted bg-panel-1">
      <div className="h-16 shrink-0 text-heading-color font-heading flex flex-col justify-center">
        <div>
          <span className="font-heading font-bold text-lg">Grimwild</span>
          <span className="text-muted-color text-base ml-2">Community Hub</span>
        </div>
      </div>
      <nav className="relative flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <Item key={`${item.name}-${item.href}`} item={item} onSelect={onSelect} />
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default VerticalNav;
