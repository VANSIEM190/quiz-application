import { Link } from 'react-router-dom'
import OptionApp from '../sections-quiz/listOptionsQuiz'
const QuizCategories = () => {
  return (
    <>
      <section className="w-full min-h-screen flex justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-screen-xl">
          {OptionApp.map((option, index) => (
            <div
              key={index}
              className="card flex flex-col justify-between bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={option.img}
                className="h-48 object-cover w-full"
                alt={option.description}
              />
              <div className="card-body flex flex-col p-4">
                <h6 className="font-bold text-lg mb-2 text-center">
                  {option.description}
                </h6>
                <p className="text-gray-600 text-sm text-center">
                  {option.textedescriptif}
                </p>
              </div>
              <div className="p-4">
                <Link to={`/quiz-catégories/${option.nomUrl}`}>
                  <button
                    type="button"
                    className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
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
