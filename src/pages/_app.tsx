import { AppProps } from 'next/app'
import '../styles/global.css'
import '../styles/slick.css'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
