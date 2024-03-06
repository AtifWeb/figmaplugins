import React from "react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="flex mt-[79px] items-center justify-between h-[70px] border-t-[1px] border-t-[#E7E8E8]">
      <div className="w-[1140px] mx-auto flex items-center justify-between">
        <p className="text-[14px] text-[#54575D]">
          © Figma Plugins 2024 | All Right Reserved
        </p>
        <p className="text-[14px] text-[#54575D]">Contact</p>
      </div>
    </div>
  );
};
