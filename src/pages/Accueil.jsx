import { useRef, useEffect } from 'react'
import Typed from 'typed.js'
import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

export default function Accueil() {
  const textRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: [
        'Smart Quiz',
        'Testez vos connaissances',
        'Testez vos connaissances avec des quiz variés et amusants.',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    })
    return () => {
      typed.destroy()
    }
  }, [])
  return (
    <>
      <div className="bg-gray-900 w-screen  h-screen overflow-hidden">
        <Navbar />
        <div className="w-screen h-full relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="bg relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 " />
          </div>

          <div className=" h-3/4 flex  items-center justify-center ">
            <div className=" w-3/4 ">
              <h2 className=" text-2xl font-semibold text-center tracking-tight mb-1 text-balance text-white sm:text-7xl delius-swash-caps-regular">
                <span ref={textRef}></span>
              </h2>
              <p className=" text-lg text-center font-medium text-pretty text-gray-400 sm:text-xl/8 delius-swash-caps-regular">
                SmarQuiz est une plateforme interactive qui vous permet de
                tester, apprendre et s&apos;amuser à travers des quiz variés .
                Que ce soit pour évoluer vos connaissances, relever des défis
                entre amis ou découvrir de nouveaux sujets SmartQuiz offre une
                expérience ludique et enrichissante.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/quiz/categories"
                  className="rounded-md bg-linear-to-tr from-[#ff80b5] to-[#9089fc] px-3.5 py-2.5 text-sm no-underline font-semibold text-white shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 delius-swash-caps-regular"
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-12 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div className=" bg relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
          </div>
        </div>
      </div>
    </>
  )
}
