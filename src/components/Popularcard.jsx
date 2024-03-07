import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export const Popularcard = ({ title, img, desc }) => {
  return (
    <Link href="/">
      <Card className="flex flex-col h-full hover:bg-[#F7F6F4] transition-all duration-400">
        <CardHeader className="flex-1">
          <img src={img} className="w-[72px] h-[72px] mb-6" alt="" />
          <CardTitle className="text-[18px]">{title}</CardTitle>
          <CardDescription className="text-[#787583] text-[14px]">
            {desc}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-[#787583] text-[12px] ">Updated 3 Months Ago</p>
        </CardContent>
      </Card>
    </Link>
  );
};
