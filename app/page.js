"use client";
import { useEffect, useState } from "react";
import {
  Star,
  Search,
  Sun,
  Clock,
  Bell,
  PanelLeftClose,
  PanelLeft,
  PanelRightClose,
  PanelRight,
} from "lucide-react";
import EcommerceDashboard from "@/components/EcommerceDashboard";
import OrderList from "@/components/OrderList";
import RightSidebar from "@/components/RightSidebar";
import LeftSidebar from "@/components/LeftSidebar";
import { useTheme } from "@/components/theme-provider";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightbarOpen, setIsRightbarOpen] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsSidebarOpen(true);
        setIsRightbarOpen(true);
      } else {
        setIsSidebarOpen(false);
        setIsRightbarOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleRightbar = () => {
    setIsRightbarOpen(!isRightbarOpen);
  };

  return (
    <div className="flex h-screen bg-white dark:bg-[#1C1C1C] relative">
      <LeftSidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />

      <div className="flex-1 flex flex-col overflow-hidden lg:mb-0 mb-12">
        <header className="h-16 bg-white dark:bg-[#1C1C1C] border-b border-gray-200 dark:border-[#282828]  flex items-center justify-between px-3 sm:px-6">
          <div className="flex items-center gap-2 sm:gap-4">
            <button
              onClick={toggleSidebar}
              className="p-2 hover:bg-gray-100 dark:hover:bg-[#282828]  rounded-lg transition-colors"
            >
              {isSidebarOpen ? (
                <PanelLeftClose className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <PanelLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>

            <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#282828]  rounded-lg transition-colors hidden sm:block">
              <Star className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>

            <div className="hidden md:flex items-center gap-2 text-sm">
              <span className="text-gray-400 dark:text-gray-500">
                Dashboards
              </span>
              <span className="text-gray-400 dark:text-gray-500">/</span>
              <span className="text-gray-900 dark:text-gray-100 font-medium">
                Default
              </span>
            </div>
          </div>

          <div className="flex items-center gap-1 sm:gap-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-32 sm:w-48 md:w-64 pl-9 pr-3 sm:pl-10 sm:pr-12 py-2 bg-gray-50 dark:bg-[#282828]  border border-gray-200 dark:border-0 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-black dark:focus:ring-white text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500"
              />
              <Search className="w-4 h-4 text-gray-400 dark:text-gray-500 absolute left-2.5 sm:left-3 top-1/2 -translate-y-1/2" />
              <span className="hidden sm:block absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400 dark:text-gray-500">
                ⌘/
              </span>
            </div>

            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-[#282828]  rounded-lg transition-colors cursor-pointer"
              title="Toggle dark mode"
            >
              <Sun className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#282828]  rounded-lg transition-colors">
              <Clock className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button className="p-2 hover:bg-gray-100 dark:hover:bg-[#282828]  rounded-lg transition-colors">
              <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </button>
            <button
              onClick={toggleRightbar}
              className="p-2 hover:bg-gray-100 dark:hover:bg-[#282828]  rounded-lg transition-colors"
            >
              {isRightbarOpen ? (
                <PanelRightClose className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              ) : (
                <PanelRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              )}
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto scrollbar-hide">
          <EcommerceDashboard />
          <OrderList />
        </main>
      </div>

      <RightSidebar isOpen={isRightbarOpen} setIsOpen={setIsRightbarOpen} />

      {(isSidebarOpen || isRightbarOpen) && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 dark:bg-black/40 z-30"
          onClick={() => {
            setIsSidebarOpen(false);
            setIsRightbarOpen(false);
          }}
        />
      )}
    </div>
  );
}
