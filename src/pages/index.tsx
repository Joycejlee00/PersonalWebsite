import { Inter, Oleo_Script } from 'next/font/google'

const oleo_script = Oleo_Script({
  weight: '700',
  style: ['normal'],
  subsets: ['latin']
})

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className=''>
      <h1 className={oleo_script.className}>Hello World</h1>
      <div className="card lg:card-side bg-white shadow-xl">
        <div className="card-body">
          <h2 className="card-title">New album is released!</h2>
          <p>Click the button to listen on Spotiwhy app.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Listen</button>
          </div>
        </div>
      </div>
    </main>
  )
}
