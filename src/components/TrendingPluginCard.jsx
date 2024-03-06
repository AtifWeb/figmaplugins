import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export const TrendingPluginCard = ({ title, desc, img }) => {
  return (
    <Card className="flex ">
      <CardHeader className="flex flex-row flex-1 gap-[44px] !items-center">
        <div className="flex flex-row !items-center gap-4 flex-1">
          <img src={img} className="w-[100px] h-[100px] " alt="" />
          <div>
            <CardTitle className="text-[16px]">{title}</CardTitle>
            <CardDescription className="text-[#787583] text-[14px] mt-1 mb-2">
              {desc}
            </CardDescription>
            <CardDescription className="text-[#787583] text-[12px]">
              Updated 3 Months Ago
            </CardDescription>
          </div>
        </div>
        <Button className="text-[#fff] bg-[#4B98F8]">Try it</Button>
      </CardHeader>
    </Card>
  );
};
