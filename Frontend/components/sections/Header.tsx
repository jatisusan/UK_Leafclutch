import Link from "next/link";
import MobileNavigation from "./MobileNavigation";

export interface NavigationLink {
  label: string;
  href: string;
}

interface HeaderProps {
  navigationLinks: NavigationLink[];
}

export const Header = ({ navigationLinks }: HeaderProps) => {
  return (
    <header className="w-full glass-blur sticky top-0 z-50">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        {/* Logo */}
        <Link
          href={"/"}
          aria-label={"Leafclutch Technologies home"}
          className="flex shrink-0 flex-col"
        ></Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-7 md:flex lg:gap-9"
        >
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative inline-flex min-h-11 items-center text-[1rem] text-text-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-200 after:content-[''] hover:after:scale-x-100 motion-reduce:after:transition-none"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href={"#contact"}
          className="btn btn-primary hidden md:inline-flex"
        >
          Contact Us
        </Link>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <MobileNavigation navigationLinks={navigationLinks} />
        </div>
      </div>
    </header>
  );
};

export default Header;
