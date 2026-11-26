"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { Link as NavigationLink } from "@/types/content";
import { ListIcon, XIcon } from "@phosphor-icons/react/dist/ssr";

interface MobileNavigationProps {
  navigationLinks: NavigationLink[];
}

const MobileNavigation = ({ navigationLinks }: MobileNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <div className="relative">
      {/* Menu Toggle */}
      <button
        ref={menuButtonRef}
        type="button"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((previous) => !previous)}
        className="flex h-11 w-11 items-center justify-center rounded-md text-text-dark hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-primary"
      >
        {isOpen ? <XIcon size={24} /> : <ListIcon size={24} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          aria-label="Mobile navigation"
          className="fixed inset-x-0 top-16.25 z-50 w-full border border-gray-200 bg-white p-5 shadow-lg"
        >
          <div className="flex flex-col gap-1">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-text-medium hover:bg-gray-50 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href={"#contact"}
            onClick={closeMenu}
            className="btn btn-primary inline-flex w-full justify-center mt-5"
          >
            Contact Us
          </Link>
        </nav>
      )}
    </div>
  );
};

export default MobileNavigation;
