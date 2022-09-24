import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Input = () => {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      {/* Mini-Profile */}
      <img
        src="/images/user-icon.png"
        alt="user-img"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      ></img>

      <div className="w-full">
        {/* Text area */}
        <div className="divide-y divide-gray-200">
          <textarea
            rows="2"
            placeholder="What's happening?"
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wider min-h-[50px] text-gray-700"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          {/* Icon */}
          <div className="flex">
            <PhotoIcon className="h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"></PhotoIcon>
            <FaceSmileIcon className="h-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100"></FaceSmileIcon>
          </div>
          {/* Twitter Button */}
          <button
            className="bg-blue-400 font-bold shadow-md hover:brightness-95 rounded-full text-white px-4 py-1.5 disabled:opacity-50"
            disabled
          >
            Twitter
          </button>
        </div>
      </div>
    </div>
  );
};
