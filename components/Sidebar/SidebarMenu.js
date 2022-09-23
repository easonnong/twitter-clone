import React from "react";

export const SidebarMenu = (props) => {
  return (
    <div className="hoverEffect flex items-center text-gray-700 justify-center xl:justify-start text-lg space-x-3">
      <props.icon className="h-7" />
      <span className={`${props.active && "font-bold "} hidden xl:inline`}>
        {props.text}
      </span>
    </div>
  );
};
