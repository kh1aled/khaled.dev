"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import img from "@/public/favicon.png";

const NAV_LINKS = [
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
          <Link
            key={href}
            href={href}
            className={`navbar-link ${route === href ? "text-blue-600" : ""}`}
            aria-current={route === href ? "page" : undefined}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
