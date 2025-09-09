import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import {
  FormulaireConnexion,
  FormulaireInscription,
} from '../components/formulaire'
import { Propos, ErrorPage, QuizPage } from '../pages'
import { Loader } from '../components/common'

// import avec chargement
const Classement = lazy(() => import('../pages/Classement'))
const DashBoard = lazy(() => import('../pages/DashBoard'))
const Accueil = lazy(() => import('../pages/Accueil'))

const Rooter = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/Apropos" element={<Propos />} />
        <Route path="/Classement" element={<Classement />} />
        <Route path="/DashBoard" element={<DashBoard />} />
        <Route path="/inscription" element={<FormulaireInscription />} />
        <Route path="/connexion" element={<FormulaireConnexion />} />
        <Route path="/quiz/*" element={<QuizPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  )
}

export default Rooter
