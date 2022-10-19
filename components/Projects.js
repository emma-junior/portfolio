import React from 'react'
import { main, others } from '../data/main'
import MainCard from './MainCard'

const Projects = () => {
  return (
    <>
        <p className='font-semibold text-[#777778] my-5'>FEATURED</p>
        <div className='grid grid-cols-1 gap-2'>
            {main.map((project) => <MainCard key={project.id} project={project} boxheight="h-52" />)}
        </div>
        <p className='font-semibold text-[#777778] mt-12 mb-5'>OTHERS</p>
        <div className='grid grid-cols-2 gap-2'>
            {others.map((project) => <MainCard key={project.id} project={project} boxheight="h-72"/>)}
        </div>
    </>
  )
}

export default Projects