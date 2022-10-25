import React from 'react'
import Navbar from './Navbar'
import { useGlobalContext } from '../hooks/context'
import Dropdown from './Dropdown'
import Projects from './Projects'

const MobileWorkPg = () => {
    const {dropdown} = useGlobalContext()
  return (
    <div className='bg-[#151515] min-h-screen text-white'>
        <Navbar />
        {!dropdown ? <div className='mx-5 py-4'><Projects /></div> : <Dropdown />}     
    </div>
  )
}

export default MobileWorkPg