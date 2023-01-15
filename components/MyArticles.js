import React, { useEffect } from "react";
import { articles } from "../data/main";
import ArticlesCard from "./ArticlesCard";
import { useGlobalContext } from "../hooks/context";

const MyArticles = () => {
  const { setActive } = useGlobalContext();
  useEffect(() => {
    setActive("articles");
  }, []);
  return (
    <div className="mx-5 py-5 lg:mx-10 lg:py-20">
      {articles.map((article) => (
        <ArticlesCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default MyArticles;
