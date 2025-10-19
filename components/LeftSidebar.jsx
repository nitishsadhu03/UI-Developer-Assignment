"use client";
import { useState } from "react";
import { ChevronRight, ChevronDown, X } from "lucide-react";
import {
  ShoppingBagOpenIcon,
  ChartPieSliceIcon,
  FolderIcon,
  BookOpenIcon,
  IdentificationBadgeIcon,
  IdentificationCardIcon,
  UsersThreeIcon,
  NotebookIcon,
  ChatsTeardropIcon,
} from "@phosphor-icons/react";

export default function LeftSidebar({ isSidebarOpen, setIsSidebarOpen }) {
  const [activeItem, setActiveItem] = useState("Default");
  const [expandedItems, setExpandedItems] = useState({});
  const [activeSubItem, setActiveSubItem] = useState("");

  const toggleExpand = (itemName) => {
    setExpandedItems((prev) => ({
      ...prev,
      [itemName]: !prev[itemName],
    }));
  };

  const handleSubItemClick = (parentName, subItemName) => {
    setActiveItem(parentName);
    setActiveSubItem(`${parentName}-${subItemName}`);
  };

  const menuItems = {
    favorites: [
      { name: "Overview", icon: null },
      { name: "Projects", icon: null },
    ],
    dashboards: [
      {
        name: "Default",
        icon: ChartPieSliceIcon,
        subItems: ["Overview", "Products", "Orders", "Customers"],
      },
      {
        name: "eCommerce",
        icon: ShoppingBagOpenIcon,
        subItems: ["Overview", "Products", "Orders", "Customers"],
      },
      {
        name: "Projects",
        icon: FolderIcon,
        subItems: ["Overview", "Active Projects", "Completed", "Archive"],
      },
      {
        name: "Online Courses",
        icon: BookOpenIcon,
        subItems: ["All Courses", "My Courses", "Enrolled", "Certificates"],
      },
    ],
    pages: [
      {
        name: "User Profile",
        icon: IdentificationBadgeIcon,
        subItems: [
          "Overview",
          "Projects",
          "Campaigns",
          "Documents",
          "Followers",
        ],
      },
      {
        name: "Account",
        icon: IdentificationCardIcon,
        subItems: ["Settings", "Security", "Billing", "Notifications"],
      },
      {
        name: "Corporate",
        icon: UsersThreeIcon,
        subItems: ["Team", "Departments", "Reports", "Analytics"],
      },
      {
        name: "Blog",
        icon: NotebookIcon,
        subItems: ["All Posts", "Published", "Drafts", "Categories"],
      },
      {
        name: "Social",
        icon: ChatsTeardropIcon,
        subItems: ["Feed", "Messages", "Notifications", "Friends"],
      },
    ],
  };

  return (
    <aside
      className={`${
        isSidebarOpen ? "w-64" : "w-0"
      } transition-all duration-300 bg-white dark:bg-[#1C1C1C] border-r border-gray-200 dark:border-[#323232] overflow-hidden flex-shrink-0 lg:relative absolute inset-y-0 left-0 z-40`}
    >
      <div className="h-full flex flex-col">
        {/* Logo */}
        <div className="p-6 flex items-center gap-3">
          <img src="/bye-wind.png" className="w-8 h-8 rounded-full" />
          <span className="text-lg dark:text-gray-50">ByeWind</span>
        </div>

        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors z-50"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-scroll scrollbar-hide px-4 pb-4">
          {/* Favorites */}
          <div className="mb-6">
            <div className="flex items-center gap-8 mb-2">
              <button className="text-md text-gray-500 dark:text-gray-400 font-medium">
                Favorites
              </button>
              <button className="text-md text-gray-400 dark:text-gray-500">
                Recently
              </button>
            </div>
            <div className="space-y-1">
              {menuItems.favorites.map((item) => (
                <button
                  key={item.name}
                  className="w-full text-left px-3 py-2 text-sm text-gray-800 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#282828] rounded-lg flex items-center gap-2 cursor-pointer"
                >
                  <span className="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full"></span>
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Dashboards */}
          <div className="mb-6">
            <h3 className="px-3 mb-2 text-gray-500 dark:text-gray-400">
              Dashboards
            </h3>
            <div className="space-y-1">
              {menuItems.dashboards.map((item) => {
                const Icon = item.icon;
                const isActive = item.name === activeItem;
                const isExpanded = expandedItems[item.name];
                const hasSubItems = item.subItems && item.subItems.length > 0;

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => {
                        if (hasSubItems) {
                          toggleExpand(item.name);
                        } else {
                          setActiveItem(item.name);
                        }
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg flex items-center gap-2 text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-[#282828] cursor-pointer`}
                    >
                      {hasSubItems &&
                        (isExpanded ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        ))}
                      <Icon className="w-6 h-6" />
                      {item.name}
                    </button>

                    {hasSubItems && isExpanded && (
                      <div className="ml-7 mt-1 space-y-1">
                        {item.subItems.map((subItem) => {
                          const subItemKey = `${item.name}-${subItem}`;
                          const isSubActive = activeSubItem === subItemKey;
                          return (
                            <a
                              key={subItem}
                              href="/"
                              onClick={(e) => {
                                e.preventDefault();
                                handleSubItemClick(item.name, subItem);
                              }}
                              className={`w-full text-left px-3 py-1.5 text-sm rounded-lg flex items-center gap-2 relative ${
                                isSubActive
                                  ? "bg-gray-100 dark:bg-[#282828] text-gray-900 dark:text-gray-50"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#282828]"
                              }`}
                            >
                              {isSubActive && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#282828] dark:bg-gray-50 rounded-r"></span>
                              )}
                              <span className={isSubActive ? "ml-0" : ""}>
                                {subItem}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h3 className="px-3 mb-2 text-gray-500 dark:text-gray-400">
              Pages
            </h3>
            <div className="space-y-1">
              {menuItems.pages.map((item) => {
                const Icon = item.icon;
                const isExpanded = expandedItems[item.name];

                return (
                  <div key={item.name}>
                    <button
                      onClick={() => toggleExpand(item.name)}
                      className="w-full text-left px-3 py-2 text-gray-900 dark:text-gray-50 hover:bg-gray-100 dark:hover:bg-[#282828] rounded-lg flex items-center gap-2 cursor-pointer"
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-4 h-4" />
                      ) : (
                        <ChevronRight className="w-4 h-4" />
                      )}
                      <Icon className="w-6 h-6" />
                      {item.name}
                    </button>

                    {isExpanded && item.subItems && (
                      <div className="ml-7 mt-1 space-y-1">
                        {item.subItems.map((subItem) => {
                          const subItemKey = `${item.name}-${subItem}`;
                          const isSubActive = activeSubItem === subItemKey;
                          return (
                            <a
                              key={subItem}
                              href="/"
                              onClick={(e) => {
                                e.preventDefault();
                                handleSubItemClick(item.name, subItem);
                              }}
                              className={`w-full text-left px-3 py-1.5 text-sm rounded-lg flex items-center gap-2 relative ${
                                isSubActive
                                  ? "bg-gray-100 dark:bg-[#282828] text-gray-900 dark:text-gray-50"
                                  : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-[#282828]"
                              }`}
                            >
                              {isSubActive && (
                                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-[#282828] dark:bg-gray-50 rounded-r"></span>
                              )}
                              <span className={isSubActive ? "ml-2" : ""}>
                                {subItem}
                              </span>
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
}
