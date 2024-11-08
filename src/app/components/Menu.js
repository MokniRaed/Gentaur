import { menus } from "@mock/home";
import Link from "next/link";

const Menu = ({ pathname }) => {
  return (
    <div className="w-full h-auto bg-white flex flex-row items-center justify-center">
      <div className="px-2 py-2 h-full w-full lg:w-[auto] lg:pl-0 hidden lg:flex flex-row items-center justify-center gap-5">
        <nav className="corner-borders-bottom rounded-b-lg bg-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <ul className="hidden md:flex space-x-4">
                {menus.map((menu, index) => (
                  <li key={index} className="relative group">
                    {/* Conditionally apply 'active' class based on current pathname */}
                    <Link
                      href={menu.url}
                      className={`text-primary hover:text-primaryDark font-medium relative group ${
                        pathname === menu.url
                          ? "text-primaryDark" // Active link color
                          : "" // No change for inactive links
                      }`}
                    >
                      <span>{menu.name}</span>

                      {/* Underline animation */}
                      <span
                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primaryDark transition-all group-hover:w-full ${
                          pathname === menu.url ? "w-full" : ""
                        }`}
                      ></span>
                    </Link>

                    {/* Submenus */}
                    {menu.sub_menus.length > 0 && (
                      <ul className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-t-sm rounded-b-sm opacity-0 group-hover:opacity-100 group-hover:visible invisible transition-all duration-300 ease-in-out z-50">
                        {menu.sub_menus.map((subMenu, subIndex) => (
                          <li key={subIndex} className="whitespace-nowrap">
                            <Link legacyBehavior href={subMenu.url}>
                              <a
                                className={`block px-4 py-2 text-gray-600 hover:bg-blue-100 hover:text-primaryDark ${
                                  pathname === subMenu.url
                                    ? "text-primaryDark" // Active sub-menu color
                                    : ""
                                }`}
                                rel={subMenu.rel}
                              >
                                {subMenu.name}
                              </a>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile menu toggle button */}
              <button className="md:hidden block text-gray-700 hover:text-primaryDark">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
