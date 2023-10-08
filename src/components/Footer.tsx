import {Work_Sans} from 'next/font/google'

const workSans = Work_Sans({
  weight: '400',
  style: ['normal'],
  subsets: ['latin']
})

export const Footer = () => {

  return (
    <footer className={`footer footer-left p-2 bg-transparent text-[0.6rem]  ${workSans.className}`}>
      <aside>
        <p> @ Joyce Lee</p>
      </aside>
    </footer>
  )
}
