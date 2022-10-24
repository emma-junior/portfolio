import React from 'react'
import Emma from './Emma'
import Projects from './Projects'

const HomePg = () => {
  return (
    <main className='flex bg-[#161616] min-h-screen'>
        <span className='w-4/12 m-auto'><Emma /></span>
        <span className='w-5/12 my-20 mx-auto'>
          <Projects />
        </span>
    </main> 
  )
}

export default HomePg