"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { TagsInput } from "react-tag-input-component";
import dynamic from "next/dynamic";
// import SimpleMdeReact from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Avatar } from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import { uploadFileImage } from "@/api/firebase";

import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { savePlugin } from "@/api/savePlugin";
const SimpleMdeReact = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});
export const PostPlugin = () => {
  const [savestatus, setsavestatus] = useState(false);
  const [tags, setTags] = useState([]);
  const [logo, setLogo] = useState({
    wait: false,
    value: null,
  });
  const [pluginImageone, setpluginImageone] = useState({
    wait: false,
    value: null,
  });
  const [pluginImagetwo, setpluginImagetwo] = useState({
    wait: false,
    value: null,
  });
  const [pluginImagethree, setpluginImagethree] = useState({
    wait: false,
    value: null,
  });
  const [pluginImagefour, setpluginImagefour] = useState({
    wait: false,
    value: null,
  });
  const [pluginImagefive, setpluginImagefive] = useState({
    wait: false,
    value: null,
  });
  const [pluginImagesix, setpluginImagesix] = useState({
    wait: false,
    value: null,
  });

  const [pluginImageseven, setpluginImageseven] = useState({
    wait: false,
    value: null,
  });
  const [pluginImageeight, setpluginImageeight] = useState({
    wait: false,
    value: null,
  });
  const [pluginImagenine, setpluginImagenine] = useState({
    wait: false,
    value: null,
  });
  const [pluginImageten, setpluginImageten] = useState({
    wait: false,
    value: null,
  });

  const [pluginVideoone, setpluginVideoone] = useState({
    wait: false,
    value: null,
  });
  const [pluginVideotwo, setpluginVideotwo] = useState({
    wait: false,
    value: null,
  });
  const [pluginVideothree, setpluginVideothree] = useState({
    wait: false,
    value: null,
  });
  const [pluginVideofour, setpluginVideofour] = useState({
    wait: false,
    value: null,
  });
  const [pluginVideofive, setpluginVideofive] = useState({
    wait: false,
    value: null,
  });
  const [pluginVideosix, setpluginVideosix] = useState({
    wait: false,
    value: null,
  });

  const [pluginVideoseven, setpluginVideoseven] = useState({
    wait: false,
    value: null,
  });
  const [pluginVideoeight, setpluginVideoeight] = useState({
    wait: false,
    value: null,
  });
  const [pluginVideonine, setpluginVideonine] = useState({
    wait: false,
    value: null,
  });
  const [pluginVideoten, setpluginVideoten] = useState({
    wait: false,
    value: null,
  });

  const [featured, setfeatured] = useState(false);
  const [url, setURL] = useState("");
  const [category, setcategory] = useState("");
  const [pluginname, setpluginname] = useState("");
  const [creatername, setcreatername] = useState("");
  const [message, setmessage] = useState("");

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      hideIcons: ["guide", "image"],
      status: false,
      autofocus: true,
      spellChecker: false,
    };
  }, []);

  const onChange = useCallback((value) => {
    setmessage(value);
    console.log(value);
  }, []);

  const submitPlugin = async (e) => {
    const submissionData = {
      pluginName: pluginname,
      createrName: creatername,
      about: message,
      logo: logo["value"],
      tags: tags,
      url: url,
      slideimages: [
        pluginImageone["value"],
        pluginImagetwo["value"],
        pluginImagethree["value"],
        pluginImagefour["value"],
        pluginImagefive["value"],
        pluginImagesix["value"],
        pluginImageseven["value"],
        pluginImageeight["value"],
        pluginImagenine["value"],
        pluginImageten["value"],
      ],
      slidevideos: [
        pluginVideoone["value"],
        pluginVideotwo["value"],
        pluginVideothree["value"],
        pluginVideofour["value"],
        pluginVideofive["value"],
        pluginVideosix["value"],
        pluginVideoseven["value"],
        pluginVideoeight["value"],
        pluginVideonine["value"],
        pluginVideoten["value"],
      ],
      category: category,
      isFeatured: featured,
    };

    setsavestatus(true);

    let response = await savePlugin(submissionData);

    if (response) {
      toast("Plugin Saved Successfully", {
        description: Date(),
      });
    } else {
      toast("Facing Error", {
        description:
          "Facing Error While Saving The Plugin Please Try Again Later",
      });
    }
    setsavestatus(false);
  };

  return (
    <div className="flex-1 px-10 pt-6 h-[100vh] overflow-auto">
      <Toaster />
      <div className="flex items-center justify-between border-b-[1px] border-b-[#ddd] pb-3">
        <h1 className="text-[35px] font-semibold">Post Plugin</h1>
        <div className="flex items-center gap-2">
          <Button className="bg-[#E6E8EB] text-[#000] hover:bg-[E6E8EB]">
            Cancel
          </Button>
          <Button
            className="bg-[#A359FF] "
            onClick={submitPlugin}
            disabled={savestatus}
          >
            {savestatus && <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />}
            {savestatus ? "Please Wait" : "Save"}
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-[1fr_.5fr]  mt-5 gap-4">
        <div className="bg-[#fff] p-5 mb-10">
          <div>
            <h1 className="text-[20px] font-semibold">Plugin Logo </h1>

            <input
              type="file"
              id="logo"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setLogo);
              }}
            />

            <label
              className={`relative w-[100px] h-[100px] mb-4 mt-2 block cursor-pointer ${
                logo["wait"] == true && "waitingarea"
              }`}
              htmlFor="logo"
            >
              <Avatar sx={{ width: 100, height: 100 }} src={logo["value"]} />
            </label>
          </div>

          <h1 className="text-[20px] font-semibold">Basic Information</h1>
          <p className="text-[14px] text-[#7e7e7e] mt-1">
            Please add the basic information about the plugin you want to add{" "}
            <br /> on your website. Make sure dont miss any field.
          </p>

          <div className="flex flex-col gap-2 mt-5">
            <Label htmlFor="pluginname">Plugin Name</Label>
            <div className="w-full relative mt-2">
              <svg
                className="w-6 h-6 absolute top-[14px] left-[13px]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#878B95"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                />
              </svg>

              <Input
                type={"text"}
                onChange={(e) => {
                  setpluginname(e.target.value);
                }}
                placeholder="Plugin Name"
                id="pluginname"
                className="w-full pl-12 h-[52px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <Label htmlFor="createrName">Creater Name</Label>
            <div className="w-full relative mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#878B95"
                className="w-6 h-6 absolute top-[14px] left-[13px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <Input
                type={"text"}
                onChange={(e) => {
                  setcreatername(e.target.value);
                }}
                placeholder="Creater Name"
                id="createrName"
                className="w-full pl-12 h-[52px]"
              />
            </div>
          </div>

          <div className="flex flex-col TagsInputWrapper gap-2 mt-5">
            <Label htmlFor="createrName" className="mb-2">
              About the plugin
            </Label>
            <SimpleMdeReact
              options={autofocusNoSpellcheckerOptions}
              value={message}
              onChange={onChange}
            />
          </div>

          <div className="flex items-center mt-5 gap-2">
            <Switch
              id="logged-in-mode"
              onCheckedChange={(e) => {
                setfeatured(e);
              }}
            />
            <Label htmlFor="logged-in-mode">Featured</Label>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <Label>Category</Label>
            <div className="w-full relative mt-2">
              <Select
                onValueChange={(value) => {
                  setcategory(value);
                }}
              >
                <SelectTrigger className="w-full h-[52px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="popular">Popular</SelectItem>
                    <SelectItem value="trending">Trending</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5">
            <Label htmlFor="url">URL</Label>
            <div className="w-full relative mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="#878B95"
                className="w-6 h-6 absolute top-[14px] left-[13px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>

              <Input
                type={"text"}
                onChange={(e) => {
                  setURL(e.target.value);
                }}
                placeholder="Plugin URL"
                id="url"
                className="w-full pl-12 h-[52px]"
              />
            </div>
          </div>

          <div className="flex flex-col TagsInputWrapper gap-2 mt-5">
            <Label>Tags</Label>
            <div className="w-full relative mt-2">
              <TagsInput
                value={tags}
                onChange={setTags}
                name="Plugin Tags"
                placeHolder="Enter Plugin Related Tags"
              />

              <p className="text-[14px] text-[#7e7e7e] mt-1">
                Please Enter To Create Tag
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#fff] p-5 mb-10">
          <div className="mt-5">
            <h1 className="text-[20px] font-semibold">Plugin Slider Images </h1>

            <input
              type="file"
              id="image1"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImageone);
              }}
            />
            <input
              type="file"
              id="image2"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImagetwo);
              }}
            />
            <input
              type="file"
              id="image3"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImagethree);
              }}
            />
            <input
              type="file"
              id="image4"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImagefour);
              }}
            />
            <input
              type="file"
              id="image5"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImagefive);
              }}
            />
            <input
              type="file"
              id="image6"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImagesix);
              }}
            />
            <input
              type="file"
              id="image7"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImageseven);
              }}
            />
            <input
              type="file"
              id="image8"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImageeight);
              }}
            />
            <input
              type="file"
              id="image9"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImagenine);
              }}
            />
            <input
              type="file"
              id="image10"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginImageten);
              }}
            />

            <div className="grid grid-cols-2 mt-5 gap-2">
              <label
                className={`relative  col-span-2 block cursor-pointer  ${
                  pluginImageone["wait"] == true && "waitingarea"
                }`}
                htmlFor="image1"
              >
                <Avatar
                  sx={{ width: "100%", height: 100 }}
                  className=" !rounded-lg"
                  src={pluginImageone["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginImagetwo["wait"] == true && "waitingarea"
                }`}
                htmlFor="image2"
              >
                <Avatar
                  sx={{ width: "100%", height: 80 }}
                  className=" !rounded-lg"
                  src={pluginImagetwo["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginImagethree["wait"] == true && "waitingarea"
                }`}
                htmlFor="image3"
              >
                <Avatar
                  sx={{ width: "100%", height: 80 }}
                  className=" !rounded-lg"
                  src={pluginImagethree["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginImagefour["wait"] == true && "waitingarea"
                }`}
                htmlFor="image4"
              >
                <Avatar
                  sx={{ width: "100%", height: 80 }}
                  className=" !rounded-lg"
                  src={pluginImagefour["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginImagefive["wait"] == true && "waitingarea"
                }`}
                htmlFor="image5"
              >
                <Avatar
                  sx={{ width: "100%", height: 80 }}
                  className=" !rounded-lg"
                  src={pluginImagefive["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginImagesix["wait"] == true && "waitingarea"
                }`}
                htmlFor="image6"
              >
                <Avatar
                  sx={{ width: "100%", height: 80 }}
                  className=" !rounded-lg"
                  src={pluginImagesix["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginImageseven["wait"] == true && "waitingarea"
                }`}
                htmlFor="image7"
              >
                <Avatar
                  sx={{ width: "100%", height: 80 }}
                  className=" !rounded-lg"
                  src={pluginImageseven["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginImageeight["wait"] == true && "waitingarea"
                }`}
                htmlFor="image8"
              >
                <Avatar
                  sx={{ width: "100%", height: 80 }}
                  className=" !rounded-lg"
                  src={pluginImageeight["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginImagenine["wait"] == true && "waitingarea"
                }`}
                htmlFor="image9"
              >
                <Avatar
                  sx={{ width: "100%", height: 80 }}
                  className=" !rounded-lg"
                  src={pluginImagenine["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>

              <label
                className={`relative col-span-2  block cursor-pointer  ${
                  pluginImageten["wait"] == true && "waitingarea"
                }`}
                htmlFor="image10"
              >
                <Avatar
                  sx={{ width: "100%", height: 100 }}
                  className=" !rounded-lg"
                  src={pluginImageten["value"]}
                >
                  <FolderIcon fontSize="large" />
                </Avatar>
              </label>
            </div>
          </div>

          <div className="mt-5">
            <h1 className="text-[20px] font-semibold">Plugin Slider Videos </h1>

            <input
              type="file"
              id="video1"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideoone);
              }}
            />
            <input
              type="file"
              id="video2"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideotwo);
              }}
            />
            <input
              type="file"
              id="video3"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideothree);
              }}
            />
            <input
              type="file"
              id="video4"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideofour);
              }}
            />
            <input
              type="file"
              id="video5"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideofive);
              }}
            />
            <input
              type="file"
              id="video6"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideosix);
              }}
            />
            <input
              type="file"
              id="video7"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideoseven);
              }}
            />
            <input
              type="file"
              id="video8"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideoeight);
              }}
            />
            <input
              type="file"
              id="video9"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideonine);
              }}
            />
            <input
              type="file"
              id="video10"
              className="hidden"
              onChange={(e) => {
                uploadFileImage(e.target.files[0], setpluginVideoten);
              }}
            />

            <div className="grid grid-cols-2 mt-5 gap-2">
              <label
                className={`relative  col-span-2 block cursor-pointer  ${
                  pluginVideoone["wait"] == true && "waitingarea"
                }`}
                htmlFor="video1"
              >
                {pluginVideoone["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideoone["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 100 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginVideotwo["wait"] == true && "waitingarea"
                }`}
                htmlFor="video2"
              >
                {pluginVideotwo["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideotwo["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 80 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginVideothree["wait"] == true && "waitingarea"
                }`}
                htmlFor="video3"
              >
                {pluginVideothree["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideothree["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 80 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginVideofour["wait"] == true && "waitingarea"
                }`}
                htmlFor="video4"
              >
                {pluginVideofour["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideofour["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 80 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginVideofive["wait"] == true && "waitingarea"
                }`}
                htmlFor="video5"
              >
                {pluginVideofive["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideofive["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 80 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginVideosix["wait"] == true && "waitingarea"
                }`}
                htmlFor="video6"
              >
                {pluginVideosix["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideosix["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 80 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginVideoseven["wait"] == true && "waitingarea"
                }`}
                htmlFor="video7"
              >
                {pluginVideoseven["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideoseven["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 80 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginVideoeight["wait"] == true && "waitingarea"
                }`}
                htmlFor="video8"
              >
                {pluginVideoeight["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideoeight["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 80 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
              <label
                className={`relative  block cursor-pointer  ${
                  pluginVideonine["wait"] == true && "waitingarea"
                }`}
                htmlFor="video9"
              >
                {pluginVideonine["value"] ? (
                  <video
                    autoPlay
                    muted
                    src={pluginVideonine["value"]}
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 80 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>

              <label
                className={`relative col-span-2  block cursor-pointer  ${
                  pluginVideoten["wait"] == true && "waitingarea"
                }`}
                htmlFor="video10"
              >
                {pluginVideoten["value"] ? (
                  <video
                    src={pluginVideoten["value"]}
                    autoPlay
                    muted
                    className="h-[100px] w-full object-cover !rounded-lg"
                  ></video>
                ) : (
                  <Avatar
                    sx={{ width: "100%", height: 100 }}
                    className=" !rounded-lg"
                  >
                    <SlowMotionVideoIcon fontSize="large" />
                  </Avatar>
                )}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
