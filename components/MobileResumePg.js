import React from 'react'
import Navbar from './Navbar'
import { useGlobalContext } from '../hooks/context'
import Dropdown from './Dropdown'
import MyResume from './MyResume'

const MobileResumePg = () => {
    const {dropdown} = useGlobalContext()
  return (
    <main className='bg-[#151515] min-h-screen text-white'>
        <Navbar />
        {!dropdown ? <div className='mx-5 py-4'><MyResume /></div> : <Dropdown />}
    </main>
  )
}

export default MobileResumePg