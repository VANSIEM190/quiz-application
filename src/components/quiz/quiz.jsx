import { useState } from 'react'
import Navbar from '../navbar/Navbar'
import PropTypes from 'prop-types'
import AfficheResultatQuiz from '../affiche-resultat-quiz/Affiche-resultat-quiz'
import Swal from 'sweetalert2'

const Quiz = ({ questionsList }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [isvisible, setIsVisible] = useState(true)

  const afficheMessage = (titleMessage, textMessage, iconMessage) => {
    Swal.fire({
      icon: iconMessage,
      title: titleMessage,
      text: textMessage,
    })
  }

  const handleOptionClick = (selectedOption) => {
    const currentQuestion = questionsList[currentQuestionIndex]
    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1)
      afficheMessage('Bonne réponse', 'Felicitation!', 'success')
    } else {
      afficheMessage(
        'Mauvaise réponse',
        `la bonne réponse était :  ${currentQuestion.answer}`,
        'error'
      )
    }

    const nextQuestionIndex = currentQuestionIndex + 1
    if (nextQuestionIndex < questionsList.length) {
      setCurrentQuestionIndex(nextQuestionIndex)
    } else {
      ;<AfficheResultatQuiz
        score={score + 1}
        tailleTableau={questionsList.length}
      />
      setIsVisible(false)
    }
  }

  const reprendreJeux = () => {
    setIsVisible(true)
    setCurrentQuestionIndex(0)
  }
  const currentQuestion = questionsList[currentQuestionIndex]

  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center ">
        {isvisible ? (
          <div className="container bg-white rounded py-5 max-sm:h-screen flex justify-center items-center flex-col">
            <div className="bg-hero-pattern bg-clip-text">
              <h3 className="text-lg text-transparent">SMARTQUIZ</h3>
            </div>
            <div className="flex justify-center items-center flex-col gap-3">
              <div className="bg-hero-pattern bg-clip-text text-center">
                <h3 className="text-lg text-transparent">
                  {currentQuestionIndex + 1}. {currentQuestion.question}
                </h3>
              </div>
              <div className=" w-4/5 flex flex-col gap-2">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={index}
                    type="button"
                    className="w-full bg-hero-pattern text-white font-semibold py-2 px-4 rounded"
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center gap-2">
            <AfficheResultatQuiz
              score={score + 1}
              tailleTableau={questionsList.length}
            />
            <button
              type="button"
              className="btn btn-primary"
              onClick={reprendreJeux}
            >
              reprendre
            </button>
          </div>
        )}
      </div>
    </>
  )
}

Quiz.propTypes = {
  questionsList: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.string).isRequired,
      answer: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Quiz
