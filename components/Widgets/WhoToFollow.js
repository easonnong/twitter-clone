import { useState } from "react";

export const WhoToFollow = (props) => {
  const [randomUsersNum, setRandomUsersNum] = useState(3);

  return (
    <div className="sticky mt-3 top-16 text-gray-700 space-y-3 bg-gray-100 pt-2 rounded-xl w-[90%] xl:w-[75%]">
      <h4 className="font-bold text-xl px-4">Who to follow</h4>
      {/* Random Info */}
      {props.randomUsersResults.slice(0, randomUsersNum).map((randomUser) => (
        <div
          key={randomUser.login.username}
          className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
        >
          <img
            className="rounded-full"
            src={randomUser.picture.thumbnail}
            width="40"
            alt="random user img"
          ></img>
          <div className="truncate ml-4 leading-5">
            <h4 className="font-bold hover:underline text-[14px] truncate">
              {randomUser.login.username}
            </h4>
            <h5 className="text-[13px] text-gray-500 truncate">
              {randomUser.name.first + " " + randomUser.name.last}
            </h5>
          </div>
          <button className="bg-black text-white rounded-full text-sm ml-auto px-3.5 py-1.5 font-bold">
            Follow
          </button>
        </div>
      ))}
      {/* Show more */}
      <button
        className="text-blue-300 pl-4 pb-3 hover:text-blue-400"
        onClick={() => setRandomUsersNum(randomUsersNum + 3)}
      >
        Show more
      </button>
    </div>
  );
};
