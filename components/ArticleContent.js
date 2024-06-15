import React, { useEffect } from "react";
import HashnodeContent from "../helper/HashnodeContent";
import Image from "next/image";
import back from "../assets/arrow.svg";
import { BsCalendar3 } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import Link from "next/link";
import Header from "../components/Header";
import javascript from "highlight.js/lib/languages/javascript";
import "highlight.js/styles/atom-one-dark.css";
// const readingTime = require("reading-time");

const ArticleContent = ({ post }) => {
  const dateString = post.publishedAt;
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  // const readtime = readingTime(post.contentMarkdown);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hljs = require("highlight.js/lib/core");
      hljs.registerLanguage("javascript", javascript);
      hljs.initHighlightingOnLoad();
    }
    document.querySelectorAll("pre").forEach((el) => {
      // create copy button
      if (!el.querySelector(".copy-code")) {
        const button = document.createElement("button");
        button.innerText = "Copy";
        button.classList.add("copy-code");
        button.onclick = () => {
          const code = el.innerText;
          navigator.clipboard.writeText(code);
          button.innerText = "Copied!";
          setTimeout(() => {
            button.innerText = "Copy";
          }, 2000);
        };

        el.prepend(button);
      }
    });
  }, [post]);
  return (
    <>
      <div className="lg:hidden">
        <Header />
      </div>
      <div className="lg:w-[70%] w-[90%] mx-auto my-12">
        <Link href="/blog">
          <Image
            className="cursor-pointer"
            src={back}
            width={80}
            height={40}
            alt=""
          />
        </Link>
        <div className="flex space-x-5 my-6 text-[#777778]">
          <p className="flex items-center text-sm">
            <BsCalendar3 className="mr-1" />
            {date.toLocaleString("en-US", options)}
          </p>
          <p className="flex items-center text-sm">
            <BiTimeFive className="mr-1" />
            {post?.readTimeInMinutes} min read
          </p>
        </div>
        <h1 className="text-3xl mb-16">{post?.title}.</h1>
        <HashnodeContent content={post?.content?.markdown} />
      </div>
    </>
  );
};

export default ArticleContent;
