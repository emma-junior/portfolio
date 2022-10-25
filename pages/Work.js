import HomePg from '../components/HomePg'
import WorkPg from '../components/WorkPg'
import useWindowSize from '../hooks/useWindowSize'

const work = () => {
    const windowSize = useWindowSize()
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

export default work