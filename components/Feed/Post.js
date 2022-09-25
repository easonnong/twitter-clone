import {
  ChartBarIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisHorizontalIcon,
  HeartIcon,
  ShareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React from "react";

export const Post = (props) => {
  return (
    <div className="flex p-3 cursor-pointer border-b border-gray-200">
      {/* User Image */}
      <img
        src={props.post.userImg}
        alt="user imag"
        className="h-11 w-11 rounded-full"
      ></img>
      {/* Right Side */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between">
          {/* Post user info */}
          <div className="flex space-x-1 whitespace-nowrap items-center">
            <h4 className="font-bold text-[15px] sm:text-[16px] hover:underline">
              {props.post.name}
            </h4>
            <span className="text-sm sm:text-[15px]">
              @{props.post.userName} -{" "}
            </span>
            <span className="text-sm sm:text-[15px] hover:underline">
              {props.post.timestamp}
            </span>
          </div>
          {/* Dot Icon */}
          <EllipsisHorizontalIcon className="h-10 hoverEffect w-10 hover:bg-sky-100 hover:text-sky-500 p-2"></EllipsisHorizontalIcon>
        </div>

        {/* Post Test */}
        <p className="text-gray-800 text-[15px] sm:text-[16px] mb-2">
          {props.post.text}
        </p>

        {/* Post Image */}
        <img
          src={props.post.img}
          alt="post img"
          className="h-50 rounded-2xl mr-2"
        ></img>

        {/* Icon */}
        <div className="flex text-gray-500 justify-between p-2">
          <ChatBubbleOvalLeftEllipsisIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"></ChatBubbleOvalLeftEllipsisIcon>
          <TrashIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-red-100"></TrashIcon>
          <HeartIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-red-100"></HeartIcon>
          <ShareIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"></ShareIcon>
          <ChartBarIcon className="h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100"></ChartBarIcon>
        </div>
      </div>
    </div>
  );
};
