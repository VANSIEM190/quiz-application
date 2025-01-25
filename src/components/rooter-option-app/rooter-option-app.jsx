import { useParams } from 'react-router-dom'
import ChoixQuiz from '../choix quiz/choix-quiz'
import ErrorPage from '../erros page/Error-page'
import * as DomainesQuiz from '../domaines/all-domaine'

const quizListMapping = {
  ...DomainesQuiz,
}

const RooterOptionApp = () => {
  const { type } = useParams()

  const quizListCategories = quizListMapping[type]

  return quizListCategories ? (
    <ChoixQuiz quizListCategories={quizListCategories} />
  ) : (
    <ErrorPage />
  )
}

export default RooterOptionApp
