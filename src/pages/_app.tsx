import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/navbar.css'
import Head from 'next/head'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Joyce Lee</title>
      <link rel='icon' type="image/png" href='J-logos_black.png'/>
    </Head>
    <ThemeProvider>
      <Navbar/>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  )
}
