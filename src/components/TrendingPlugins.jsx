import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingPluginCard } from "./TrendingPluginCard";
export const TrendingPlugins = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[24px]">
        <h1 className="text-[20px] text-[#1F1F1F] font-semibold">
          Trending Plugins
        </h1>
        <Button
          variant="ghost"
          className="text-[#A359FF] text-[14px] font-medium"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-2  gap-6">
        <TrendingPluginCard
          title="Button Design System Generator"
          desc="Transform your design system with this plugin crafted to automate"
          img="/img/a.svg"
        />

        <TrendingPluginCard
          title="ARC - Bend your type!"
          desc="Curve your text upward, downward or into a circle"
          img="/img/arc.svg"
        />
      </div>
    </div>
  );
};
