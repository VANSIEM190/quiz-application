import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth, db } from '../services/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'
import { Toaster, toast } from 'sonner'
import { useUser } from '../context/UserProfilContext'
import formatDate from '../utils/formatDate'
import { AlertAutorisation, Loader } from '../components/common'
import Navbar from '../components/layout/Navbar'

const DashBoard = () => {
  const navigate = useNavigate()
  const { userInformation, loading } = useUser()
  const [quizSorte, setQuizSorte] = useState(null)
  const [informations, setInformations] = useState({})

  const handleSignOut = async () => {
    await signOut(auth)
    navigate('/')
  }

  useEffect(() => {
    if (!userInformation.userId) return
    const getInfoQuizUser = async () => {
      try {
        const infoRef = doc(db, 'scores', userInformation.userId)
        const infoSnap = await getDoc(infoRef)

        if (infoSnap.exists()) {
          setInformations(infoSnap.data())
        }
      } catch {
        toast.error('erreur lors de récuperation de données')
      }
    }

    getInfoQuizUser()
  }, [userInformation.userId])

  const percentage = Math.floor(
    (informations[quizSorte]?.min / informations[quizSorte]?.max) * 100
  )
  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="min-h-screen bg-gray-900">
        <Navbar />

        {/* Arrière-plan décoratif */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 translate-y-1/2 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-20 blur-3xl"></div>
        </div>
        {loading ? (
          <Loader />
        ) : userInformation?.userId ? (
          <div className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              {/* En-tête du Dashboard */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-white mb-2">
                  Tableau de Bord
                </h1>
                <p className="text-gray-400 text-lg">
                  Suivez vos performances et progressez dans vos quiz
                </p>
              </div>

              {/* Cartes de statistiques */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Total Quiz */}

                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">
                        Score Total Minimal
                      </p>
                      <p className="text-3xl font-bold">
                        {informations[quizSorte]?.min || 0}
                      </p>
                    </div>
                    <div className="bg-blue-400 bg-opacity-30 rounded-full p-3">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Quiz Complétés */}
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-medium">
                        Score Total Maximal
                      </p>
                      <p className="text-3xl font-bold">
                        {informations[quizSorte]?.max || 0}
                      </p>
                    </div>
                    <div className="bg-green-400 bg-opacity-30 rounded-full p-3">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Score Moyen */}
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">
                        Pourcentage
                      </p>
                      <p className="text-3xl font-bold">{percentage || 0} %</p>
                    </div>
                    <div className="bg-purple-400 bg-opacity-30 rounded-full p-3">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Série */}
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm font-medium">
                        total
                      </p>
                      <p className="text-3xl font-bold">
                        {informations?.globalScore || 0} /{' '}
                        {informations?.notesMax || 0}
                      </p>
                    </div>
                    <div className="bg-orange-400 bg-opacity-30 rounded-full p-3">
                      <svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Activité Récente */}
                <div className="lg:col-span-2">
                  <div className="bg-gray-800 rounded-xl p-6 ">
                    <h3 className="text-xl font-semibold text-white mb-6">
                      Activité Récente
                    </h3>
                    <div className="space-y-4">
                      {informations?.quizItems?.map((quiz, id) => (
                        <div
                          key={id}
                          className="flex items-center justify-between p-4 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors"
                          id={quiz}
                          role="button"
                          onClick={(e) => setQuizSorte(e.target.id)}
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                              <span className="text-white font-bold text-sm">
                                {id + 1}
                              </span>
                            </div>
                            <div>
                              <p className="text-white font-medium">{quiz}</p>
                              <p className="text-gray-400 text-sm">
                                {formatDate(informations?.timestamp)}
                              </p>
                            </div>
                          </div>
                          <div className="text-right  max-xs1:hidden">
                            <p className="text-white font-bold">
                              {informations[quiz]?.min} /{' '}
                              {informations[quiz]?.max}
                            </p>
                            <p className="text-gray-400 text-sm">Score</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions Rapides */}
                <div className="space-y-6">
                  {/* Actions Rapides */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Actions Rapides
                    </h3>
                    <div className="space-y-3">
                      <Link
                        to="/quiz/categories"
                        className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-4 rounded-lg text-center font-medium hover:from-blue-600 hover:to-purple-600 transition-all transform hover:scale-105"
                      >
                        🚀 Nouveau Quiz
                      </Link>
                      <Link
                        to="/Classement"
                        className="block w-full bg-gray-700 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-gray-600 transition-colors"
                      >
                        🏆 Voir le Classement
                      </Link>
                      <button
                        type="button"
                        className="w-full bg-gray-700 text-white py-3 px-4 rounded-lg text-center font-medium hover:bg-gray-600 transition-colors cursor-pointer"
                        onClick={handleSignOut}
                      >
                        Déconnexion
                      </button>
                    </div>
                  </div>

                  {/* Objectifs */}
                  <div className="bg-gray-800 rounded-xl p-6">
                    <h3 className="text-xl font-semibold text-white mb-4">
                      Objectifs
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">Quiz ce mois</span>
                          <span className="text-white">
                            {informations[quizSorte]?.min || 0} /{' '}
                            {informations[quizSorte]?.max || 0}
                          </span>
                        </div>
                        <div className="bg-gray-700 w-full rounded-full h-2">
                          <div
                            className={`${
                              percentage < 50 ? 'bg-red-500' : 'bg-green-500'
                            }  h-2 rounded-full`}
                            style={{ width: `${percentage || 0}%` }}
                          />
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-400">
                            {percentage < 50
                              ? 'continuer à vous améliorer'
                              : 'félicitation vous êtes fort'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <AlertAutorisation />
        )}
      </div>
    </>
  )
}

export default DashBoard
