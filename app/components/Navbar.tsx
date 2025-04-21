"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import img from "@/public/favicon.png";
import TransitionLink from "./utils/TransitionLink";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/projects", label: "Projects" },
];

const Navbar = () => {
  const route = usePathname();

  return (
    <header className="header flex items-center justify-between p-4">
      {/* Logo */}
      <Link href="/" className="bg-black-500 w-12 aspect-square rounded-xl flex items-center justify-center">
        <Image src={img} width={30} height={30} alt="khaled.dev" priority />
      </Link>

      {/* Navigation */}
      <nav className="flex text-lg gap-7 font-medium">
        {NAV_LINKS.map(({ href, label }) => (
          <TransitionLink
            key={href}
            href={href}
            className={`navbar-link ${route === href ? "text-black" : ""}`}
            aria-current={route === href ? "page" : undefined}
          >
            {label}
          </TransitionLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
