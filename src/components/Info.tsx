import React from 'react'
import Link from 'next/link'
import { BsGithub, BsLinkedin, BsFileTextFill } from "react-icons/bs";

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
      path: "/JoyceLee_Resume.pdf",
      icon: BsFileTextFill,
      name: "Resume",
    },
  ];

export const Info = () => {
  <div className='ml-1 mt-8 flex items-center'>
    {contacts.map((contact) => {
        return (
            <Link
            key={contact.path}
            href={contact.path}
            className='tooltip tooltip-bottom'
            data-tip={contact.name}
            >
                <contact.icon size={30}/>
            </Link>
        )
    })}
  </div>
}
