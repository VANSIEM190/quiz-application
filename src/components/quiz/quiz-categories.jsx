import { Link } from 'react-router-dom'
import OptionApp from '../../utils/listeCategoriesQuiz/listOptionsQuiz'

const QuizCategories = () => {
  return (
    <>
      <section className=" flex  flex-col items-center justify-center  ">
        <h1 className="text-center font-bold text-gray-200 text-lg mb-2 delius-swash-caps-regular">
          Section des Quizz
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-screen-xl  ">
          {OptionApp.map((option, index) => (
            <div
              key={index}
              className="bg-gray-900  flex flex-col justify-between  border border-gray-300 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={option.img}
                className="h-48 object-cover w-full"
                alt={option.description}
              />
              <div className=" flex flex-col p-4">
                <h6 className="font-bold text-gray-200 text-lg mb-2 text-center delius-swash-caps-regular">
                  {option.description}
                </h6>
                <p className="text-gray-300 text-sm text-center delius-swash-caps-regular">
                  {option.textedescriptif}
                </p>
              </div>
              <div className="p-4">
                <Link to={`${option.nomUrl}`}>
                  <button
                    type="button"
                    className="w-full  bg-linear-to-tr from-[#ff80b5] to-[#9089fc] text-white font-semibold py-2 px-4 rounded  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 delius-swash-caps-regular"
                  >
                    Start Quiz
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default QuizCategories
