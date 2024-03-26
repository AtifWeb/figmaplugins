"use client";
import {
  getFeaturedPlugin,
  getPopularPlugin,
  getRecentPlugin,
  getTrendingPlugin,
} from "@/api/getPlugin";
import { FeaturedCard } from "@/components/FeaturedCard";
import { FeaturedCardSkeleton } from "@/components/FeaturedCardSkeleton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { PopularPlugins } from "@/components/PopularPlugins";
import { RecentlyAdded } from "@/components/RecentlyAdded";
import { TrendingPlugins } from "@/components/TrendingPlugins";
import { Welcome } from "@/components/Welcome";
import { useEffect, useState } from "react";

export default function Home() {
  const [featureddata, setfeatureddata] = useState(null);
  const [trendingddata, settrendingddata] = useState(null);
  const [popularddata, setpopularddata] = useState(null);
  const [recentdata, setrecentdata] = useState(null);
  useEffect(() => {
    const getallhomedata = async () => {
      const featureddatalocal = await getFeaturedPlugin();
      const trendingdatalocal = await getTrendingPlugin();
      const populardatalocal = await getPopularPlugin();
      const recentdatalocal = await getRecentPlugin();

      setfeatureddata(featureddatalocal);
      settrendingddata(trendingdatalocal);
      setpopularddata(populardatalocal);
      setrecentdata(recentdatalocal);
    };
    getallhomedata();
  }, []);
  return (
    <div>
      <Header />

      <div className="w-[1140px] flex flex-col gap-[42px] mx-auto pt-[50px]">
        <Welcome />
        {featureddata?.length > 0 && (
          <>
            {featureddata.map((eachData) => (
              <FeaturedCard
                url={`/details/${eachData._id}`}
                featured
                img={eachData.logo}
                title={eachData.pluginName}
                desc={eachData.about.substring(0, 100)}
                id={eachData._id}
                key={eachData._id}
              />
            ))}
          </>
        )}
        {featureddata == null && <FeaturedCardSkeleton />}
        <TrendingPlugins trendingddata={trendingddata} />

        <PopularPlugins popularddata={popularddata} />
        <RecentlyAdded recentdata={recentdata} />
      </div>
      <Footer />
    </div>
  );
}
