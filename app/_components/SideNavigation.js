"use client";

import {
  Bars3Icon,
  CalendarDaysIcon,
  HomeIcon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import SignOutButton from "@/app/_components/SignOutButton";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Reservations",
    href: "/account/reservations",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function handleMobileLinkClick() {
    setIsMobileMenuOpen(false);
  }

  return (
    <nav className="border-b md:border-b-0 md:border-r border-primary-900">
      <div className="md:hidden py-2">
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen((open) => !open)}
          className="w-full py-3 px-4 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center justify-between font-semibold text-primary-200"
          aria-expanded={isMobileMenuOpen}
          aria-controls="account-mobile-menu"
        >
          <span className="flex items-center gap-3">
            {isMobileMenuOpen ? (
              <XMarkIcon className="h-5 w-5 text-primary-600" />
            ) : (
              <Bars3Icon className="h-5 w-5 text-primary-600" />
            )}
            Account menu
          </span>
          <span className="text-sm text-primary-400">
            {isMobileMenuOpen ? "Close" : "Open"}
          </span>
        </button>

        {isMobileMenuOpen ? (
          <ul
            id="account-mobile-menu"
            className="mt-2 flex flex-col gap-1 pb-1"
          >
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  className={`py-3 px-4 hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-3 font-semibold text-primary-200 ${pathname === link.href ? "bg-primary-900" : ""}`}
                  href={link.href}
                  onClick={handleMobileLinkClick}
                >
                  {link.icon}
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
            <li>
              <SignOutButton />
            </li>
          </ul>
        ) : null}
      </div>

      <ul className="hidden md:flex md:flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name} className="shrink-0">
            <Link
              className={`py-3 px-5 whitespace-nowrap hover:bg-primary-900 hover:text-primary-100 transition-colors flex items-center gap-4 font-semibold text-primary-200 ${pathname === link.href ? "bg-primary-900" : ""}`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}

        <li className="mt-auto shrink-0">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
