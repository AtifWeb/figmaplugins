import React from "react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Skeleton } from "@/components/ui/skeleton";
export const RecentlyAddedCardSkeleton = () => {
  return (
    <Card className="flex h-full ">
      <CardHeader className="flex flex-row flex-1 !items-center">
        <div className="flex flex-row !items-center gap-4 flex-1">
          <Skeleton className="w-[76px] h-[76px]  rounded-lg" />
          <div>
            <CardTitle className="text-[18px]">
              <Skeleton className="w-[300px] h-[15px]  rounded-full" />
            </CardTitle>
            <CardDescription className="text-[#787583] text-[14px] mt-1 mb-2">
              <Skeleton className="w-[500px] h-[15px]  rounded-full" />
              <Skeleton className="w-[500px] h-[15px]  rounded-full mt-1" />
            </CardDescription>
            <CardDescription className="text-[#787583] text-[12px]">
              <Skeleton className="w-[100px] h-[15px]  rounded-full" />
            </CardDescription>
          </div>
        </div>
        <Skeleton className="w-[100px] h-[50px]  rounded-lg" />
      </CardHeader>
    </Card>
  );
};
