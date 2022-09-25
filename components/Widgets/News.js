import React from "react";

export default function News(props) {
  return (
    <div>
      <a href={props.url} target="_blank">
        <div className="flex space-x-1 px-4 py-2 hover:bg-gray-200 transition duration-200">
          {/* Text */}
          <div className="space-y-0.5">
            <h6 className="text-sm font-bold">{props.article.title}</h6>
            <p className="text-xs font-medium text-gray-500">
              {props.article.source.name}
            </p>
          </div>
          {/* Img */}
          <img
            className="rounded-xl"
            width="70"
            src={props.article.urlToImage}
            alt="news img"
          ></img>
        </div>
      </a>
    </div>
  );
}
