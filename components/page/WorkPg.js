import React from 'react'
import useWindowSize from '../../hooks/useWindowSize'
import HomePg from '../HomePg'
import MobileWorkPg from '../MobileWorkPg'

const WorkPg = () => {
    const windowSize = useWindowSize()
  return (
    <main>
        {
            windowSize.width >= 768 ? (
            <HomePg />
            ) : (
            <MobileWorkPg />
            )
        }
    </main>
  )
}

export default WorkPg