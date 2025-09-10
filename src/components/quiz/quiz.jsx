import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../../services/firebaseConfig'
import AfficheResultatQuiz from '../common/Affiche-resultat-quiz'
import questions from '../../utils/questions/quizs'
import { useUser } from '../../context/UserProfilContext'

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [isvisible, setIsVisible] = useState(true)
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(null) // bonne réponse
  const [selectedOption, setSelectedOption] = useState(null) // option cliquée
  const { typeQuiz } = useParams()
  const questionsList = questions[typeQuiz]
  const currentQuestion = questionsList?.[currentQuestionIndex]
  const { userInformation } = useUser()

  // Vérification de sécurité pour éviter les erreurs en production
  if (
    !questionsList ||
    !Array.isArray(questionsList) ||
    questionsList.length === 0
  ) {
    return (
      <div className="flex justify-center items-center h-125">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Quiz non trouvé
          </h3>
          <p className="text-gray-600">
            Le quiz &quot;{typeQuiz}&quot; n&apos;existe pas ou est vide.
          </p>
        </div>
      </div>
    )
  }

  const resultatProgress = Math.floor(
    (currentQuestionIndex / questionsList.length) * 100
  )

  const handleOptionClick = (option) => {
    const currentQuestion = questionsList[currentQuestionIndex]
    setSelectedOption(option) // mémorise l'option choisie

    // Mise à jour du score avec une fonction callback pour éviter les problèmes de closure
    if (option === currentQuestion.answer) {
      setScore((prevScore) => prevScore + 1)
    }

    setIsCorrectAnswer(currentQuestion.answer) // garde la bonne réponse

    setTimeout(async () => {
      if (currentQuestionIndex < questionsList.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
        setIsCorrectAnswer(null)
        setSelectedOption(null)
      } else {
        setIsVisible(false)

        try {
          if (userInformation?.userId) {
            // Utiliser le score actuel + 1 si c'est la bonne réponse
            const finalScore =
              option === currentQuestion.answer ? score + 1 : score
            await updateUserScore(userInformation.userId, typeQuiz, finalScore)
          }
        } catch (err) {
          console.error('Erreur lors de la mise à jour du score:', err)
        }
      }
    }, 1000)
  }

  const reprendreJeux = () => {
    setIsVisible(true)
    setCurrentQuestionIndex(0)
    setScore(0)
    setIsCorrectAnswer(null)
    setSelectedOption(null)
  }

  async function updateUserScore(userId, quizName, newScore) {
    const userRef = doc(db, 'scores', userId)
    const snap = await getDoc(userRef)

    let scores = {}
    if (snap.exists()) {
      scores = snap.data()
    }
    scores[quizName] = { min: newScore, max: questionsList.length }
    // Extraire uniquement les scores numériques
    const quizScores = Object.fromEntries(
      Object.entries(scores).filter(
        ([, value]) =>
          typeof value === 'object' &&
          value !== null &&
          'min' in value &&
          'max' in value
      )
    )

    const totalMin = Object.values(quizScores).reduce(
      (sum, quiz) => sum + (Number(quiz.min) || 0),
      0
    )

    const totalMax = Object.values(quizScores).reduce(
      (sum, quiz) => sum + (Number(quiz.max) || 0),
      0
    )

    console.log(Object.keys(quizScores), quizScores.quizItems)

    await setDoc(
      userRef,
      {
        userId,
        userProfil: userInformation.initialsProfil,
        username: userInformation.nom,
        userFirstname: userInformation.prenom,
        quizItems: Object.keys(quizScores),
        ...quizScores,
        globalScore: totalMin,
        notesMax: totalMax,
        timestamp: serverTimestamp() || new Date(),
      },
      { merge: true }
    )
  }

  return (
    <div className="flex justify-center items-center h-125 delius-swash-caps-regular">
      {isvisible ? (
        <div className="w-[40%] bg-white rounded px-4 py-10 max-sm:h-max max-sm:w-max flex justify-center items-center flex-col">
          <div className="w-full p-3">
            <div className="w-full px-3 pb-1 flex justify-between items-center max-xs1:flex-col">
              <h5 className="text-sm text-gray-900">{typeQuiz}</h5>
              <span className="text-sm font-medium text-gray-900">
                Question {currentQuestionIndex + 1} / {questionsList.length}
              </span>
            </div>
            <div className="w-full h-3 bg-gray-200 rounded-md">
              <div
                className="bg-gray-900 h-3 rounded-md transition-all duration-300"
                style={{ width: `${resultatProgress}%` }}
              />
            </div>
            <div className="w-full flex justify-between items-center px-3 max-xs2:flex-col">
              <span className="text-sm font-medium text-gray-900">
                Score : {score}/{questionsList.length}
              </span>
              <span className="text-sm font-medium text-gray-900">
                {resultatProgress}% complete
              </span>
            </div>
          </div>

          <div className="w-full flex justify-center items-start flex-col gap-3 px-6">
            <div className="bg-hero-pattern bg-clip-text text-center">
              <h5 className="text-sm text-gray-900 font-semibold">
                {currentQuestion?.question || 'Question non disponible'}
              </h5>
            </div>
            <div className="w-full flex flex-col gap-2">
              {currentQuestion?.options?.map((option, index) => {
                let buttonColor = 'bg-gray-900' // couleur par défaut

                if (isCorrectAnswer) {
                  if (option === isCorrectAnswer) {
                    buttonColor = 'bg-green-500' // bonne réponse
                  } else if (option === selectedOption) {
                    buttonColor = 'bg-red-500' // mauvaise réponse choisie
                  }
                }

                return (
                  <button
                    key={index}
                    type="button"
                    className={`w-full text-white ${buttonColor} font-semibold py-2 px-4 rounded transition-colors duration-300 cursor-pointer disabled:cursor-not-allowed`}
                    onClick={() => handleOptionClick(option)}
                    disabled={!!isCorrectAnswer} // bloque après clic
                  >
                    {option}
                  </button>
                )
              }) || (
                <div className="text-center text-gray-500">
                  Aucune option disponible pour cette question.
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-2">
          <AfficheResultatQuiz
            score={score}
            tailleTableau={questionsList.length}
            reprendre={reprendreJeux}
          />
        </div>
      )}
    </div>
  )
}

export default Quiz
