import Image from "next/image";
import {
  BellIcon,
  BookmarkIcon,
  EllipsisHorizontalCircleIcon,
  EnvelopeIcon,
  HashtagIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { HomeIcon } from "@heroicons/react/24/solid";
import { MenuIcon } from "./MenuIcon";

export const Sidebar = () => {
  return (
    <div className="flex-col h-screen ml-10 w-[150px]">
      <div className="">
        {/* Twitter img */}
        <Image src="/images/twitter-logo.png" height="25" width="25"></Image>

        {/* Menu */}
        <MenuIcon text="Home" icon={HomeIcon} />
        <MenuIcon text="Explore" icon={HashtagIcon} />
        <MenuIcon text="Notifications" icon={BellIcon} />
        <MenuIcon text="Messages" icon={EnvelopeIcon} />
        <MenuIcon text="Bookmarks" icon={BookmarkIcon} />
        <MenuIcon text="Lists" icon={QueueListIcon} />
        <MenuIcon text="Profile" icon={UserIcon} />
        <MenuIcon text="More" icon={EllipsisHorizontalCircleIcon} />

        {/* Twitter button */}
        <button className="bg-blue-300">Twitter</button>
      </div>
      {/* Profile img */}

      <div className="mt-80">
        <Image
          className="rounded-full"
          src="/images/user-img.png"
          height="50"
          width="50"
        ></Image>
      </div>
    </div>
  );
};
