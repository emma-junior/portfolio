import React from 'react'
import {BiTimeFive} from "react-icons/bi"

const ArticlesCard = ({article}) => {
  return (
    <a href={article.url} target="_blank" rel="noreferrer" className='bg-[#262627] flex flex-col justify-between h-52 my-3 p-10 cursor-pointer hover:scale-105 transition duration-500'>
        <div>
            <h2 className='text-2xl font-semibold text-white'>{article.title}</h2>
            <p className='text-[#777778] text-[16px]'>{article.date}</p>
        </div>
        <p className='text-[#777778] text-sm flex h-2 items-center'><BiTimeFive className='mr-1' /> {article.duration}</p>
    </a>
  )
}

export default ArticlesCard