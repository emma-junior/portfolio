import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Link from "next/link";
// const readingTime = require("reading-time");

const ArticlesCard = ({ article }) => {
  const dateString = article.dateAdded;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  // const stats = readingTime(article.brief);
  return (
    // <Link href="/articles/[id]" as={`/articles/${article.slug}`}>
    <a
      href="https://emmanuel-eze.hashnode.dev/beginners-guide-to-coding"
      target="_blank"
      rel="noreferrer"
      className="bg-[#262627] flex flex-col justify-between h-52 my-3 p-10 lg:w-[550px] cursor-pointer hover:scale-105 transition duration-500"
    >
      <div>
        <h2 className="text-2xl font-semibold text-white">{article.title}</h2>
        <p className="text-[#777778] text-[16px]">
          {date.toLocaleString("en-US", options)}
        </p>
      </div>
      <p className="text-[#777778] text-sm flex h-2 items-center">
        <BiTimeFive className="mr-1" /> 3 min read
      </p>
    </a>
    // </Link>
  );
};

export default ArticlesCard;
