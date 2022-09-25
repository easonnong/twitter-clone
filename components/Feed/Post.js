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
    <div>
      {/* User Image */}
      <img
        src={props.post.userImg}
        alt="user imag"
        className="h-14 rounded-full"
      ></img>
      {/* Right Side */}
      <div>
        {/* Header */}
        <div>
          {/* Post user info */}
          <div>
            <h4>{props.post.name}</h4>
            <span>{props.post.userName}</span>
            <span>{props.post.timestamp}</span>
          </div>
          {/* Dot Icon */}
          <EllipsisHorizontalIcon className="h-10"></EllipsisHorizontalIcon>
        </div>

        {/* Post Test */}
        <p>{props.post.text}</p>

        {/* Post Image */}
        <img src={props.post.img} alt="post img" className="h-50"></img>

        {/* Icon */}
        <div className="flex">
          <ChatBubbleOvalLeftEllipsisIcon className="h-9"></ChatBubbleOvalLeftEllipsisIcon>
          <TrashIcon className="h-9"></TrashIcon>
          <HeartIcon className="h-9"></HeartIcon>
          <ShareIcon className="h-9"></ShareIcon>
          <ChartBarIcon className="h-9"></ChartBarIcon>
        </div>
      </div>
    </div>
  );
};
