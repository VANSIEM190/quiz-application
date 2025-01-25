import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Accueil = lazy(() => import('../page-accueille/Accueil'))
const QuizCategories = lazy(() => import('../quiz-categories/quiz-categories'))
const RooterOptionApp = lazy(() =>
  import('../rooter-option-app/rooter-option-app')
)
const VerificationQuiz = lazy(() => import('../verification-quiz/verification'))

const Rooter = () => {
  return (
    <Suspense
      fallback={
        <div className="w-screen h-screen flex justify-center items-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/quiz-catégories" element={<QuizCategories />} />
        <Route path="/quiz-catégories/:type" element={<RooterOptionApp />} />
        <Route
          path="/quiz-catégories/:type/:type"
          element={<VerificationQuiz />}
        />
      </Routes>
    </Suspense>
  )
}

export default Rooter
