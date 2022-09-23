import Image from "next/image";
import React from "react";
import { SidebarMenu } from "./SidebarMenu";
import { HomeIcon, HashtagIcon } from "@heroicons/react/24/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  EllipsisHorizontalCircleIcon,
  EllipsisHorizontalIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

export const Sidebar = () => {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <section>
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
          <Image
            src="/images/twitter-logo.png"
            width="51.2px"
            height="42.1px"
          ></Image>
        </div>
      </section>

      {/* Menu */}
      <section>
        <div className="mt-4 mb-2.5 xl:items-start">
          <SidebarMenu text="Home" icon={HomeIcon} active></SidebarMenu>
          <SidebarMenu text="Explore" icon={HashtagIcon}></SidebarMenu>
          <SidebarMenu text="Notifications" icon={BellIcon}></SidebarMenu>
          <SidebarMenu text="Messages" icon={InboxIcon}></SidebarMenu>
          <SidebarMenu text="Bookmarks" icon={BookmarkIcon}></SidebarMenu>
          <SidebarMenu text="Lists" icon={ClipboardIcon}></SidebarMenu>
          <SidebarMenu text="Profile" icon={UserIcon}></SidebarMenu>
          <SidebarMenu
            text="More"
            icon={EllipsisHorizontalCircleIcon}
          ></SidebarMenu>
        </div>
      </section>

      {/* Button */}
      <section>
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
          Twitter
        </button>
      </section>

      {/* Mini-Profile */}
      <section>
        <div className="flex items-center justify-start text-gray-700">
          <Image
            src="/images/user-icon.png"
            height="80px"
            width="80px"
            className="rounded-full h-50 w-50 flex items-center justify-center"
          ></Image>
          <div className="hidden xl:inline">
            <h4 className="font-bold">Eason Nong</h4>
            <p className="text-gray-500">@EasonNMedia</p>
          </div>
          <EllipsisHorizontalIcon className="h-7 xl:ml-4 hidden xl:inline"></EllipsisHorizontalIcon>
        </div>
      </section>
    </div>
  );
};
