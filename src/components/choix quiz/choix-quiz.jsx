import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import PropTypes from 'prop-types'
import Navbar from '../navbar/Navbar'

const ChoixQuiz = ({ quizListCategories }) => {
  const { type } = useParams()

  return (
    <>
      <Navbar />
      <section className="w-auto h-max flex justify-center items-center mt-5 max-sm:mt-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 max-w-screen-xl">
          {quizListCategories.map((quizDomaine, index) => (
            <div
              key={index}
              className="card flex flex-col justify-between bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={quizDomaine.img}
                className="h-48 object-cover w-full"
                alt={quizDomaine.quiz}
              />
              <div className="card-body flex flex-col p-4">
                <h6 className="font-bold text-lg mb-2 text-center">
                  {quizDomaine.quiz}
                </h6>
                <p className="text-gray-600 text-sm text-center">
                  {quizDomaine.texteDescriptif}
                </p>
              </div>
              <div className="p-4">
                <Link to={`/quiz-catégories/${type}/${quizDomaine.lien}`}>
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

ChoixQuiz.propTypes = {
  quizListCategories: PropTypes.arrayOf(
    PropTypes.shape({
      quiz: PropTypes.string.isRequired,
      texteDescriptif: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      lien: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ChoixQuiz
