import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import News from "./News";
import { WhoToFollow } from "./WhoToFollow";

export const Widgets = (props) => {
  const [articleNum, setArticleNum] = useState(3);

  return (
    <div className="xl:w-[600px] hidden lg:inline">
      <div className="w-[90%] xl:w-[75%] sticky top-0 bg-white py-1.5 z-50">
        {/* Search */}
        <div className="flex items-center p-3 rounded-full bg-red-300 relative">
          <MagnifyingGlassIcon className="h-5 z-50 text-gray-500"></MagnifyingGlassIcon>
          {/* Input */}
          <input
            className="absolute inset-0 rounded-full pl-11 border-gray-500 text-gray-700 focus:shadow-lg focus:bg-white bg-gray-100"
            type="text"
            placeholder="Search Twitter"
          ></input>
        </div>
      </div>
      {/* New */}
      <div className="bg-gray-100 rounded-xl">
        <h4 className="font-bold text-xl px-4 py-2">What's happening</h4>
        {props.newsResults.slice(0, articleNum).map((article) => (
          <News key={article.title} article={article}></News>
        ))}
        {/* Show more button */}

        <button
          className="ml-3 text-blue-300 rounded-full pl-2 pr-2 pb-2 pt-2 hover:text-blue-400"
          onClick={() => setArticleNum(articleNum + 3)}
        >
          Show more
        </button>
      </div>

      {/* Who To Follow */}
      <section>
        <WhoToFollow
          randomUsersResults={props.randomUsersResults}
        ></WhoToFollow>
      </section>
    </div>
  );
};
