import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex items-center justify-between h-[70px] border-b-[1px] border-b-[#E7E8E8] px-[48px]">
      <Link href="/">
        <img src="/img/logo.svg" alt="" />
      </Link>
      <div className="flex items-center justify-between gap-2">
        <Button variant="ghost" className="text-[#54575D] text-[14px]">
          Contact
        </Button>
        <Link href="/login">
          <Button className="bg-[#A359FF]">Submit Your Plugin</Button>
        </Link>
      </div>
    </div>
  );
};
