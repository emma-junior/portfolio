import {useEffect} from 'react'
import Emma from '../components/Emma'
import Projects from '../components/Projects'
import { useGlobalContext } from '../hooks/context'

const work = () => {
    const {setActive} = useGlobalContext()
    useEffect(() => {
        setActive("Work")
    }, [])
  return (
    <main className='flex bg-[#161616] min-h-screen'>
        <span className='w-4/12 m-auto'><Emma /></span>
        <span className='w-5/12 my-20 mx-auto'>
          <Projects />
        </span>
    </main> 
  )
}

export default work