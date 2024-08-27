import { Link, useRemember } from "@inertiajs/react";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import uuid from "react-uuid";
import SidebarComponent from "../Layouts/Components/SidebarComponent";

const adminAndSuperAdminMenus = [
  {
    Id: uuid(),
    MenuTitle: "Home",
    Icon: "fa-brands fa-fort-awesome",
    Route: "auth.home",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Pages",
    Icon: "fa-brands fa-page4",
    Route: "pages.index",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Services",
    Icon: "fa-solid fa-hands-holding-child",
    Route: "auth.our-services",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Deposit Products",
    Icon: "fa-solid fa-piggy-bank",
    Route: "auth.deposit-products",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Publication",
    Icon: "fa-solid fa-sack-dollar",
    Route: "auth.publication",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Downloads",
    Icon: "fa-solid fa-file-pdf",
    Route: "auth.downloads",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Notices",
    Icon: "fa-solid fa-bullhorn",
    Route: "auth.notices",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Slider Images",
    Icon: "fa-solid fa-panorama",
    Route: "auth.slider-images",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Gallery Images",
    Icon: "fa-regular fa-images",
    Route: "auth.gallery-images",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Leaders",
    Icon: "fa-solid fa-user-tie",
    Route: "auth.leaders",
    Menus: [],
  },
  {
    Id: uuid(),
    MenuTitle: "Job Circulars",
    Icon: "fa-solid fa-helmet-safety",
    Route: "auth.job-circulars",
    Menus: [],
  },
  // {
  //   Id: uuid(),
  //   MenuTitle: 'Users',
  //   Icon: 'fa-solid fa-users',
  //   Route: '/auth/users',
  //   Menus: [],
  // },
  {
    Id: uuid(),
    MenuTitle: "Settings",
    Icon: "fa-solid fa-gear",
    Route: "auth.settings",
    Menus: [],
  },
  // {
  //   Id: uuid(),
  //   MenuTitle: 'Account Settings',
  //   Icon: 'fa-solid fa-user-gear',
  //   Route: 'auth/account-settings',
  //   Menus: [],
  // },
];

