import React from 'react'
import Image from 'next/image'
import me from "../assets/user.svg"
import {BsGithub, BsArrowUpRight, BsLinkedin} from "react-icons/bs"

const Socials = () => {
  return (
    <main className='flex space-x-4'>
        <div className='relative'>
            <div className='bg-[#b4b4b4] h-12 w-12 rounded-full'></div>
            <div className='w-[43px] absolute top-[2px] left-[2px]'><Image src={me} alt="" /></div>
        </div>
        <a href='https://github.com/emma-junior' target="_blank" rel="noreferrer" className='text-[#ccc5c5] flex h-12 items-center text-xs hover:text-white'><BsGithub className='mr-2' /> Github <BsArrowUpRight className='ml-2' /></a>
        <a href="https://www.linkedin.com/in/eze-emmanuel-355897237" target="_blank" rel="noreferrer" className='text-[#ccc5c5] flex h-12 items-center text-xs hover:text-white' ><BsLinkedin className='mr-2' /> Linkedin <BsArrowUpRight className='ml-2' /></a>
        <a href='mailto:emma.c.techy@gmail.com' className='text-[#ccc5c5] flex h-12 items-center text-xs hover:text-white'>@ Email <BsArrowUpRight className='ml-2' /></a>
    </main>
  )
}

export default Socials