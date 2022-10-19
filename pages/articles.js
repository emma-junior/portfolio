import {useEffect} from 'react'
import Emma from '../components/Emma'
import MyArticles from '../components/MyArticles'
import { useGlobalContext } from '../hooks/context'

const articles = () => {
    const {setActive} = useGlobalContext()
    useEffect(() => {
        setActive("Article")
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

export default articles