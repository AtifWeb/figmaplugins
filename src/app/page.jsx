import { FeaturedCard } from "@/components/FeaturedCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PopularPlugins } from "@/components/PopularPlugins";
import { RecentlyAdded } from "@/components/RecentlyAdded";
import { TrendingPlugins } from "@/components/TrendingPlugins";
import { Welcome } from "@/components/Welcome";
export default function Home() {
  return (
    <div>
      <Header />

      <div className="w-[1140px] flex flex-col gap-[42px] mx-auto pt-[50px]">
        <Welcome />
        <FeaturedCard
          img="/img/featured.svg"
          title="ARC - Bend your type!"
          desc="Curve your text upward, downward or into a circle"
        />
        <TrendingPlugins />
        <PopularPlugins />
        <RecentlyAdded />
      </div>
      <Footer />
    </div>
  );
}
