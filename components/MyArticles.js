import React, { useEffect } from "react";
// import { articles } from "../data/main";
import ArticlesCard from "./ArticlesCard";
import { useGlobalContext } from "../hooks/context";

const MyArticles = ({ posts }) => {
  const { setActive } = useGlobalContext();
  useEffect(() => {
    setActive("articles");
  }, []);
  return (
    <div className="mx-5 py-5 lg:mx-10 lg:py-20">
      {posts.map((article) => (
        <ArticlesCard key={article._id} article={article} />
      ))}
    </div>
  );
};

export default MyArticles;
