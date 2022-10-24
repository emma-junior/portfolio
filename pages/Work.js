import {useEffect} from 'react'
import HomePg from '../components/HomePg'
import WorkPg from '../components/WorkPg'
import { useGlobalContext } from '../hooks/context'
import useWindowSize from '../hooks/useWindowSize'

const Work = () => {
    const {setActive} = useGlobalContext()
    const windowSize = useWindowSize()
    useEffect(() => {
        setActive("Work")
    }, [])
  return (
    <main>
       {
        windowSize.width >= 768 ? (
          <HomePg />
        ) : (
          <WorkPg />
        )
      }
    </main> 
  )
}

export default Work