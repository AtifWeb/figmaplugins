"use client";
import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Popularcard } from "./Popularcard";
import Link from "next/link";
export const PopularPlugins = () => {
  useEffect(() => {
    new Splide(".splide1", {
      perPage: 4,
      gap: 24,
    }).mount();
  }, []);
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

      <section class="splide splide1">
        <div class="splide__track">
          <ul class="splide__list">
            <li class="splide__slide">
              <Popularcard
                title="Wireframe"
                img="/img/wireframe.svg"
                desc="Free Wireframing tool for everyone"
              />
            </li>
            <li class="splide__slide">
              <Popularcard
                title="LottieFiles - Create animations"
                img="/img/lottie.svg"
                desc="Animate Your Designs with Lottie Animations"
              />
            </li>
            <li class="splide__slide">
              <Popularcard
                title="Artboard Mockups"
                img="/img/artboard.svg"
                desc="Showcase your brand, products, and applications"
              />
            </li>
            <li class="splide__slide">
              <Popularcard
                title="Image Tracer"
                img="/img/tracer.svg"
                desc="Easily convert images into vector layers directly in Figma."
              />
            </li>

            <li class="splide__slide">
              <Popularcard
                title="Wireframe"
                img="/img/wireframe.svg"
                desc="Free Wireframing tool for everyone"
              />
            </li>
            <li class="splide__slide">
              <Popularcard
                title="LottieFiles - Create animations"
                img="/img/lottie.svg"
                desc="Animate Your Designs with Lottie Animations"
              />
            </li>
            <li class="splide__slide">
              <Popularcard
                title="Artboard Mockups"
                img="/img/artboard.svg"
                desc="Showcase your brand, products, and applications"
              />
            </li>
            <li class="splide__slide">
              <Popularcard
                title="Image Tracer"
                img="/img/tracer.svg"
                desc="Easily convert images into vector layers directly in Figma."
              />
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
