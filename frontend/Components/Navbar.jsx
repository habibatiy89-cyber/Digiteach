import React from "react";
import { ArrowRight } from "lucide-react";

// Pass currentPage="Home" | "About Us" | "DigiTeach" | "Contact" to highlight the active link
export default function Navbar({ currentPage = "About Us" }) {
  const links = ["Home", "About Us", "DigiTeach", "Contact"];

  return (
    <div className="w-full bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          {/* Simple logo mark placeholder - swap with your own logo image */}
          <div className="w-9 h-9 rounded-full border-2 border-[#2f7f7a] flex items-center justify-center text-[#2f7f7a] text-[10px] font-bold">
            DT
          </div>
          <span className="text-lg font-bold tracking-wide">
            <span className="text-[#2f7f7a]">DIGI</span>
            <span className="text-[#20242a]">TEACH</span>
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#20242a]">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className={
                link === currentPage
                  ? "text-[#2f7f7a]"
                  : "hover:text-[#2f7f7a]"
              }
            >
              {link}
            </a>
          ))}
        </nav>

        <button className="flex items-center gap-2 bg-[#172b4d] hover:bg-[#20355e] transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-full">
          Get Involved
          <ArrowRight size={15} />
        </button>
      </div>
    </div>
  );
}