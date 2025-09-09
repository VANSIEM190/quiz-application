import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { FaSignInAlt } from 'react-icons/fa'
import { useUser } from '../../context/UserProfilContext'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Quiz', href: '/quiz/categories' },
  { name: 'About', href: '/Apropos' },
  { name: 'Classement', href: '/Classement' },
  { name: 'DashBoard', href: '/DashBoard' },
]

const Navbar = () => {
  const { userInformation, loading } = useUser()
  const [open, setOpen] = useState(false)
  return (
    <nav className="relative  z-50 bg-gray-800/10 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              data-open={open ? '' : undefined}
              className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500"
            >
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <FaBars
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <FaTimes
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <h1 className="text-2xl font-bold text-white delius-swash-caps-regular">
                SQA
              </h1>
            </div>
            <div className="hidden sm:ml-6 sm:block ">
              <div className="flex space-x-4 delius-swash-caps-regular">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`
                  ${
                    item.current
                      ? 'bg-gray-950/50 text-white '
                      : 'text-gray-300 hover:bg-white/5 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  } `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {loading ? (
              <span className="delius-swash-caps-regular text-white">
                {' '}
                SQA loading...
              </span>
            ) : userInformation?.userId ? (
              <UserProfil />
            ) : (
              <Link
                to="/inscription"
                className="text-sm/6 font-semibold text-white  no-underline delius-swash-caps-regular "
              >
                <FaSignInAlt />
              </Link>
            )}
          </div>
        </div>
      </div>
      {open && (
        <div className="sm:hidden bg-gray-900">
          <div className="space-y-1 px-2 pt-2 pb-3 delius-swash-caps-regular">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  item.current
                    ? 'bg-gray-950/50 text-white'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

const UserProfil = () => {
  const { userInformation } = useUser()

  return (
    <>
      <div className="size-9 flex justify-center items-center rounded-full bg-gray-500 text-white  delius-swash-caps-regular ">
        {userInformation?.initialsProfil}
      </div>
    </>
  )
}

export default Navbar
