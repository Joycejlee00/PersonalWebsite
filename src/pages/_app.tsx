import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import '../styles/globals.css'
import '../styles/navbar.css'
import '../styles/card.css'
import Layout from '@/components/Layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <ThemeProvider disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
    </ThemeProvider>
    </> 
  )
}
