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
        {current === '/' &&
          (<div className="card lg:card-side">
            <div className="card-body">
                <Avatar/>
                <div className='text'>
                <h2 className={`text-[2.5rem] m-0 font-extrabold ${cormorantGaramond.className}`}>{props.h2}</h2>
                <p className={`${workSans.className}`}> <em>{props.p1}</em></p>
                <p className={`${workSans.className}`}>{props.p2}</p>
                </div>
            </div>
          </div>)
        }
        {
          current === '/about' && (
            <div className='card lg:card-side'>
              <div className='body'>
                <div className='text'>
                  <h2 className={`text-[2.5rem] m-0 font-extrabold ${cormorantGaramond.className}`}>{props.h2}</h2>
                  <p className={`text-[0.78rem] m-0 ${workSans.className}`}>{props.p1} <br/> <br/> {props.p2} <br/> <br/> {props.p3} <br/> <br/> {props.p8} <br/> <br/> {props.p4} <br/> <br/> {props.p5} <a className='link link-info' href={'/contact'}>here</a>. <br/> {props.p6} <br/> <br/> {props.p7} </p>
                </div>
              </div>
            </div>
          )
        }
        {
          current === '/experience' && (
            <div className='card lg:card-side'>
              <div className='body'>
                <div className='text'>
                  <p className={`text-[0.7rem] text-left m-0 ${workSans.className}`}><em>{props.p1}</em> <span className='m-0 auto '>{props.h3one}</span></p>
                  <p className={`text-[0.7rem] m-0 ${workSans.className}`}>{props.p2} <br/></p>
                  <ul className='list-disc pl-3'>
                    <li className={`text-[0.7rem] ${workSans.className}`}>Contribute within a team of 10 to create a web application to display a dashboard with client project metrics
across the entire company</li>
                    <li className={`text-[0.7rem] ${workSans.className}`}>Developed a responsive Android application in Kotlin that leverages MVVM Architecture to recommend certain
food recipes based on the user’s text input</li>
                  </ul>
                </div>
              </div>
            </div>
          )
        }

        <Footer/>
    </main>
  )
}
