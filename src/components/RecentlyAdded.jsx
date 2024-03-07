import React from "react";
import { Button } from "@/components/ui/button";
import { RecentlyAddedCard } from "./RecentlyAddedCard";
import Link from "next/link";
export const RecentlyAdded = () => {
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
        <RecentlyAddedCard
          title="Remove BG"
          desc="Remove the background of images automatically with just a single click."
          img="/img/remove.svg"
          url="https://www.figma.com/community/plugin/738992712906748191/remove-bg"
        />

        <RecentlyAddedCard
          title="Material Design Icons"
          desc="Instant easy access to the entire Material Design Icons library"
          img="/img/material.svg"
          url="https://www.figma.com/community/plugin/740272380439725040/material-design-icons"
        />

        <RecentlyAddedCard
          title="Anima - Figma to Code: React, HTML, Vue, CSS, Tailwind"
          desc="Anima - Design to Code - React, HTML, CSS"
          img="/img/anima.svg"
          url="https://www.figma.com/community/plugin/857346721138427857/anima-figma-to-code-react-html-vue-css-tailwind"
        />

        <RecentlyAddedCard
          title="Lorem Ipsum"
          desc="Fill your designs with placeholders in a click: text, images and even data!ne"
          img="/img/lorem.svg"
          url="https://www.figma.com/community/plugin/736000994034548392/lorem-ipsum"
        />
        <RecentlyAddedCard
          title="Feather Icons"
          desc="Quick access to Feather icons in Figma"
          img="/img/feather.svg"
          url="https://www.figma.com/community/plugin/744047966581015514/feather-icons"
        />
      </div>
    </div>
  );
};
