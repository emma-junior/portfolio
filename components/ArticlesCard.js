import React from "react";
import { BiTimeFive } from "react-icons/bi";
import Link from "next/link";
const readingTime = require("reading-time");

const ArticlesCard = ({ article }) => {
  const dateString = article.dateAdded;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const readtime = readingTime(article.contentMarkdown);
  return (
    <Link href="/blog/[id]" as={`/blog/${article.slug}`}>
      <article className="bg-[#1b1b1d] flex flex-col justify-between md:mx-5 lg:mx-0 h-96 min-h-full my-3 p-10 cursor-pointer hover:scale-105 transition duration-500 lg:even:translate-y-6">
        <p className="text-[#777778] text-sm">
          {date.toLocaleString("en-US", options)}
        </p>
        <div>
          <h2 className="text-xl font-mono font-semibold gradientText">
            {article.title}
          </h2>
          <p className="text-[#777778] mt-5 text-sm flex h-2 items-center">
            <BiTimeFive className="mr-1" /> {readtime.text}
          </p>
        </div>
      </article>
    </Link>
  );
};

export default ArticlesCard;
