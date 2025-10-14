import AppNavigation, { type AppNavigationItem } from "@/components/app/AppNavigation";
import Container from "@/components/app/Container";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogBackdrop, DialogPanel, TransitionChild } from "@headlessui/react";
import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router";

const navigation: AppNavigationItem[] = [
  {
    name: "Grimwild Community Edition",
    href: "/grimwild",
    children: [
      { name: "About", href: "/grimwild" },
      { name: "Chapter 1: Gameplay", href: "/grimwild/chapter-1" },
      { name: "Chapter 2: GM Toolkit", href: "/grimwild/chapter-2" },
      { name: "Chapter 3: Adventurers", href: "/grimwild/chapter-3" },
      { name: "Chapter 4: Exploration", href: "/grimwild/chapter-4" },
      { name: "Chapter 5: Monsters", href: "/grimwild/chapter-5" },
      { name: "Chapter 7: Extras", href: "/grimwild/chapter-7" }
    ]
  }
];

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      // Wait for DOM to render
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, [location]);

  const handleMobileSidebarSelect = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Dialog sidebar for mobile */}
      <Dialog open={sidebarOpen} onClose={setSidebarOpen} className="relative z-50 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-900/80 transition-opacity duration-300 ease-linear data-closed:opacity-0"
        />

        <div className="fixed inset-0 flex">
          <DialogPanel
            transition
            className="relative mr-16 flex w-full max-w-xs flex-1 transform transition duration-300 ease-in-out data-closed:-translate-x-full"
          >
            <TransitionChild>
              <div className="absolute top-0 left-full flex w-16 justify-center pt-5 duration-300 ease-in-out data-closed:opacity-0">
                <button
                  type="button"
                  onClick={() => setSidebarOpen(false)}
                  className="-m-2.5 p-2.5"
                >
                  <span className="sr-only">Close sidebar</span>
                  <FontAwesomeIcon
                    icon={faXmark}
                    aria-hidden="true"
                    className="size-6 text-white"
                  />
                </button>
              </div>
            </TransitionChild>

            <AppNavigation navigation={navigation} onSelect={handleMobileSidebarSelect} />
          </DialogPanel>
        </div>
      </Dialog>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
        <AppNavigation navigation={navigation} />
      </div>

      <div className="sticky top-0 z-40 bg-panel-1 lg:hidden">
        <Container>
          <div className="flex items-center h-16">
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="mr-1 hover:bg-panel-2 rounded-md p-1"
            >
              <span className="sr-only">Open site navigation</span>
              <FontAwesomeIcon icon={faBars} size="lg" aria-hidden="true" />
            </button>
            <div className="flex-1">
              <span className="font-heading text-heading-color font-bold text-lg">Grimwild</span>
              <span className="text-muted-color text-base ml-2">Community Hub</span>
            </div>
          </div>
        </Container>
      </div>

      <main className="lg:pl-72">
        <Outlet />
      </main>
    </>
  );
};

export default App;
