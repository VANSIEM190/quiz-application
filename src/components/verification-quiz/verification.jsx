import questions from '../tous le tableau quiz/quiz-tableau'
import Quiz from '../quiz/quiz'
import ErrorPage from '../erros page/Error-page'
import { useParams } from 'react-router-dom'

const VerificationQuiz = () => {
  const { type } = useParams()
  const questionType = questions[type]

  return questionType ? <Quiz questionsList={questionType} /> : <ErrorPage />
}

export default VerificationQuiz
