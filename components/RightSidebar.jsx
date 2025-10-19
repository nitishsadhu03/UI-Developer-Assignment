"use client";

import { BugBeetleIcon, UserIcon, BroadcastIcon } from "@phosphor-icons/react";
import { X } from "lucide-react";

const notificationsData = [
  {
    id: 1,
    icon: BugBeetleIcon,
    text: "You have a bug that needs...",
    time: "Just now",
    truncate: true,
  },
  {
    id: 2,
    icon: UserIcon,
    text: "New user registered",
    time: "59 minutes ago",
    truncate: false,
  },
  {
    id: 3,
    icon: BugBeetleIcon,
    text: "You have a bug that needs...",
    time: "12 hours ago",
    truncate: true,
  },
  {
    id: 4,
    icon: BroadcastIcon,
    text: "Andi Lane subscribed to you",
    time: "Today, 11:59 AM",
    truncate: false,
  },
];

const activitiesData = [
  {
    id: 1,
    image: "/activity1.png",
    text: "You have a bug that needs...",
    time: "Just now",
    truncate: true,
  },
  {
    id: 2,
    image: "/activity2.png",
    text: "Released a new version",
    time: "59 minutes ago",
    truncate: false,
  },
  {
    id: 3,
    image: "/activity3.png",
    text: "Submitted a bug",
    time: "12 hours ago",
    truncate: false,
  },
  {
    id: 4,
    image: "/activity4.png",
    text: "Modified A data in Page X",
    time: "Today, 11:59 AM",
    truncate: false,
  },
  {
    id: 5,
    image: "/activity5.png",
    text: "Deleted a page in Project X",
    time: "Feb 2, 2023",
    truncate: false,
  },
];

const contactsData = [
  { id: 1, name: "Natali Craig", image: "/natali.png" },
  { id: 2, name: "Drew Cano", image: "/drew.png" },
  { id: 3, name: "Orlando Diggs", image: "/orlando.png" },
  { id: 4, name: "Andi Lane", image: "/andi.png" },
  { id: 5, name: "Kate Morrison", image: "/kate.png" },
  { id: 6, name: "Koray Okumus", image: "/koray.png" },
];

export default function RightSidebar({ isOpen, setIsOpen }) {
  return (
    <aside
      className={`${
        isOpen ? "w-80" : "w-0"
      } transition-all duration-300 bg-white dark:bg-[#1C1C1C] border-l border-gray-200 dark:border-[#323232] overflow-hidden flex-shrink-0 lg:relative absolute inset-y-0 right-0 z-40`}
    >
      <div className="h-full overflow-y-scroll scrollbar-hide p-4 pb-28 lg:pb-0 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="lg:hidden absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-[#282828] rounded-lg transition-colors z-50 bg-white dark:bg-[#1C1C1C]"
        >
          <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
        {/* Notifications Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-50">
            Notifications
          </h2>
          <div className="space-y-2">
            {notificationsData.map((notification) => {
              const IconComponent = notification.icon;
              return (
                <div
                  key={notification.id}
                  className="flex gap-3 hover:bg-gray-100 dark:hover:bg-[#282828] cursor-pointer p-2 rounded-2xl"
                >
                  <div className="w-10 h-10 bg-[#E5ECF6] rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-5 h-5 text-gray-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p
                      className={`text-sm text-gray-900 dark:text-gray-50 ${
                        notification.truncate ? "truncate" : ""
                      }`}
                    >
                      {notification.text}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                      {notification.time}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activities Section */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-50">
            Activities
          </h2>
          <div className="space-y-2">
            {activitiesData.map((activity) => (
              <div
                key={activity.id}
                className="flex gap-3 hover:bg-gray-100 dark:hover:bg-[#282828] cursor-pointer p-2 rounded-2xl"
              >
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt="User"
                  className="w-10 h-10 rounded-full flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p
                    className={`text-sm text-gray-900 dark:text-gray-50 ${
                      activity.truncate ? "truncate" : ""
                    }`}
                  >
                    {activity.text}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contacts Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4 dark:text-gray-50">
            Contacts
          </h2>
          <div className="space-y-1">
            {contactsData.map((contact) => (
              <button
                key={contact.id}
                className="flex items-center gap-3 w-full text-left p-2 hover:bg-gray-100 dark:hover:bg-[#282828] rounded-2xl transition-colors cursor-pointer"
              >
                <img
                  src={contact.image || "/placeholder.svg"}
                  alt={contact.name}
                  className="w-10 h-10 rounded-full"
                />
                <span className="text-sm text-gray-900 dark:text-gray-50">
                  {contact.name}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
