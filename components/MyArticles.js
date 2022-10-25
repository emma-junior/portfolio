import React from 'react'
import { articles } from '../data/main'
import ArticlesCard from './ArticlesCard'

const MyArticles = () => {
  return (
    <div>{articles.map((article) => <ArticlesCard key={article.id} article={article} />)}</div>
  )
}

export default MyArticles