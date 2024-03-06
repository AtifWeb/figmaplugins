"use client";
import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export const FeaturedCard = ({ title, desc, img, featured = null }) => {
  const router = useRouter();
  return (
    <Card className="flex relative min-h-[190px]">
      {featured && (
        <span className="text-[#F58477] font-medium text-[16px] w-[121px] h-[35px] bg-[#FEF3F1] flex items-center justify-center absolute right-8 rounded-bl-[5px] rounded-br-[5px]">
          FEATURED
        </span>
      )}

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
        <div>
          <div
            onClick={(e) => {
              router.push("/details");
            }}
          >
            <Button className="text-[#fff] bg-[#4B98F8]">
              Try This Plugin
            </Button>
          </div>
          <p className="text-[12px] text-[#9591A3] text-right mt-2">
            In-app purchases
          </p>
        </div>
      </CardHeader>
    </Card>
  );
};
