"use client";
import { FeaturedCard } from "@/components/FeaturedCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SimilarPlugins } from "@/components/SimilarPlugins";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
export default function Details() {
  useEffect(() => {
    new Splide(".splide3", {
      pagination: false,
    }).mount();
  }, []);
  return (
    <div>
      <Header />

      <div className="w-[1140px] flex flex-col gap-[42px] mx-auto pt-[50px]">
        <FeaturedCard
          url="https://www.figma.com/community/plugin/762070688792833472/arc-bend-your-type"
          img="/img/featured.svg"
          title="ARC - Bend your type!"
          desc="Curve your text upward, downward or into a circle"
        />
        <section class="splide splide3">
          <div class="splide__track">
            <ul class="splide__list">
              <li class="splide__slide">
                <img src="/img/long-pic-card.svg" className="w-full" alt="" />
              </li>
              <li class="splide__slide">
                <img src="/img/long-pic-card.svg" className="w-full" alt="" />
              </li>
              <li class="splide__slide">
                <img src="/img/long-pic-card.svg" className="w-full" alt="" />
              </li>
              <li class="splide__slide">
                <img src="/img/long-pic-card.svg" className="w-full" alt="" />
              </li>
            </ul>
          </div>
        </section>
        <div className="grid grid-cols-[1fr_274px]  gap-[123px]">
          <div className="flex flex-col gap-[27px]">
            <h1 className="text-[20px] font-semibold text-[#150E31]">About</h1>
            <p className="text-[16px] text-[#787583] font-normal">
              One of the most desired text features has just come to Figma with
              our Arc plugin! Curve your text upward, downward or into a circle.
              Adjust the slider and preview the result.
            </p>
            <div>
              <p className="text-[16px] text-[#787583] font-normal">
                1) Select a text layer
              </p>
              <p className="text-[16px] text-[#787583] font-normal">
                2) Run the Arc plugin
              </p>
              <p className="text-[16px] text-[#787583] font-normal">
                3) Adjust the slider & click apply
              </p>
            </div>
            <p className="text-[16px] text-[#787583] font-normal">
              Download to test up to 5 times for free!
            </p>
            <p className="text-[16px] text-[#787583] font-normal">
              NOTE: Once the curve is applied, you can still edit the style of
              the text. However you will not be able to edit the curve path or
              retype a phrase.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-[20px] font-semibold text-[#150E31]  mb-[20px]">
                Tags
              </h1>

              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  arc
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  bend
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  curve
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  text
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  type
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  typography
                </Button>
              </div>
            </div>

            <div>
              <h1 className="text-[20px] font-semibold text-[#150E31]  mb-[20px]">
                Share
              </h1>

              <div className="flex items-center gap-2 flex-wrap">
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  arc
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  bend
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  curve
                </Button>
              </div>
            </div>
          </div>
        </div>

        <SimilarPlugins />
      </div>
      <Footer />
    </div>
  );
}
