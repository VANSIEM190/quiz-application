import { useState, useEffect } from 'react'
import { useUser } from '../context/UserProfilContext'
import { db } from '../services/firebaseConfig'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'
import { Toaster, toast } from 'sonner'
import Navbar from '../components/layout/Navbar'
import { AlertAutorisation, Loader } from '../components/common'
import formatDate from '../utils/formatDate'

const Classement = () => {
  const { userInformation, loading } = useUser()
  const [users, setUsers] = useState([])

  useEffect(() => {
    if (!userInformation?.userId) return

    const scoresRef = query(
      collection(db, 'scores'),
      orderBy('globalScore', 'desc')
    )

    const unsubscribe = onSnapshot(
      scoresRef,
      (snapshot) => {
        const userScores = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setUsers(userScores)
      },
      () => {
        toast.error('erreur lors de récuperation des utilisateurs')
      }
    )

    return () => unsubscribe()
  }, [userInformation])

  return (
    <>
      <Toaster position="top-right" richColors />
      <div className="bg-gray-900 min-h-screen">
        <Navbar />

        <div className="relative isolate px-6 pt-14 lg:px-8 ">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="bg relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 " />
          </div>
          {loading ? (
            <Loader />
          ) : userInformation?.userId ? (
            <ul
              role="list"
              className="divide-y divide-white/5 delius-swash-caps-regular"
            >
              {users.map(
                ({
                  userProfil,
                  username,
                  userFirstname,
                  globalScore,
                  userId,
                  notesMax,
                  timestamp,
                }) => (
                  <li
                    key={userId}
                    className="flex justify-between gap-x-6 py-5"
                  >
                    <div className="flex min-w-0 gap-x-4">
                      <div className="size-10 flex justify-center items-center rounded-full text-white font-semibold bg-gray-500 outline -outline-offset-1 outline-white/10">
                        {userProfil}
                      </div>
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm/6 font-semibold text-white">
                          {`${userFirstname} ${username}`.toUpperCase()}
                        </p>
                        <p className="text-xs/5  text-gray-400">
                          {formatDate(timestamp)}
                        </p>
                      </div>
                    </div>
                    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                      <p className="text-sm/6 text-white">Rôle : Admin</p>
                      <div className="mt-1 flex items-center gap-x-1.5">
                        <p className="text-xs/5 text-gray-400">
                          Score global : {globalScore || 0}
                        </p>
                      </div>
                      <p className="text-sm/6  text-white">
                        état :{' '}
                        {globalScore < notesMax / 2
                          ? 'Améliorer vous vous êtes faible'
                          : 'félication vous êtes fort'}
                      </p>
                    </div>
                    <div className="max-sm:block hidden">
                      <p className="text-xs/5 text-gray-400">
                        Score : {globalScore || 0}
                      </p>
                    </div>
                  </li>
                )
              )}
            </ul>
          ) : (
            <AlertAutorisation />
          )}
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

export default Classement
