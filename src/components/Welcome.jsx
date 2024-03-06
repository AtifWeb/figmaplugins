import React from "react";
import { Input } from "@/components/ui/input";
export const Welcome = () => {
  return (
    <div className="relative">
      <img src="/img/main-card.svg" className="w-full" alt="" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-[28px] font-semibold text-[#1F1F1F]">
          Welcome to the Figma Plugins Store
        </h1>
        <p className="text-[16px] text-[#787583] mt-2">
          Powerful Plugins Made for Figma
        </p>
        <div className="w-[464px] mt-8 relative">
          <img
            src="/img/search.svg"
            alt=""
            className="absolute top-[18px] left-[13px]"
          />
          <Input
            type="text"
            placeholder="Search Figma Plugins"
            className="w-full pl-10 h-[52px]"
          />
        </div>
      </div>
    </div>
  );
};
