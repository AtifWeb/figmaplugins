"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [passwordType, setpasswordType] = useState(true);
  return (
    <div className="grid grid-cols-[500px_1fr]">
      <div className="h-[100vh] flex relative items-center justify-center">
        <Link href="/" className="absolute left-7 top-7">
          <img src="/img/logo.svg" alt="" />
        </Link>
        <div className="flex  w-full px-7 flex-col gap-6">
          <h1 className="text-[25px] font-bold">Login</h1>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email-admin">Email Address</Label>

            <div className="w-full  relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#878B95"
                className="w-5 h-5 absolute top-[18px] left-[13px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>

              <Input
                type="email"
                id="email-admin"
                placeholder="Admin Email"
                className="w-full pl-10 h-[52px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <div className="w-full relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#878B95"
                className="w-5 h-5 absolute top-[18px] left-[13px]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>

              <Input
                type={passwordType == true ? "password" : "text"}
                placeholder="Admin Password"
                id="password"
                className="w-full pl-10 h-[52px]"
              />

              <svg
                onClick={(e) => {
                  setpasswordType(!passwordType);
                }}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#878B95"
                className="w-5 h-5 absolute top-[18px] right-[13px] cursor-pointer"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="logged-in-mode" />
            <Label htmlFor="logged-in-mode">Stay Logged In</Label>
          </div>

          <Button
            className="bg-[#A359FF]"
            onClick={(e) => {
              router.push("/dashboard/plugins/post");
            }}
          >
            Sign in
          </Button>

          <Label htmlFor="logged-in-mode" className="text-center">
            Or
          </Label>

          <div className="flex justify-center">
            <GoogleOAuthProvider clientId="22521161050-3t79330drrrd9i0d8n1bel5nrgv7j5pu.apps.googleusercontent.com">
              <GoogleLogin />
            </GoogleOAuthProvider>
          </div>
        </div>
      </div>
      <div className="bg-[#F7F6F5] h-[100vh] relative">
        <div className="w-[90%] ml-auto py-16">
          <h1 className="text-[25px] font-bold">
            Submit Figma Plugins With Ease
          </h1>
          <p className="text-[#787583] text-[17px] w-[60%] mt-3">
            This is the platform where you can easily upload figma plugins and
            manage the figma plugins
          </p>
        </div>
        <img
          src="/img/long-pic-card.svg"
          className="w-[90%] absolute bottom-0 right-0"
          alt=""
        />
      </div>
    </div>
  );
}
