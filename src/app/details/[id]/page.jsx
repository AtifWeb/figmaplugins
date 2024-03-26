"use client";
import { getPluginById, getPopularPlugin } from "@/api/getPlugin";
import { FeaturedCard } from "@/components/FeaturedCard";
import { FeaturedCardSkeleton } from "@/components/FeaturedCardSkeleton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SimilarPlugins } from "@/components/SimilarPlugins";
import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import Markdown from "marked-react";
export default function Details() {
  const params = useParams();
  const [detailsdata, setdetailsdata] = useState(null);
  const [popularddata, setpopularddata] = useState(null);
  useEffect(() => {
    const getdata = async () => {
      const data = await getPluginById(params.id);
      const populardatalocal = await getPopularPlugin();

      setpopularddata(populardatalocal);
      setdetailsdata(data);
    };

    getdata();

    new Splide(".splide3", {
      pagination: false,
    }).mount();
  }, []);
  return (
    <div>
      <Header />

      <div className="w-[1140px] flex flex-col gap-[42px] mx-auto pt-[50px]">
        {detailsdata == null ? (
          <FeaturedCardSkeleton />
        ) : (
          <FeaturedCard
            url={detailsdata.url}
            featured
            img={detailsdata.logo}
            title={detailsdata.pluginName}
            desc={detailsdata.about.substring(0, 100)}
            id={detailsdata._id}
            key={detailsdata._id}
          />
        )}

        <section className="splide splide3">
          <div className="splide__track">
            <ul className="splide__list">
              {detailsdata == null ? (
                <li className="splide__slide">
                  <Skeleton className="w-full aspect-video  rounded-lg " />
                </li>
              ) : (
                <>
                  {detailsdata["slideimages"].map((Each) => (
                    <>
                      {Each != null && (
                        <li className="splide__slide w-full aspect-video">
                          <img
                            src={Each}
                            className="w-full h-full  rounded-lg "
                          />
                        </li>
                      )}
                    </>
                  ))}

                  {detailsdata["slidevideos"].map((Each) => (
                    <>
                      {Each != null && (
                        <li className="splide__slide w-full aspect-video">
                          <video
                            src={Each}
                            controls
                            className="w-full h-full  rounded-lg "
                          />
                        </li>
                      )}
                    </>
                  ))}
                </>
              )}
            </ul>
          </div>
        </section>
        <div className="grid grid-cols-[1fr_274px]  gap-[123px]">
          <div className="flex flex-col gap-[27px] about-work">
            <h1 className="text-[20px] font-semibold text-[#150E31]">About</h1>
            {detailsdata != null && <Markdown>{detailsdata.about}</Markdown>}
          </div>
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="text-[20px] font-semibold text-[#150E31]  mb-[20px]">
                Tags
              </h1>

              <div className="flex items-center gap-2 flex-wrap">
                {detailsdata == null ? (
                  <>
                    <Skeleton className="w-[100px] h-[40px]" />
                    <Skeleton className="w-[100px] h-[40px]" />
                    <Skeleton className="w-[100px] h-[40px]" />
                  </>
                ) : (
                  <>
                    {detailsdata["tags"].map((Eachdata) => (
                      <Button
                        variant="outline"
                        className="text-[14px] text-[#787583] font-medium"
                      >
                        {Eachdata}
                      </Button>
                    ))}
                  </>
                )}
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
                  <svg
                    class="svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.66 15.616c6.793 0 10.508-5.624 10.508-10.5 0-.16 0-.32-.01-.478.722-.522 1.346-1.169 1.842-1.91-.674.299-1.389.494-2.121.58.77-.46 1.348-1.186 1.624-2.04-.725.43-1.518.732-2.346.895-.556-.591-1.293-.983-2.095-1.114-.802-.132-1.625.005-2.341.388-.717.383-1.287.992-1.623 1.732-.336.74-.418 1.569-.234 2.36-1.468-.073-2.905-.455-4.216-1.119-1.311-.664-2.468-1.597-3.395-2.737-.472.813-.617 1.775-.405 2.69.213.915.766 1.715 1.548 2.237-.588-.018-1.162-.176-1.676-.462v.047c0 .852.295 1.677.835 2.337.54.66 1.292 1.112 2.128 1.28-.544.149-1.114.17-1.668.064.236.733.696 1.374 1.314 1.834.619.46 1.366.714 2.137.729-1.308 1.027-2.924 1.584-4.587 1.582-.294 0-.587-.018-.879-.053 1.689 1.083 3.654 1.658 5.66 1.655"
                      fill-rule="nonzero"
                      fill-opacity="1"
                      fill="#000"
                      stroke="none"
                    ></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  <svg
                    class="svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.525 13.657l2.652-2.652.707.707-2.652 2.652c-1.269 1.27-3.327 1.27-4.596 0-1.27-1.27-1.27-3.327 0-4.596l2.652-2.652.707.707-2.652 2.652c-.879.879-.879 2.303 0 3.182.879.879 2.303.879 3.182 0zm6.187-4.773l-.707-.707 2.652-2.652c.879-.879.879-2.303 0-3.182-.879-.879-2.303-.879-3.182 0L7.823 4.995l-.707-.707 2.652-2.652c1.269-1.27 3.327-1.27 4.596 0 1.27 1.27 1.27 3.327 0 4.596l-2.652 2.652zm-5.45 1.62l4.242-4.242-.766-.766-4.242 4.242.766.766z"
                      fill-rule="nonzero"
                      fill-opacity="1"
                      fill="#000"
                      stroke="none"
                    ></path>
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  className="text-[14px] text-[#787583] font-medium"
                >
                  <svg
                    class="svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M.883 0h14.234c.488 0 .883.395.883.883v14.234c0 .488-.395.883-.883.883H.883C.395 16 0 15.605 0 15.117V.883C0 .395.395 0 .883 0zM11.04 9.804V16H8.546V9.806H6.461V7.39h2.085v-1.78c0-2.067 1.262-3.192 3.107-3.192.622-.003 1.244.03 1.863.095v2.158h-1.277c-1.005 0-1.2.476-1.2 1.176v1.54h2.392l-.31 2.416H11.04z"
                      fill-rule="evenodd"
                      fill-opacity="1"
                      fill="#000"
                      stroke="none"
                    ></path>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <SimilarPlugins popularddata={popularddata} />
      </div>
      <Footer />
    </div>
  );
}
