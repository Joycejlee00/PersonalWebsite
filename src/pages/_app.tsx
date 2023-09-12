import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { motion, AnimatePresence } from "framer-motion";
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
      <div>
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ delay: 0.25 }}
            >
              <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </div>
    </ThemeProvider>
    </>
  )
}
