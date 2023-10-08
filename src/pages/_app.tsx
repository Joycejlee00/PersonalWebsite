import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/card.css'
import Head from 'next/head'
import Layout from '@/components/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>Joyce Lee</title>
      <link rel='icon' type="image/png" href='J-logos_black.png'/>
    </Head>
    <ThemeProvider disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
    </> 
  )
}
