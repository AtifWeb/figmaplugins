"use client";
import { getPlugin } from "@/api/getPlugin";
import { Aside } from "@/components/dashboard/Aside";
import { GetPlugin } from "@/components/dashboard/GetPlugin";
import { useEffect, useState } from "react";

export default function get() {
  const [dataimp, setdataimp] = useState([]);

  useEffect(() => {
    const getPlugindata = async () => {
      const data = await getPlugin();
      setdataimp(data);
    };

    getPlugindata();
  }, []);

  return (
    <div className="bg-[#FAFAFA] flex">
      <Aside />
      <GetPlugin data={dataimp} />
    </div>
  );
}
