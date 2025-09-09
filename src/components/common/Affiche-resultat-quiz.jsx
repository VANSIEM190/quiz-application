import PropTypes from 'prop-types'

const AfficheResultatQuiz = ({ score, tailleTableau, reprendre }) => {
  const percentage = Math.round((score / tailleTableau) * 100)

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Quiz Terminé !
        </h2>
        <p className="text-gray-600">
          Félicitations pour avoir complété le quiz !
        </p>
      </div>

      <div className="mb-6">
        <div className="text-6xl font-bold text-blue-600 mb-2">{score}</div>
        <div className="text-gray-500">sur {tailleTableau} questions</div>
      </div>

      <div className="mb-6">
        <div className="text-2xl font-semibold text-gray-700 mb-2">
          {percentage}%
        </div>

        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>

      <div className="text-gray-600">
        {percentage >= 80 && (
          <p className="text-green-600 font-semibold">Excellent travail ! 🎉</p>
        )}
        {percentage >= 60 && percentage < 80 && (
          <p className="text-blue-600 font-semibold">Bon travail ! 👍</p>
        )}
        {percentage < 60 && (
          <p className="text-orange-600 font-semibold">
            Continuez à vous améliorer ! 💪
          </p>
        )}
      </div>
      <button
        type="button"
        className="bg-blue-600 text-white p-2 rounded mt-2 cursor-pointer"
        onClick={reprendre}
      >
        Reprendre
      </button>
    </div>
  )
}

AfficheResultatQuiz.propTypes = {
  score: PropTypes.number.isRequired,
  tailleTableau: PropTypes.number.isRequired,
  reprendre: PropTypes.func.isRequired,
}

export default AfficheResultatQuiz
