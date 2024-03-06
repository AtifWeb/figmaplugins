import React from "react";
import { Button } from "@/components/ui/button";
import { Popularcard } from "./Popularcard";
export const PopularPlugins = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-[26px]">
        <h1 className="text-[20px] text-[#1F1F1F] font-semibold">
          Popular Plugins
        </h1>
        <Button
          variant="ghost"
          className="text-[#A359FF] text-[14px] font-medium"
        >
          View All
        </Button>
      </div>
      <div className="grid grid-cols-4  gap-6">
        <Popularcard
          title="Wireframe"
          img="/img/wireframe.svg"
          desc="Free Wireframing tool for everyone"
        />

        <Popularcard
          title="LottieFiles - Create animations"
          img="/img/lottie.svg"
          desc="Animate Your Designs with Lottie Animations"
        />
        <Popularcard
          title="Artboard Mockups"
          img="/img/artboard.svg"
          desc="Showcase your brand, products, and applications"
        />
        <Popularcard
          title="Image Tracer"
          img="/img/tracer.svg"
          desc="Easily convert images into vector layers directly in Figma."
        />
      </div>
    </div>
  );
};
