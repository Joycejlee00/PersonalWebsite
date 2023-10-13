import React from 'react'
import { Footer } from './Footer';
import Typewriter from 'typewriter-effect';
import { Avatar } from '@/components/Avatar';
import { DM_Serif_Display, Cormorant_Garamond, Work_Sans} from 'next/font/google'
import { useRouter } from "next/router";
import { Buttons } from './Buttons';

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
          (<div className="card lg:card-side ">
            <div className={`card-body flex items-center md:flex-row ml:10 md:justify`}>
                <Avatar/>
                <div className='flex flex-col'>
                <h2 className={`text-[2.1rem] m-0 font-extrabold text-center md:text-left px-10 ${cormorantGaramond.className}`}> {props.h2} </h2>
                <p className={`text-[0.7rem] ml:10 text-center md:text-left px-10 ${workSans.className}`}> <em>{props.p1}</em></p>
                <p className={`text-[0.7rem] text-center md:text-left px-10 ${workSans.className}`}>{props.p2}</p>
                </div>
            </div>
          </div>)
        }
        {
          current === '/about' && (
            <div className='card lg:card-side'>
              <div className='body'>
                <div className='text'>
                  <h2 className={`text-[2.1rem] font-extrabold ${cormorantGaramond.className}`}>{props.h2}</h2>
                  <p className={`text-[0.7rem] ${workSans.className}`}>{props.p1} <br/> <br/> {props.p2} <br/> <br/> {props.p3} <br/> <br/> {props.p8} <br/> <br/> {props.p4} <br/> <br/> {props.p5} {props.p6} <br/> <br/> {props.p7} </p>
                </div>
              </div>
            </div>
          )
        }
        {
          current === '/experience' && (
            <div className='card lg:card-side'>
              <div className='body'>
                <div className="w-90">
                  <ul>
                    <li className="relative flex items-baseline gap-6 pb-5">
                      <div className="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" className="bi bi-circle-fill fill-gray-600" viewBox="0 0 16 16">
                          <circle cx="8" cy="8" r="8" />
                        </svg>
                      </div>
                      <div>
                        <p className={`expText ${workSans.className}`}><em>{props.p1}</em> • <b>Cognizant Technology Solutions</b></p>
                        <p className={`expText ${workSans.className}`}>{props.p3} <br/> {props.p4}</p>
                        <ul className='flex flex-wrap'>
                          <Buttons value={'React'}/>
                          <Buttons value={'CSS'}/>
                          <Buttons value={'Kotlin'}/>
                          <Buttons value={'Spring Boot'}/>
                          <Buttons value={'Java'}/>
                        </ul>
                      </div>
                    </li>
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
