import { useNavigate } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'

const Propos = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="bg-gray-900 min-h-screen ">
        <Navbar />
        <div className=" h-full relative isolate px-3 pt-2 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div className="bg relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75 " />
          </div>

          <div className=" flex flex-col justify-center items-center gap-6 h-[85%] px-4">
            <h1 className="text-center font-bold text-gray-200 text-3xl mb-6 delius-swash-caps-regular">
              À propos de Smart Quiz App
            </h1>
            <div className="max-w-4xl text-gray-300 text-base leading-relaxed space-y-6">
              <div className="text-center mb-8">
                <p className="text-xl text-gray-200 font-semibold">
                  Découvrez l&#39;apprentissage d&#39;une nouvelle façon !
                </p>
              </div>

              <p>
                Bienvenue sur <strong>Smart Quiz App (SQA)</strong>, la
                plateforme révolutionnaire qui transforme l&#39;apprentissage en
                une expérience captivante et enrichissante. Notre mission est de
                démocratiser l&#39;accès au savoir en proposant une méthode
                d&#39;apprentissage ludique, interactive et accessible à tous.
              </p>

              <p>
                Dans un monde où l&#39;information est omniprésente, nous
                croyons fermement que la façon d&#39;apprendre est tout aussi
                importante que ce que l&#39;on apprend. C&#39;est pourquoi nous
                avons conçu Smart Quiz App comme un écosystème
                d&#39;apprentissage moderne qui s&#39;adapte à votre rythme et à
                vos préférences.
              </p>

              <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-4">
                  🎯 Notre Vision
                </h3>
                <p>
                  Créer une communauté mondiale d&#39;apprenants passionnés où
                  chaque question posée devient une opportunité de grandir, où
                  chaque défi relevé renforce la confiance en soi, et où
                  l&#39;apprentissage devient un plaisir quotidien plutôt
                  qu&#39;une contrainte.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    🌟 Ce que nous proposons :
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      <strong>Quiz multithématiques :</strong> Sciences,
                      Histoire, Sport, Cinéma, Religion, Commerce et bien plus
                    </li>
                    <li>
                      <strong>Niveaux adaptatifs :</strong> Des questions pour
                      tous les niveaux d&#39;expertise
                    </li>
                    <li>
                      <strong>Suivi personnalisé :</strong> Analysez vos
                      performances et identifiez vos points forts
                    </li>
                    <li>
                      <strong>Interface intuitive :</strong> Design moderne et
                      navigation fluide
                    </li>
                    <li>
                      <strong>Défis quotidiens :</strong> Stimulez votre
                      curiosité avec de nouveaux contenus
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">
                    🚀 Pourquoi choisir SQA ?
                  </h3>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>
                      <strong>Apprentissage efficace :</strong> Méthode
                      scientifiquement prouvée par la répétition espacée
                    </li>
                    <li>
                      <strong>Flexibilité totale :</strong> Apprenez quand vous
                      voulez, où vous voulez
                    </li>
                    <li>
                      <strong>Communauté active :</strong> Partagez vos succès
                      et progressez ensemble
                    </li>
                    <li>
                      <strong>Contenu vérifié :</strong> Questions élaborées par
                      des experts dans chaque domaine
                    </li>
                    <li>
                      <strong>Évolution continue :</strong> Nouvelles
                      fonctionnalités et contenus régulièrement ajoutés
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-80 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-white mb-3">
                  💡 Notre Philosophie
                </h3>
                <p>
                  Nous pensons que chaque individu possède un potentiel
                  d&#39;apprentissage illimité. Notre rôle n&#39;est pas
                  seulement de poser des questions, mais de créer un
                  environnement où la curiosité s&#39;épanouit, où l&#39;erreur
                  devient une étape vers la maîtrise, et où chaque utilisateur
                  peut découvrir ses passions cachées.
                </p>
              </div>

              <p>
                Que vous soyez étudiant préparant un examen, professionnel
                souhaitant enrichir ses connaissances, parent voulant
                accompagner ses enfants, ou simplement curieux de nature, Smart
                Quiz App s&#39;adapte à vos besoins et vous accompagne dans
                votre parcours d&#39;apprentissage.
              </p>

              <p className="text-center text-lg font-semibold text-blue-300">
                Rejoignez-nous dans cette aventure extraordinaire où apprendre
                rime avec plaisir !
              </p>

              <div className="text-center pt-6">
                <button
                  type="button"
                  className="bg-linear-to-tr from-[#ff80b5] to-[#9089fc] text-white font-semibold py-3 px-8  mb-1 rounded-full cursor-pointer   transition duration-300 transform hover:scale-105 shadow-lg"
                  onClick={() => navigate(-1)}
                >
                  ← Retour à l&#39;accueil
                </button>
              </div>
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

export default Propos
