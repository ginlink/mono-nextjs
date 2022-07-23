import '../styles/globals.css'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

function MyApp(props: AppProps) {
  return <App {...props} />
}

export default MyApp
