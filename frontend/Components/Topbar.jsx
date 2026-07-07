import React from "react";
import { MapPin, Mail, Phone, Facebook, Twitter } from "lucide-react";

export default function TopBar() {
  return (
    <div className="w-full bg-[#e8d6b8] text-[#20242a] text-xs">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-2.5">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <MapPin size={13} className="text-[#20242a]" />
            Nairobi, Kenya
          </span>
          <span className="flex items-center gap-1.5">
            <Mail size={13} className="text-[#20242a]" />
            support@digiteach.org
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Phone size={13} className="text-[#20242a]" />
            +254 700 111 222
          </span>
          <div className="flex items-center gap-2 ml-1">
            <a href="#" aria-label="Facebook" className="w-6 h-6 flex items-center justify-center text-white bg-[#2f7f7a]">
              <Facebook size={12} fill="white" />
            </a>
            <a href="#" aria-label="Twitter" className="w-6 h-6 flex items-center justify-center text-white bg-[#2f7f7a]">
              <Twitter size={12} fill="white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}