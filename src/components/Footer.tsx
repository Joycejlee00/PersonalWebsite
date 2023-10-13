import {Work_Sans} from 'next/font/google'
import { BsGithub, BsLinkedin, BsFileTextFill } from "react-icons/bs";
import Link from 'next/link'

const contacts = [
    {
      path: "https://github.com/Joycejlee00",
      icon: BsGithub,
      name: "Github",
    },
    {
      path: "https://www.linkedin.com/in/joycejlee/",
      icon: BsLinkedin,
      name: "LinkedIn",
    },
    {
      path: "/Joyce_Lee_Resume.pdf",
      icon: BsFileTextFill,
      name: "Resume",
    },
  ];

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
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        {contacts.map((contact) => {
        return (
          <a
          key={contact.path}
          href={contact.path}
          className='tooltip tooltip-top'
          data-tip={contact.name}
          target="_blank"
          rel="noopener noreferrer"
          >
            <contact.icon size={16}/>
          </a>
      )
        })}
      </nav>
    </footer>
  )
}
