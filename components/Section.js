import React,{useState} from 'react'
import Link from 'next/link'
import { useGlobalContext } from '../hooks/context'

const Section = ({num, type}) => {
    const {active} = useGlobalContext()
    const [hov, setHov] = useState({
        workhov: false,
        resumehov: false,
        articlehov: false
    })
  return (
    <>
        <Link href={`/${type}`}>
            <div className={` ${active === type ? "text-white": "text-[#777778]"} flex cursor-pointer hover:text-white w-1/2 transition duration-1000 ease-in`} onMouseOver={() => setHov({...hov, resumehov: true})} onMouseOut={() => setHov({...hov, resumehov: false})}>
                <h2 className='text-xs'>{num}</h2>
                <p className={`h-[1px] ${active === type | hov.resumehov ? "bg-white w-16 ": "bg-[#777778] w-10"} my-auto mx-3 transition-width`}></p>
                <h2 className='text-xs'>{type.toUpperCase()}</h2>
            </div>
        </Link>
    </>
  )
}

export default Section