import { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc, Timestamp } from 'firebase/firestore'
import { db, auth } from '../../services/firebaseConfig'
import Navbar from '../layout/Navbar'
import { toast } from 'sonner'

const regexValidation = /^[a-zA-Z0-9@-_]/
const regexValidationEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const validationSchema = Yup.object({
  nom: Yup.string()
    .min(3, 'le nom est trop court')
    .max(20, 'le nom est trop loong')
    .matches(regexValidation, "c'est nom est incorrect")
    .required('non est vide'),
  prenom: Yup.string()
    .min(3, 'le prénom est trop court')
    .max(20, 'le prénom est trop loong')
    .matches(regexValidation, "c'est prénom est incorrect")
    .required('prénon est vide'),
  email: Yup.string()
    .email('email invalide')
    .matches(regexValidationEmail, 'email  incorrect')
    .required('email est vide'),
  password: Yup.string()
    .min(3, 'le mot de passe est trop court')
    .max(20, 'le mot de passe est trop loong')
    .required(' mot de passe est vide'),
})

const champFormulaire = [
  {
    id: 'Nom',
    type: 'text',
    name: 'nom',
    autoComplete: 'username',
  },
  {
    id: 'Prenom',
    type: 'prenom',
    name: 'prenom',
    autoComplete: 'given-name',
  },
  {
    id: 'Email',
    type: 'email',
    name: 'email',
    autoComplete: 'email',
  },
  {
    id: 'Password',
    type: 'password',
    name: 'password',
    autoComplete: 'current-password',
  },
]

const initialValues = {
  nom: '',
  prenom: '',
  email: '',
  password: '',
}

const FormulaireInscription = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const route = '/quiz/categories'
  const timeOut = 1000

  const onSubmitForm = async (values, { resetForm, setSubmitting }) => {
    setIsLoading(true)

    try {
      // Créer l'utilisateur avec Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      )

      const user = userCredential.user

      // Ajout des informations de l'utilisateur dans Firestore
      const userDocRef = doc(db, 'users', user.uid)

      await setDoc(userDocRef, {
        nom: values.nom,
        prenom: values.prenom,
        email: values.email,
        userId: user.uid,
        timestamp: Timestamp.now(),
      })

      // Succès
      toast.success('inscription reussie')
      resetForm()
      setSubmitting(false)

      setTimeout(() => {
        navigate(route)
      }, timeOut)
    } catch (error) {
      toast.error(getErrorMessage(error.code))
      setSubmitting(false)
    } finally {
      setIsLoading(false)
    }
  }

  // Fonction pour traduire les codes d'erreur Firebase
  const getErrorMessage = (errorCode) => {
    switch (errorCode) {
      case 'auth/email-already-in-use':
        return 'Cet email est déjà utilisé par un autre compte'
      case 'auth/invalid-email':
        return "Format d'email invalide"
      case 'auth/weak-password':
        return 'Le mot de passe est trop faible (minimum 6 caractères)'
      case 'auth/operation-not-allowed':
        return "L'inscription par email/mot de passe n'est pas activée"
      case 'auth/network-request-failed':
        return 'Erreur de connexion réseau'
      default:
        return "Une erreur est survenue lors de l'inscription"
    }
  }
  return (
    <>
      <div className="bg-gray-900 min-h-screen pb-3">
        <Navbar />
        <div className="h-screen relative isolate px-6 pt-14 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-20  left-10 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="bg relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 " />
          </div>
          <div className="h-3/4 flex items-center flex-col justify-center sm:mx-auto sm:w-full sm:max-w-sm">
            <h1 className="text-2xl font-bold text-white text-center delius-swash-caps-regular ">
              Inscription
            </h1>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={onSubmitForm}
            >
              <Form className="space-y-3">
                <div>
                  {champFormulaire.map(({ id, type, name, autoComplete }) => (
                    <div key={id} className="mt-2">
                      <label
                        htmlFor={id}
                        className="text-white mb-1 delius-swash-caps-regular"
                      >
                        {name}
                      </label>
                      <Field
                        id={id}
                        name={name}
                        type={type}
                        required
                        autoComplete={autoComplete}
                        className=" w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2   sm:text-sm/6 delius-swash-caps-regular"
                      />
                      <ErrorMessage
                        name={name}
                        component="div"
                        className="text-red-600 text-sm font-medium mt-1 delius-swash-caps-regular"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`w-full  rounded px-3 py-1.5 text-sm/6 font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-400  delius-swash-caps-regular cursor-pointer ${
                      isLoading
                        ? 'bg-gray-400 cursor-not-allowed'
                        : 'bg-linear-to-tr from-[#ff80b5] to-[#9089fc]'
                    }`}
                  >
                    {isLoading ? 'Inscription en cours...' : "S'inscrire"}
                  </button>
                </div>
              </Form>
            </Formik>
            <p className="mt-5 text-center text-sm/6 text-gray-400 delius-swash-caps-regular">
              j&#39; ai déjà un compter?{' '}
              <Link
                to="/connexion"
                className="no-underline font-semibold bg-linear-to-tr from-[#ff80b5] to-[#9089fc] bg-clip-text text-transparent  delius-swash-caps-regular"
              >
                me connecter
              </Link>
            </p>
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

export default FormulaireInscription
