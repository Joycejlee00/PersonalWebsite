import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/switch.css'
import '../styles/navbar.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Joyce Lee</title>
      <link rel='icon' type="image/png" href='J-logos_black.png'/>
    </Head>
    <ThemeProvider>
    <Component {...pageProps} />
  </ThemeProvider>
    </>
  )
}
