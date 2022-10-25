import ArticlesPg from '../components/ArticlesPg'
import MobileArticlesPg from '../components/MobileArticlesPg'
import useWindowSize from '../hooks/useWindowSize'

const articles = () => {
  const windowSize = useWindowSize()
  return (
    <main>
      {
        windowSize.width >= 768 ? (
          <ArticlesPg />
        ) : (
          <MobileArticlesPg />
        )
      }
    </main>   
  )
}

export default articles