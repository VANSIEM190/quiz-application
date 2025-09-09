import { Route, Routes } from 'react-router-dom'
import { ChoixQuiz, QuizCategories, Quiz } from '../components/quiz'
import Navbar from '../components/layout/Navbar.jsx'
const QuizPage = () => {
  return (
    <>
      <div className=" bg-gray-900  min-h-screen ">
        <Navbar />
        <div className=" relative isolate px-6 pt-14 lg:px-8 ">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="bg relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 " />
          </div>
          <Routes>
            <Route path="/categories" element={<QuizCategories />} />
            <Route path="/categories/:type" element={<ChoixQuiz />} />
            <Route path="/categories/:type/:typeQuiz" element={<Quiz />} />
          </Routes>
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

export default QuizPage
