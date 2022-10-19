import {useEffect} from 'react'
import Emma from '../components/Emma'
import MyResume from '../components/MyResume'
import { useGlobalContext } from '../hooks/context'

const Resume = () => {
    const {setActive} = useGlobalContext()
    useEffect(() => {
        setActive("Resume")
    }, [])
  return (
    <main className='flex bg-[#161616] min-h-screen'>
        <span className='w-4/12 m-auto'><Emma /></span>
        <span className='w-5/12 my-20 mx-auto'>
          <MyResume />
        </span>
    </main>  
  )
}

export default Resume