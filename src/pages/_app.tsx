import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import '../global-styles/main.scss'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
