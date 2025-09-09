import { useState } from 'react'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'
import Navbar from '../layout/Navbar'
import PropTypes from 'prop-types'
import { Toaster, toast } from 'sonner'

const ResetPassword = ({ onBack }) => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleResetPassword = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    if (email)
      try {
        await sendPasswordResetEmail(auth, email)
        toast.success(
          'Un email de réinitialisation a été envoyé à votre adresse email.'
        )
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            toast.error('Aucun compte trouvé avec cette adresse email.')
            break
          case 'auth/invalid-email':
            toast.error('Adresse email invalide.')
            break
          case 'auth/too-many-requests':
            toast.error('Trop de tentatives. Veuillez réessayer plus tard.')
            break
          default:
            toast.error('Une erreur est survenue. Veuillez réessayer.')
        }
      } finally {
        setIsLoading(false)
      }
  }

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <div className="h-screen relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-20  left-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="bg relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 " />
          </div>
          <div className="flex h-3/4 flex-col justify-center px-6 py-12 lg:px-8  delius-swash-caps-regular">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                Réinitialiser le mot de passe
              </h2>
              <p className="mt-2 text-center text-sm text-gray-300">
                Entrez votre adresse email pour recevoir un lien de
                réinitialisation
              </p>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={handleResetPassword}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-100"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full  rounded px-3 py-1.5 text-sm/6 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400 cursor-pointer ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-linear-to-tr from-[#ff80b5] to-[#9089fc]'
                    }`}
                  >
                    {isLoading
                      ? 'Envoi en cours...'
                      : 'Envoyer le lien de réinitialisation'}
                  </button>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={onBack}
                    className="text-sm font-semibold bg-linear-to-tr from-[#ff80b5] to-[#9089fc] bg-clip-text text-transparent hover:underline"
                  >
                    Retour à la connexion
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-12 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div className=" bg relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75" />
          </div>
        </div>
      </div>
    </>
  )
}

ResetPassword.propTypes = {
  onBack: PropTypes.func.isRequired,
}

export default ResetPassword
