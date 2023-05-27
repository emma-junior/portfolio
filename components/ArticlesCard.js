import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Link from "next/link";
const readingTime = require("reading-time");

const ArticlesCard = ({ article, combine }) => {
  const dateString = article.dateAdded;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const readtime = readingTime(article.contentMarkdown);
  return (
    <Link href="/articles/[id]" as={`/articles/${article.slug}`}>
      <article className="bg-[#1b1b1d] flex flex-col justify-between md:mx-5 lg:mx-0 h-52 min-h-full my-3 p-10 cursor-pointer hover:scale-105 transition duration-500">
        <div>
          <h2 className="md:text-2xl text-xl font-semibold text-white">
            {article.title}
          </h2>
          <p className="text-[#777778] text-[16px]">
            {date.toLocaleString("en-US", options)}
          </p>
        </div>
        <p className="text-[#777778] text-sm flex h-2 items-center">
          <BiTimeFive className="mr-1" /> {readtime.text}
        </p>
      </article>
    </Link>
  );
};

export default ArticlesCard;
