"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { TrendingPluginCard } from "./TrendingPluginCard";
import Link from "next/link";
import { TrendingPluginCardSkeleton } from "./TrendingPluginCardSkeleton";

export const TrendingPlugins = ({ trendingddata }) => {
  useEffect(() => {
    if (trendingddata == null) {
      new Splide(".splides2", {
        perPage: 2,
        gap: 24,
        pagination: false,
      }).mount();
    }

    if (trendingddata?.length > 0) {
      new Splide(".splide2", {
        perPage: 2,
        gap: 24,
        pagination: false,
      }).mount();
    }
  }, [trendingddata]);
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
      {trendingddata?.length > 0 && (
        <section class="splide splide2">
          <div class="splide__track">
            <ul class="splide__list">
              {trendingddata.map((EachPlugin) => (
                <li class="splide__slide">
                  <TrendingPluginCard
                    title={EachPlugin["pluginName"]}
                    desc={EachPlugin["about"].substring(0, 100)}
                    img={EachPlugin["logo"]}
                    id={EachPlugin["_id"]}
                    key={EachPlugin["_id"]}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {trendingddata == null && (
        <section class="splide splides2">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <TrendingPluginCardSkeleton />
              </li>
              <li class="splide__slide">
                <TrendingPluginCardSkeleton />
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};
