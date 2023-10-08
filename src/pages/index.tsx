import { Inter} from 'next/font/google'
import { Card } from '@/components/Card'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const values = {
    title : "Hello World",
    h2 : "Joyce Lee",
    p1: "Software Developer",
    p2: "Welcome to my personal website!"
  }

  return (
    <Card title={values.title} h2={values.h2} p1={values.p1} p2={values.p2}/>
  )
}