export default function Authenticated({ user, header, children }) {
  const [sidebarOpen, setSidebarOpen] = useRemember(false);
  const [menus, setMenus] = useRemember([]);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    setMenus(adminAndSuperAdminMenus);
  }, [user, menus]);

  return (
    <>
      <div className="relative w-full h-screen bg-background">
        <section className={`ml-14 h-full`}>
          <header className="w-full h-16">
            {/* <Header /> */}
            <header className="flex items-center justify-between w-full h-full px-6 shadow bg-surface text-onSurface">
              <div className="flex items-center gap-2 cursor-pointer">
                <Link
                  href={route("home")}
                  className="flex items-center justify-center p-2 text-xl transition-all duration-300 rounded-full h-9 w-9 bg-primary text-onPrimary hover:scale-110 md:hidden"
                >
                  <i className="fa-solid fa-repeat"></i>

                  <span className="sr-only ">Switch To Front</span>
                </Link>
                <Link
                  href={route("home")}
                  className="hidden transition-all duration-300 text-onSurface hover:underline md:block"
                >
                  <span className="">Switch To Front</span>
                </Link>
              </div>
              <div className="flex items-center h-full gap-2">
                {/* <ThemeSwitch /> */}

                {/* <div className="relative h-full group">
                      <button className="flex items-center h-full gap-2">
                        <span className="flex items-center h-full">
                          <button className="relative flex items-center justify-center p-2 text-xl transition-all duration-300 rounded-full h-9 w-9 bg-primary text-onPrimary hover:scale-110">
                            <i className="fa-brands fa-pagelines" />
                          </button>
                        </span>
                        <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                          <div className="text-left">
                            <div className="">Head Office</div>
                            <div className="text-[9px]">Branch</div>
                          </div>
                        </div>
                      </button>
                    </div> */}

                <div className="relative h-full group">
                  <button className="flex items-center h-full gap-2">
                    <span className="flex items-center h-full">
                      <img
                        src={user?.photo}
                        // src={
                        //   authUser?.user.photo
                        //     ? authUser?.user.photo
                        //     : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH_mjW-rvOfpg1q3Lum1d4HbvOIFhrSidaaA&usqp=CAU'
                        // }
                        alt="user profile"
                        className="rounded-full h-9 w-9"
                      />
                    </span>
                    <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
                      <div className="text-left">
                        <div className="">{user?.name}</div>
                        <div className="text-[9px]">
                          {user?.role ? user?.role : "Visitor"}
                        </div>
                      </div>
                    </div>
                  </button>
                </div>

                <div className="">
                  <Link
                    className="flex items-center justify-center p-2 text-xl transition-all duration-300 rounded-full h-9 w-9 bg-primary text-onPrimary hover:scale-110"
                    href={route("logout")}
                    method="post"
                  >
                    <span className="sr-only">Log out</span>
                    <i className="fa-solid fa-right-from-bracket"></i>
                  </Link>
                </div>
              </div>
            </header>
          </header>
          <section className="h-[calc(100vh-112px)] overflow-auto">
            <Outlet />
            {children}
          </section>
          <section id="footer" className="w-full h-12 mt-auto">
            {/* <Footer /> */}
            <footer className="flex items-center justify-center w-full h-full border-l shadow bg-surface text-onSurface">
              <p className="text-sm font-light text-center">
                Developed by DC Quantum Labs
              </p>
            </footer>
          </section>
        </section>
        <section className="fixed top-0 left-0 h-full">
          <SidebarComponent
            menus={menus}
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            toggleSidebar={toggleSidebar}
          />
        </section>
      </div>
    </>
    // <div className="min-h-screen bg-gray-100">
    //     <nav className="bg-white border-b border-gray-100">
    //         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    //             <div className="flex justify-between h-16">
    //                 <div className="flex">
    //                     <div className="flex items-center shrink-0">
    //                         <Link href="/">
    //                             <ApplicationLogo className="block w-auto text-gray-800 fill-current h-9" />
    //                         </Link>
    //                     </div>

    //                     <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
    //                         <NavLink href={route('dashboard')} active={route().current('dashboard')}>
    //                             Dashboard
    //                         </NavLink>
    //                     </div>
    //                 </div>

    //                 <div className="hidden sm:flex sm:items-center sm:ms-6">
    //                     <div className="relative ms-3">
    //                         <Dropdown>
    //                             <Dropdown.Trigger>
    //                                 <span className="inline-flex rounded-md">
    //                                     <button
    //                                         type="button"
    //                                         className="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition duration-150 ease-in-out bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
    //                                     >
    //                                         {user.name}

    //                                         <svg
    //                                             className="ms-2 -me-0.5 h-4 w-4"
    //                                             xmlns="http://www.w3.org/2000/svg"
    //                                             viewBox="0 0 20 20"
    //                                             fill="currentColor"
    //                                         >
    //                                             <path
    //                                                 fillRule="evenodd"
    //                                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                                                 clipRule="evenodd"
    //                                             />
    //                                         </svg>
    //                                     </button>
    //                                 </span>
    //                             </Dropdown.Trigger>

    //                             <Dropdown.Content>
    //                                 <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
    //                                 <Dropdown.Link href={route('logout')} method="post" as="button">
    //                                     Log Out
    //                                 </Dropdown.Link>
    //                             </Dropdown.Content>
    //                         </Dropdown>
    //                     </div>
    //                 </div>

    //                 <div className="flex items-center -me-2 sm:hidden">
    //                     <button
    //                         onClick={() => setShowingNavigationDropdown((previousState) => !previousState)}
    //                         className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
    //                     >
    //                         <svg className="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
    //                             <path
    //                                 className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'}
    //                                 strokeLinecap="round"
    //                                 strokeLinejoin="round"
    //                                 strokeWidth="2"
    //                                 d="M4 6h16M4 12h16M4 18h16"
    //                             />
    //                             <path
    //                                 className={showingNavigationDropdown ? 'inline-flex' : 'hidden'}
    //                                 strokeLinecap="round"
    //                                 strokeLinejoin="round"
    //                                 strokeWidth="2"
    //                                 d="M6 18L18 6M6 6l12 12"
    //                             />
    //                         </svg>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>

    //         <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
    //             <div className="pt-2 pb-3 space-y-1">
    //                 <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>
    //                     Dashboard
    //                 </ResponsiveNavLink>
    //             </div>

    //             <div className="pt-4 pb-1 border-t border-gray-200">
    //                 <div className="px-4">
    //                     <div className="text-base font-medium text-gray-800">{user.name}</div>
    //                     <div className="text-sm font-medium text-gray-500">{user.email}</div>
    //                 </div>

    //                 <div className="mt-3 space-y-1">
    //                     <ResponsiveNavLink href={route('profile.edit')}>Profile</ResponsiveNavLink>
    //                     <ResponsiveNavLink method="post" href={route('logout')} as="button">
    //                         Log Out
    //                     </ResponsiveNavLink>
    //                 </div>
    //             </div>
    //         </div>
    //     </nav>

    //     {header && (
    //         <header className="bg-white shadow">
    //             <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">{header}</div>
    //         </header>
    //     )}

    //     <main>{children}</main>
    // </div>
  );
}
