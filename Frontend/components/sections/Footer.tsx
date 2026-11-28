import Image from "next/image";
import Link from "next/link";
import {
  footerNavigationLinks,
  footerServicesLinks,
} from "@/constants/navigation";
import { cacheLife } from "next/cache";

async function getCurrentYear() {
  "use cache";
  cacheLife("max");
  return new Date().getFullYear();
}

const Footer = async () => {
  const currentYear = await getCurrentYear();

  return (
    <footer className="relative isolate overflow-hidden bg-primary text-white">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 mx-auto h-36 w-4/5 max-w-4xl rounded-full bg-linear-to-r from-transparent via-accent/20 to-transparent blur-3xl"
        />
        <p
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-6 z-0 overflow-hidden text-center font-jakarta text-[clamp(3rem,15vw,13rem)] font-extrabold leading-none tracking-tight text-white/2"
        >
          LEAFCLUTCH
        </p>

        <div className="section-inner relative z-10 grid grid-cols-1 gap-10 px-5 pb-40 pt-14 sm:grid-cols-2 sm:px-8 sm:pb-44 lg:grid-cols-5 lg:px-10 lg:pt-20">
          <div className="sm:col-span-2 lg:col-span-3">
            <Link
              href="/"
              aria-label="LeafClutch Technologies home"
              className="inline-flex min-h-11 items-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              <Image
                src="/footer-logo.png"
                alt="LeafClutch Technologies"
                width={448}
                height={168}
                sizes="(max-width: 640px) 220px, 250px"
                className="h-auto w-56 sm:w-60"
              />
            </Link>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/75 sm:text-base">
              LeafClutch Technologies is a Nepal-based software company
              supporting businesses in the UK with software, websites and
              digital services.
            </p>
            <p className="mt-4 text-sm leading-6 text-white/60">
              Company details
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-jakarta text-base font-semibold">Explore</h2>
            <ul className="mt-4 space-y-1">
              {footerNavigationLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center py-2 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer services">
            <h2 className="font-jakarta text-base font-semibold">Services</h2>
            <ul className="mt-4 space-y-1">
              {footerServicesLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="inline-flex min-h-11 items-center py-2 text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="relative z-10 border-t border-white/20">
        <div className="section-inner flex flex-col gap-3 px-5 py-5 text-sm text-white/65 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>
            &copy; {currentYear} LeafClutch Technologies. All rights reserved.
          </p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-5">
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex min-h-11 items-center py-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                >
                  Privacy notice
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="inline-flex min-h-11 items-center py-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                >
                  Cookie policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="inline-flex min-h-11 items-center py-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                >
                  Terms of use
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
