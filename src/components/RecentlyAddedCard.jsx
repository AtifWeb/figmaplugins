import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const RecentlyAddedCard = ({ title, desc, img }) => {
  return (
    <Card className="flex ">
      <CardHeader className="flex flex-row flex-1 !items-center">
        <div className="flex flex-row !items-center gap-4 flex-1">
          <img src={img} className="w-[76px] h-[76px] " alt="" />
          <div>
            <CardTitle className="text-[18px]">{title}</CardTitle>
            <CardDescription className="text-[#787583] text-[14px] mt-1 mb-2">
              {desc}
            </CardDescription>
            <CardDescription className="text-[#787583] text-[12px]">
              Updated 3 Months Ago
            </CardDescription>
          </div>
        </div>
        <Button variant="outline" className="text-[#787583]">
          Open on Figma
        </Button>
      </CardHeader>
    </Card>
  );
};
