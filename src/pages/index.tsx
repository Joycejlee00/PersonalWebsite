import { Inter, Oleo_Script } from 'next/font/google'
import Typewriter from 'typewriter-effect';
import { Footer } from '@/components/Footer';

const oleo_script = Oleo_Script({
  weight: '700',
  style: ['normal'],
  subsets: ['latin']
})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='main'>
      <h2 className={`typewriter ${oleo_script.className}`}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString('Hello World!')
            .pauseFor(2500)
            .start();
        }}
      />
      </h2>
      <div className="card lg:card-side bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Welcome ~ </h2>
          <p>Click the button to listen on Spotiwhy app. Click the button to listen on Spotiwhy app. Click the button to listen on Spotiwhy app. Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
}
