import React from 'react'
import Bio from './Bio'
import Socials from './Socials'
import Section from './Section'

const Emma = () => {
    
  return (
    <section className='fixed top-20 w-4/12'>
        <Bio />
        <div className='space-y-5 my-12'>
            <Section num="00" type="Work" />
            <Section num="01" type="Resume" />
            <Section num="02" type="Articles" />
        </div>
        <div className=''><Socials /></div>
        <p className='text-[#777778] text-xs my-6'>Inspired by <span className='text-white'>Sarah Dayan</span></p>
    </section>
  )
}

export default Emma