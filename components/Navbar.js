import React from 'react'
import {RiBarChartHorizontalLine} from "react-icons/ri"
import {FaTimes} from "react-icons/fa"
import { motion } from "framer-motion";
import { useGlobalContext } from '../hooks/context'

const Navbar = () => {
    const {dropdown, setDropdown} = useGlobalContext()
  return (
    <div className='flex w-11/12 justify-between mx-auto h-16 items-center'>
        <h2 className='text-[28px] font-medium'>EmmaTechy</h2>
        <motion.p onClick={() => setDropdown(!dropdown)} className='text-3xl cursor-pointer'>{!dropdown ? <RiBarChartHorizontalLine /> : <FaTimes />}</motion.p>
    </div>
  )
}

export default Navbar