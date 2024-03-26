import React from "react";
import { Button } from "@/components/ui/button";
import { RecentlyAddedCard } from "./RecentlyAddedCard";
import Link from "next/link";
import { RecentlyAddedCardSkeleton } from "./RecentlyAddedCardSkeleton";
export const RecentlyAdded = ({ recentdata }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[26px]">
        <h1 className="text-[20px] text-[#1F1F1F] font-semibold">
          Recently Added
        </h1>
        <Link href="/recently">
          <Button
            variant="ghost"
            className="text-[#A359FF] text-[14px] font-medium"
          >
            View All
          </Button>
        </Link>
      </div>
      <div className="grid grid-cols-1  gap-6">
        {recentdata == null && (
          <>
            <RecentlyAddedCardSkeleton />
            <RecentlyAddedCardSkeleton />
            <RecentlyAddedCardSkeleton />
          </>
        )}

        {recentdata?.length > 0 && (
          <>
            {recentdata.map((EachPlugin) => (
              <li class="splide__slide">
                <RecentlyAddedCard
                  title={EachPlugin["pluginName"]}
                  desc={EachPlugin["about"].substring(0, 100)}
                  img={EachPlugin["logo"]}
                  id={EachPlugin["_id"]}
                  key={EachPlugin["_id"]}
                />
              </li>
            ))}
          </>
        )}
      </div>
    </div>
  );
};
