import React from 'react'
import {BsGithub, BsLinkedin} from "react-icons/bs"
import {FaAt} from "react-icons/fa"
import Link from 'next/link'
import { motion } from "framer-motion";
import { useGlobalContext } from '../hooks/context'

const Dropdown = () => {
    const {dropdown, setDropdown} = useGlobalContext()
    console.log(dropdown)
  return (        
        <motion.div className='' animate={{ y: 40 }}
        transition={{ type: "spring", duration: 1, }}>
            <ul className='text-center my-8 space-y-6 text-[#777778]'>
                <Link href="/"><li onClick={() => setDropdown(false)} className='text-2xl cursor-pointer hover:text-white'>Home</li></Link>
                <Link href="/Work"><li onClick={() => setDropdown(false)} className='text-2xl cursor-pointer hover:text-white'>Work</li></Link>
                <li className='text-2xl cursor-pointer hover:text-white'>Articles</li>
                <li className='text-2xl cursor-pointer hover:text-white'>Resume</li>
            </ul>
            <div className=''>
                <h2 className='text-center text-2xl mb-6'>Connect With Me</h2>
                <div className='flex space-x-3 w-full justify-center text-xl text-[#777778]'>
                    <p><BsGithub /></p>
                    <p><BsLinkedin /></p>
                    <p><FaAt /></p>
                </div>
            </div>
        </motion.div>
  )
}

export default Dropdown