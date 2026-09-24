"use client";

import React, { useState, useEffect, useRef, type ReactNode } from "react";

const Bell = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M13.73 21a2 2 0 0 1-3.46 0" />
  </svg>
);

const Check = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const X = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const Settings = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 1v6m0 6v6" />
    <path d="M1 12h6m6 0h6" />
  </svg>
);

interface DropdownMenuProps {
  children: ReactNode;
  trigger: ReactNode;
}

const DropdownMenu = ({ children, trigger }: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleTriggerClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={handleTriggerClick} className="cursor-pointer">
        {trigger}
      </div>

      {isOpen && (
        <div
          className="
            z-50

            absolute
            right-0
            top-full
            mt-3

            w-[360px]
            max-w-[calc(100vw-24px)]

            overflow-hidden

            rounded-2xl
            border
            border-zinc-200/80

            bg-white

            shadow-[0_20px_50px_rgba(0,0,0,0.12)]

            focus:outline-none

            animate-in
            fade-in-0
            zoom-in-95
            duration-150

           

            max-sm:fixed
            max-sm:left-3
            max-sm:right-3
            max-sm:top-[72px]

            max-sm:w-auto
            max-sm:max-w-none

            max-sm:mt-0

            max-sm:rounded-xl
          "
          role="menu"
          aria-orientation="vertical"
        >
          {children}
        </div>
      )}
    </div>
  );
};

interface NotificationItemProps {
  title: string;
  message: string;
  time: string;
  unread?: boolean;
  onMarkRead?: () => void;
  onDismiss?: () => void;
}

const NotificationItem = ({
  title,
  message,
  time,
  unread = false,
  onMarkRead,
  onDismiss,
}: NotificationItemProps) => {
  return (
    <div
      className={`
        group

        px-4
        py-4

        sm:px-5

        border-b
        border-zinc-100

        last:border-b-0

        transition-colors

        hover:bg-blue-50

        ${unread ? "bg-blue-50/40" : "bg-white"}
      `}
    >
      <div className="flex items-start gap-2">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 min-w-0">
            <h4
              className="
                text-sm
                font-medium
                text-zinc-900

                truncate
              "
            >
              {title}
            </h4>

            {unread && (
              <span
                className="
                  w-2
                  h-2
                  shrink-0

                  rounded-full

                  bg-blue-500
                "
              />
            )}
          </div>

          <p
            className="
              mt-1

              text-sm
              text-zinc-600

              leading-5

              break-words
            "
          >
            {message}
          </p>

          <p
            className="
              mt-2

              text-xs
              text-zinc-500
            "
          >
            {time}
          </p>
        </div>

        <div
          className="
            flex
            shrink-0
            items-center
            gap-1
          "
        >
          {unread && onMarkRead && (
            <button
              onClick={onMarkRead}
              className="
                flex
                items-center
                justify-center

                w-8
                h-8

                rounded-lg

                text-zinc-400

                hover:text-green-600
                hover:bg-green-50

                transition-colors
              "
              title="Mark as read"
              aria-label="Mark notification as read"
            >
              <Check className="w-4 h-4" />
            </button>
          )}

          {onDismiss && (
            <button
              onClick={onDismiss}
              className="
                flex
                items-center
                justify-center

                w-8
                h-8

                rounded-lg

                text-zinc-400

                hover:text-red-600
                hover:bg-red-50

                transition-colors
              "
              title="Dismiss"
              aria-label="Dismiss notification"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default function NotificationDropdown() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New message",
      message: "You have a new message from Sarah",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      title: "System update",
      message: "Your system has been updated successfully",
      time: "1 hour ago",
      unread: true,
    },
    {
      id: 3,
      title: "Payment received",
      message: "Payment of $99.00 has been processed",
      time: "3 hours ago",
      unread: false,
    },
    {
      id: 4,
      title: "Welcome!",
      message: "Welcome to our platform. Get started with your first project.",
      time: "1 day ago",
      unread: false,
    },
  ]);

  const unreadCount = notifications.filter(
    (notification) => notification.unread,
  ).length;

  const markAsRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              unread: false,
            }
          : notification,
      ),
    );
  };

  const dismissNotification = (id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        unread: false,
      })),
    );
  };

  return (
    <div className="flex items-center justify-center font-sans">
      <DropdownMenu
        trigger={
          <button
            className="
              relative

              flex
              items-center
              justify-center

              w-10
              h-10

              text-zinc-600

              hover:text-zinc-900
              hover:bg-zinc-100

              rounded-[11px]

              transition-colors
            "
            aria-label="Notifications"
          >
            <Bell
              className="
                w-[18px]
                h-[18px]
              "
            />

            {unreadCount > 0 && (
              <span
                className="
                  absolute

                  top-0.5
                  -right-0.5

                  w-4
                  h-4

                  bg-red-500
                  text-white

                  text-[9px]
                  font-semibold

                  rounded-full

                  flex
                  items-center
                  justify-center
                "
              >
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>
        }
      >
        <div
          className="
            px-4
            py-4

            sm:px-5

            border-b
            border-zinc-100
          "
        >
          <div
            className="
              flex
              items-start
              justify-between
              gap-3
            "
          >
            <div className="min-w-0">
              <h3
                className="
                  text-[15px]
                  font-semibold
                  text-zinc-900
                "
              >
                Notifications
              </h3>

              <p
                className="
                  mt-1
                  text-[11px]
                  text-zinc-500
                "
              >
                {unreadCount > 0
                  ? `${unreadCount} unread notification${
                      unreadCount !== 1 ? "s" : ""
                    }`
                  : "You're all caught up"}
              </p>
            </div>

            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="
                  shrink-0

                  rounded-lg

                  px-2.5
                  py-1.5

                  text-[11px]
                  font-medium

                  text-blue-600

                  hover:bg-blue-50
                  hover:text-blue-700

                  transition-all
                "
              >
                Mark all read
              </button>
            )}
          </div>
        </div>

        <div
          className="
            max-h-96

            overflow-y-auto

            overscroll-contain
          "
        >
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                title={notification.title}
                message={notification.message}
                time={notification.time}
                unread={notification.unread}
                onMarkRead={() => markAsRead(notification.id)}
                onDismiss={() => dismissNotification(notification.id)}
              />
            ))
          ) : (
            <div
              className="
                p-8
                text-center
              "
            >
              <Bell
                className="
                  w-12
                  h-12

                  text-zinc-300

                  mx-auto
                  mb-3
                "
              />

              <p className="text-zinc-500">No notifications</p>
            </div>
          )}
        </div>

        {notifications.length > 0 && (
          <div
            className="
              px-4
              py-3

              border-t
              border-zinc-200
            "
          >
            <button
              className="
                w-full

                flex
                items-center
                justify-center
                gap-2

                rounded-lg

                py-2

                text-[12px]
                font-medium

                text-zinc-500

                hover:bg-blue-50
                hover:text-blue-600

                transition-all
              "
            >
              <Settings className="w-4 h-4" />

              <span>Notification Settings</span>
            </button>
          </div>
        )}
      </DropdownMenu>
    </div>
  );
}
