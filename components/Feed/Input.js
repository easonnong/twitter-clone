import { FaceSmileIcon, PhotoIcon } from "@heroicons/react/24/outline";
import React from "react";

export const Input = () => {
  return (
    <div>
      {/* Mini-Profile */}
      <img
        src="/images/user-icon.png"
        alt="user-img"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      ></img>

      <div>
        {/* Text area */}
        <div>
          <textarea rows="2" placeholder="What's happening?"></textarea>
        </div>
        <div className="flex">
          {/* Icon */}
          <PhotoIcon className="h-7"></PhotoIcon>
          <FaceSmileIcon className="h-7"></FaceSmileIcon>
          {/* Twitter Button */}
          <button>Twitter</button>
        </div>
      </div>
    </div>
  );
};
