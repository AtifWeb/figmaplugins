import React from "react";
import ExtensionIcon from "@mui/icons-material/Extension";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
export const Aside = ({ active }) => {
  return (
    <aside className="w-[270px] min-w-[270px] flex flex-col px-4 py-5 h-[100vh] border-r-[1px] border-r-[#ddd] bg-[#fff]">
      <Link href="#" className="mb-4">
        <img src="/img/logo.svg" className="w-full" alt="" />
      </Link>

      <div className="flex items-center gap-2 mb-3 mt-2">
        <Avatar
          alt="Remy Sharp"
          src="https://images.unsplash.com/photo-1624395213232-ea2bcd36b865?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2FkJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D"
          sx={{ width: 56, height: 56 }}
        />
        <div>
          <h1 className="text-[16px] font-bold">Atif Asim</h1>
          <p className="text-[14px]">Admin</p>
        </div>
      </div>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <ExtensionIcon color="#ddd" fontSize="medium" />
              <p>Plugins</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            <Link
              href="/dashboard/plugins/post"
              className="block mb-3 font-semibold text-[15px]"
            >
              <p>Post Plugins</p>
            </Link>

            <Link
              href="/dashboard/plugins/get"
              className="block font-semibold text-[15px]"
            >
              <p>Get Plugins</p>
            </Link>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="hover:no-underline">
            <div className="flex items-center gap-2">
              <AccountCircleIcon color="#ddd" fontSize="medium" />
              <p>Admin</p>
            </div>
          </AccordionTrigger>
          <AccordionContent className="pl-10">
            <Link
              href="/dashboard/plugins/post"
              className="block mb-3 font-semibold text-[15px]"
            >
              <p>Create User</p>
            </Link>

            <Link
              href="/dashboard/plugins/get"
              className="block font-semibold text-[15px]"
            >
              <p>Delete User</p>
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </aside>
  );
};
