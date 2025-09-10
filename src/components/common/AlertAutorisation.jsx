import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const AlertAutorisation = () => {
  const [open, setOpen] = useState(true)
  const navigate = useNavigate()
  return (
    <div>
      <dialog open={open} onClose={setOpen} className="relative z-10">
        <div className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start delius-swash-caps-regular">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-500/10 sm:mx-0 sm:size-10">
                    <FaExclamationTriangle size={24} color="red" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-base font-semibold text-white">
                      Autorisation
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-400">
                        Vous n&apos;êtes pas autorisé à accéder à cette page.
                        Veuillez vous connecter pour accéder à cette page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6 delius-swash-caps-regular">
                <button
                  type="button"
                  onClick={() => navigate('/connexion')}
                  className="inline-flex w-full justify-center rounded-md bg-red-500 px-3 py-2 text-sm font-semibold text-white hover:bg-red-400 sm:ml-3 sm:w-auto cursor-pointer"
                >
                  Se connecter
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => navigate('/')}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white/10 px-3 py-2 text-sm font-semibold text-white inset-ring inset-ring-white/5 hover:bg-white/20 sm:mt-0 sm:w-auto cursor-pointer"
                >
                  Annuler
                </button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default AlertAutorisation
