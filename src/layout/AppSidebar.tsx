import { Link } from "react-router-dom";
import { FaHome, FaRegChartBar } from "react-icons/fa"; 
import { useSidebar } from "../context/SidebarContext";
import SidebarItem from "@components/SidebarItem";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path: string;
};

const navItems: NavItem[] = [
  {
    icon: <FaHome />,
    name: "Home",
    path: "/",
  },
  {
    icon: <FaRegChartBar />,
    name: "Data",
    path: "/data",
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 dark:border-gray-700 dark:bg-gray-900
        ${isExpanded || isMobileOpen ? "w-[290px]" : isHovered ? "w-[290px]" : "w-[90px]"}
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <img className="" src="vite.svg" alt="Logo" width={32} height={32} />
          ) : (
            <img src="vite.svg" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>
      <span className="py-5 dark:text-white/40 text-gray-400 text-sm">MENU</span>
      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <SidebarItem items={navItems} />
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
