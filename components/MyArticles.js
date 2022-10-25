import React from 'react'
import { articles } from '../data/main'
import ArticlesCard from './ArticlesCard'

const MyArticles = () => {
  return (
    <div>{articles.map((article) => <ArticlesCard article={article} />)}</div>
  )
}

export default MyArticles