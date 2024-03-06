import React from "react";
import { Button } from "@/components/ui/button";
import { RecentlyAddedCard } from "./RecentlyAddedCard";
export const RecentlyAdded = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[26px]">
        <h1 className="text-[20px] text-[#1F1F1F] font-semibold">
          Recently Added
        </h1>
        <Button
          variant="ghost"
          className="text-[#A359FF] text-[14px] font-medium"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-1  gap-6">
        <RecentlyAddedCard
          title="Remove BG"
          desc="Remove the background of images automatically with just a single click."
          img="/img/remove.svg"
        />

        <RecentlyAddedCard
          title="Material Design Icons"
          desc="Instant easy access to the entire Material Design Icons library"
          img="/img/material.svg"
        />

        <RecentlyAddedCard
          title="Anima - Figma to Code: React, HTML, Vue, CSS, Tailwind"
          desc="Anima - Design to Code - React, HTML, CSS"
          img="/img/anima.svg"
        />

        <RecentlyAddedCard
          title="Lorem Ipsum"
          desc="Fill your designs with placeholders in a click: text, images and even data!ne"
          img="/img/lorem.svg"
        />
        <RecentlyAddedCard
          title="Feather Icons"
          desc="Quick access to Feather icons in Figma"
          img="/img/feather.svg"
        />
      </div>
    </div>
  );
};
