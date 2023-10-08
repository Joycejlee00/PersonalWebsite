import React from 'react'
import { Footer } from './Footer';
import Typewriter from 'typewriter-effect';
import { Avatar } from '@/components/Avatar';
import { DM_Serif_Display, Cormorant_Garamond, Work_Sans} from 'next/font/google'
import { useRouter } from "next/router";

const dmSerifDisplay = DM_Serif_Display({
  weight: '400',
  style: ['normal'],
  subsets: ['latin']
})

const cormorantGaramond = Cormorant_Garamond({
  weight: '700',
  style: ['normal'],
  subsets: ['latin']
})

const workSans = Work_Sans({
  weight: '400',
  style: ['normal'],
  subsets: ['latin']
})
export const Card = (props : any) => {

  const current = useRouter().pathname;

  return (
    <main className='main'>
        <h2 className={`typewriter ${dmSerifDisplay.className}`}>
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString(`${props.title}`)
            .pauseFor(2500)
            .start();
        }}
        />
        </h2>
        {current === '/' ? 
          <div className="card lg:card-side">
            <div className="card-body">
                <Avatar/>
                <div className='text'>
                <h2 className={`text-[2.5rem] m-0 font-extrabold ${cormorantGaramond.className}`}>{props.h2}</h2>
                <p className={`${workSans.className}`}> <em>{props.p1}</em></p>
                <p className={`${workSans.className}`}>{props.p2}</p>
                </div>
            </div>
          </div> 
          :
          <div className="card lg:card-side">
            <div className="body">
                <div className='text'>
                <h2 className={`text-[2.5rem] m-0 font-extrabold ${cormorantGaramond.className}`}>{props.h2}</h2>
                <p className={`text-[0.8rem] ${workSans.className}`}>{props.p1}</p>
                <p className={`text-[0.8rem] ${workSans.className}`}>{props.p2}</p>
                </div>
            </div>
          </div>
        }
        <Footer/>
    </main>
  )
}
