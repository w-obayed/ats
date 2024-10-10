"use client";

import Link from "next/link";
import contact from "@/public/contact.svg";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const links = [
    { path: "/", name: "Home" },
    { path: "/ats-checker", name: "ATS Checker" },
    { path: "/resume-templates", name: "Resume Templates" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 relative md:px-6 lg:px-8">
        <div className="flex justify-between items-center py-5">
          {/* Logo */}
          <div>
            <h2 className="text-4xl font-bold text-[#093042]">Logo</h2>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8 text-lg font-medium p-0">
            {links.map((item, index) => (
              <li key={index}>
                <Link href={item.path} className="hover:text-gray-700">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* HR Login */}
          <div className="hidden md:flex items-center space-x-2">
            <Link className="flex gap-[8px]" href="#">
              <Image className="w-[25px]" src={contact} alt="Contact Icon" />
              <span className="font-medium text-lg">HR Login</span>
            </Link>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? (
                <X className="w-8 h-8" />
              ) : (
                <Menu className="w-8 h-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full h-full z-50">
            <ul className="flex flex-col space-y-4 text-lg font-medium bg-gray-100 p-4 w-[60%] rounded-sm hover:bg-gray-600">
              {links.map((item, index) => (
                <li
                  key={index}
                  className="px-4 py-2 rounded-sm hover:bg-slate-300"
                >
                  <Link
                    href={item.path}
                    className="block hover:text-gray-700"
                    onClick={toggleMobileMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="px-4 py-2 class-h rounded-sm hover:bg-slate-300">
                <Link
                  className="flex gap-[8px]"
                  href="#"
                  onClick={toggleMobileMenu}
                >
                  <Image
                    className="w-[25px]"
                    src={contact}
                    alt="Contact Icon"
                  />
                  <span className="font-medium text-lg">HR Login</span>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
