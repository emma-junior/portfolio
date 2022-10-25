import React from 'react'
import { useGlobalContext } from '../hooks/context'
import Dropdown from './Dropdown'
import MyArticles from './MyArticles'
import Navbar from './Navbar'

const MobileArticlesPg = () => {
    const {dropdown} = useGlobalContext()
  return (
    <main className='bg-[#151515] min-h-screen text-white'>
        <Navbar />
        {!dropdown ? <div className='mx-5 py-3'><MyArticles /></div> : <Dropdown />}
    </main>
  )
}

export default MobileArticlesPg