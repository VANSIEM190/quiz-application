import { useEffect, useRef } from 'react'
import Typed from 'typed.js'
import { Link } from 'react-router-dom'

const Accueil = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Welcome to SMARTQUIZ',
        'Increase Your Knowledge with Our Quiz Series',
        'In the field of',
        'school',
        'commercial',
      ],
      typeSpeed: 50,
      backSpeed: 25,
      loop: true,
      backDelay: 500,
      startDelay: 500,
    })
    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <div className="w-screen h-screen">
        <section className="w-screen h-screen flex justify-center items-center ">
          <div className="w-full h-max flex flex-col items-center justify-center gap-2">
            <h1 className="font-serif text-3xl text-red-400 max-sm2:text-xl">
              SMARTQUIZ
            </h1>
            <div className="flex justify-center items-center text-red-400 font-serif">
              <h3 ref={typedRef} className="font-serif text-lg"></h3>
            </div>
            <div className="bg-red-400 text-white w-2/4 rounded-bl-3xl p-2 max-sm2:w-5/6">
              <p>
                Que tu sois passionné de culture générale ou simplement curieux
                de tester tes connaissances SMARTQUIZ est fait pour toi...
              </p>
            </div>
            <Link to="/quiz-catégories">
              <button
                type="button"
                className="w-full bg-red-400 text-white font-semibold py-2 px-4 rounded hover:bg-red-600 transition duration-300"
              >
                Start Quiz
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}

export default Accueil
