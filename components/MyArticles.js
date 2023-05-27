import React, { useEffect } from "react";
// import { articles } from "../data/main";
import ArticlesCard from "./ArticlesCard";
import { useGlobalContext } from "../hooks/context";

const MyArticles = ({ posts }) => {
  const { setActive } = useGlobalContext();
  useEffect(() => {
    setActive("blog");
  }, []);
  const arraytwo = [
    { tags: ["beginners", "coding"] },
    { tags: ["javascript"] },
  ];
  return (
    <div className="lg:fixed left-[45%] lg:overflow-y-scroll lg:h-full mx-5 lg:mx-10 lg:py-20 pb-10 lg:px-6 lg:w-inherit scroll ">
      <p className="font-semibold text-[#777778] my-5">ARTICLES</p>
      <div className="lg:grid grid-cols-2 gap-2 pb-36">
        {posts?.map((article, index) => {
          const combine = arraytwo[index];
          return (
            <ArticlesCard key={index} article={article} combine={combine} />
          );
        })}
      </div>
    </div>
  );
};

export default MyArticles;
