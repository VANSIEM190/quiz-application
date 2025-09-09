import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../services/firebaseConfig'
import ResetPassword from './ResetPassword'
import { useNavigate } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import { toast, Toaster } from 'sonner'

const FormulaireConnexion = () => {
  const [isValue, setIsValue] = useState({ email: '', password: '' })
  const [isLoading, setIsLoading] = useState(false)
  const [showResetPassword, setShowResetPassword] = useState(false)
  const navigate = useNavigate()
  const route = '/quiz/categories'
  const timeOut = 1000

  const handleChange = (event) => {
    setIsValue({ ...isValue, [event.target.name]: event.target.value })
  }

  const connectUserAccount = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await signInWithEmailAndPassword(auth, isValue.email, isValue.password)
      toast.success('Connexion réussie ! Redirection en cours...')
      setTimeout(() => {
        navigate(route)
      }, timeOut)
    } catch {
      toast.error('email ou mot de passe incorrecte')
    } finally {
      setIsLoading(false)
    }
  }
  if (showResetPassword) {
    return <ResetPassword onBack={() => setShowResetPassword(false)} />
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
          <div className="flex h-3/4  flex-col justify-center px-6 py-12 lg:px-8  delius-swash-caps-regular">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">
                Connectez-vous à votre compte
              </h2>
            </div>

            <div className=" sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" onSubmit={connectUserAccount}>
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
                      onChange={handleChange}
                      value={isValue.email}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-100"
                    >
                      Password
                    </label>
                    <div className="text-sm">
                      <button
                        type="button"
                        onClick={() => setShowResetPassword(true)}
                        className="font-semibold bg-linear-to-tr from-[#ff80b5] to-[#9089fc] bg-clip-text text-transparent hover:underline"
                      >
                        Mot de passe oublié?
                      </button>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      autoComplete="current-password"
                      className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2  sm:text-sm/6"
                      onChange={handleChange}
                      value={isValue.password}
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
                    {isLoading ? 'connexion en cours...' : 'Se connecter'}
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

export default FormulaireConnexion
