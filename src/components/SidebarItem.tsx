import { useState } from "react";
import { Link } from "react-router-dom";
import { useSidebar } from "../context/SidebarContext";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

type SidebarItemProps = {
  items: NavItem[];
};

const SidebarItem: React.FC<SidebarItemProps> = ({ items }) => {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const showText = isExpanded || isHovered || isMobileOpen;

  const [activePath, setActivePath] = useState<string>("/");

  const handleClick = (path: string) => {
    setActivePath(path);
  };

  return (
    <ul className="flex flex-col gap-2">
      {items.map((nav) => {
        const isActive = nav.path === activePath;

        return (
          <li key={nav.name}>
            <Link
              to={nav.path}
              onClick={() => handleClick(nav.path)}
              className={`
                flex items-center w-full px-3 py-2 rounded-lg transition-colors duration-200
                ${
                  isActive
                    ? "bg-blue-200 text-blue-600"
                    : "hover:bg-gray-100 text-gray-700 dark:text-gray-300"
                }
              `}
            >
              <span
                className={`mr-3 flex items-center justify-center w-10 h-10 rounded-full ${
                  isActive ? "text-blue-600" : "text-gray-900"
                }`}
              >
                {nav.icon}
              </span>

              <span
                className={`flex-1 transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-gray-900 "
                }`}
              >
                {nav.name}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default SidebarItem;
