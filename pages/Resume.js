import MobileResumePg from '../components/MobileResumePg'
import ResumePg from '../components/ResumePg'
import useWindowSize from '../hooks/useWindowSize'

const resume = () => {
  const windowSize = useWindowSize()
  return (
    <main>
      {
        windowSize.width >= 768 ? (
          <ResumePg />
        ) : (
          <MobileResumePg />
        )
      }
    </main>
  )
}

export default resume