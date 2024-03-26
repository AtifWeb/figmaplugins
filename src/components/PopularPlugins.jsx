"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Popularcard } from "./Popularcard";
import Link from "next/link";
import { PopularcardSkeleton } from "./PopularcardSkeleton";
export const PopularPlugins = ({ popularddata }) => {
  useEffect(() => {
    if (popularddata == null) {
      new Splide(".splides1", {
        perPage: 4,
        gap: 24,
        pagination: false,
      }).mount();
    }

    if (popularddata != null && popularddata.length > 0) {
      new Splide(".splide1", {
        perPage: 4,
        gap: 24,
        pagination: false,
      }).mount();
    }
  }, [popularddata]);
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
        <section class="splide splide1">
          <div class="splide__track">
            <ul class="splide__list">
              {popularddata.map((EachPlugin) => (
                <li class="splide__slide">
                  <Popularcard
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
      {popularddata == null && (
        <section class="splide splides1">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <PopularcardSkeleton />
              </li>
              <li class="splide__slide">
                <PopularcardSkeleton />
              </li>
              <li class="splide__slide">
                <PopularcardSkeleton />
              </li>
              <li class="splide__slide">
                <PopularcardSkeleton />
              </li>
            </ul>
          </div>
        </section>
      )}
    </div>
  );
};
