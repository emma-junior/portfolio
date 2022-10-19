import '../styles/globals.css'
import AppProvider from '../hooks/context'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  ) 
}

export default MyApp
