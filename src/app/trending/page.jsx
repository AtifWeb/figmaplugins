import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Popularcard } from "@/components/Popularcard";
export default function Trending() {
  return (
    <div>
      <Header />

      <div className="w-[1140px] flex flex-col gap-[42px] mx-auto pt-[50px]">
        <div className="mb-5">
          <h1 className="text-center text-[32px] text-[#1F1F1F] font-semibold">
            Figma Trending Plugins
          </h1>
          <p className="text-[16px] mt-4 text-[#787583] text-center">
            All Popular Plugins available in our platform, You can keep up to
            date!
          </p>
        </div>
        <div className="grid grid-cols-4 gap-6">
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
      <Footer />
    </div>
  );
}
