"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingPluginCard } from "./TrendingPluginCard";
import Link from "next/link";

export const TrendingPlugins = () => {
  useEffect(() => {
    new Splide(".splide2", {
      perPage: 2,
      gap: 24,
    }).mount();
  }, []);
  return (
    <div>
      <div className="flex items-center justify-between mb-[24px]">
        <h1 className="text-[20px] text-[#1F1F1F] font-semibold">
          Trending Plugins
        </h1>
        <Link href="/trending">
          <Button
            variant="ghost"
            className="text-[#A359FF] text-[14px] font-medium"
          >
            View All
          </Button>
        </Link>
      </div>

      <section class="splide splide2">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <TrendingPluginCard
                title="Button Design System Generator"
                desc="Transform your design system with this plugin crafted to automate"
                img="/img/a.svg"
                url="https://www.figma.com/community/plugin/1344368111040867237/button-design-system-generator"
              />
            </li>
            <li class="splide__slide">
              <TrendingPluginCard
                title="ARC - Bend your type!"
                desc="Curve your text upward, downward or into a circle"
                img="/img/arc.svg"
                url="https://www.figma.com/community/plugin/1159123024924461424/html-to-design"
              />
            </li>
            <li class="splide__slide">
              <TrendingPluginCard
                title="Button Design System Generator"
                desc="Transform your design system with this plugin crafted to automate"
                img="/img/a.svg"
                url="https://www.figma.com/community/plugin/1344368111040867237/button-design-system-generator"
              />
            </li>
            <li class="splide__slide">
              <TrendingPluginCard
                title="ARC - Bend your type!"
                desc="Curve your text upward, downward or into a circle"
                img="/img/arc.svg"
                url="https://www.figma.com/community/plugin/1159123024924461424/html-to-design"
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
