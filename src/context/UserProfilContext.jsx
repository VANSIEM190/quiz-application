import { createContext, useContext, useState, useEffect } from 'react'
import { db, auth } from '../services/firebaseConfig'
import { getDoc, doc } from 'firebase/firestore'
import { onAuthStateChanged } from 'firebase/auth'
import PropTypes from 'prop-types'

const userContext = createContext()

const UserProvider = ({ children }) => {
  const [userInformation, setUserInformation] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        try {
          const docRef = doc(db, 'users', user.uid)
          const userDoc = await getDoc(docRef)
          if (userDoc.exists()) {
            const data = userDoc.data()
            const initials = `${data.prenom.charAt(0)} ${data.nom.charAt(
              0
            )}`.toUpperCase()
            setUserInformation({
              userId: user.uid,
              nom: data.nom,
              prenom: data.prenom,
              initialsProfil: initials,
            })
            setLoading(false)
          } else {
            setError('utilisateur non trouver dans la base de données')
            setLoading(false)
            setUserInformation('')
          }
        } catch (error) {
          setError(error.message)
        }
      } else {
        setError('')
        setLoading(false)
        setUserInformation('')
      }
    })

    return () => unSubscribe()
  }, [])

  return (
    <userContext.Provider value={{ userInformation, loading, error }}>
      {children}
    </userContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

const useUser = () => useContext(userContext)

export { UserProvider, useUser }
