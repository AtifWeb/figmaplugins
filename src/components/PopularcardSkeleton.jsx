import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export const PopularcardSkeleton = () => {
  return (
    <Card className="flex flex-col h-full ">
      <CardHeader className="flex-1">
        <Skeleton className="w-[72px] h-[72px] mb-6" />

        <CardTitle className="text-[18px]">
          <Skeleton className="w-[200px] h-[15px]  rounded-full" />
        </CardTitle>
        <CardDescription className="text-[#787583] text-[14px]">
          <Skeleton className="w-[200px] h-[15px]  rounded-full" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Skeleton className="w-[200px] h-[15px]  rounded-full" />
      </CardContent>
    </Card>
  );
};
