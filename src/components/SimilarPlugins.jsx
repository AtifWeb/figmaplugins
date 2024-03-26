import React from "react";
import { Button } from "@/components/ui/button";
import { Popularcard } from "./Popularcard";
import Link from "next/link";
import { PopularcardSkeleton } from "./PopularcardSkeleton";
export const SimilarPlugins = ({ popularddata }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[26px]">
        <h1 className="text-[20px] text-[#1F1F1F] font-semibold">
          Popular Plugins
        </h1>
        <Link href="/popular">
          <Button
            variant="ghost"
            className="text-[#A359FF] text-[14px] font-medium"
          >
            View All
          </Button>
        </Link>
      </div>
      {popularddata?.length > 0 && (
        <div className="grid grid-cols-4 gap-6">
          {popularddata.map((EachPlugin) => (
            <Popularcard
              title={EachPlugin["pluginName"]}
              desc={EachPlugin["about"].substring(0, 100)}
              img={EachPlugin["logo"]}
              id={EachPlugin["_id"]}
              key={EachPlugin["_id"]}
            />
          ))}
        </div>
      )}
      {popularddata == null && (
        <div className="grid grid-cols-4 gap-6">
          <PopularcardSkeleton />

          <PopularcardSkeleton />

          <PopularcardSkeleton />

          <PopularcardSkeleton />
        </div>
      )}
    </div>
  );
};
