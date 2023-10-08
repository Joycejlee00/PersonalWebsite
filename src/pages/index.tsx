import { Inter, DM_Serif_Display, Cormorant_Garamond, Work_Sans} from 'next/font/google'
import Typewriter from 'typewriter-effect';
import { Footer } from '@/components/Footer'
import { Avatar } from '@/components/Avatar';

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

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='main'>
        <h2 className={`typewriter ${dmSerifDisplay.className}`}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('Hello World!')
              .pauseFor(2500)
              .start();
          }}
        />
        </h2>
        <div className="card lg:card-side">
          <div className="card-body">
            <Avatar/>
            <div className='text'>
              <h2 className={`text-[2.5rem] m-0 font-extrabold ${cormorantGaramond.className}`}>Joyce Lee</h2>
              <p className={`${workSans.className}`}> <em>Software Developer</em></p>
              <p className={`${workSans.className}`}>Welcome to my personal website!</p>
            </div>
          </div>
        </div>
        <Footer/>
    </main>
  )
}
