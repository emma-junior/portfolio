import React,{useEffect} from 'react'
import MyArticles from './MyArticles'
import { useGlobalContext } from '../hooks/context'
import Emma from './Emma'

const ArticlesPg = () => {
    const {setActive} = useGlobalContext()
    useEffect(() => {
        setActive("articles")
    }, [])
  return (
    <main className='flex bg-[#161616] min-h-screen'>
        <span className='w-4/12 m-auto'><Emma /></span>
        <span className='w-5/12 my-20 mx-auto'>
          <MyArticles />
        </span>
    </main>
  )
}

export default ArticlesPg