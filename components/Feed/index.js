import { SparklesIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Input } from "./Input";
import { Post } from "./Post";

export const Feed = () => {
  // post info
  const posts = [
    {
      id: "1",
      name: "Eason Nong",
      userName: "EasonNMedia",
      userImg: "/images/user-icon.png",
      img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2674&q=80",
      text: "nice view!",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Eason Nong",
      userName: "EasonNMedia",
      userImg: "/images/user-icon.png",
      img: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
      text: "wow!",
      timestamp: "2 days ago",
    },
  ];

  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[570px] sm:ml-[90px] flex-grow max-w-xl">
      {/* Home and Icon */}
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5"></SparklesIcon>
        </div>
      </div>
      {/* Input */}
      <section>
        <div>
          <Input></Input>
        </div>
      </section>

      {/* Post */}
      <section>
        <div>
          {posts.map((post) => (
            <Post key={post.id} post={post}></Post>
          ))}
        </div>
      </section>
    </div>
  );
};
