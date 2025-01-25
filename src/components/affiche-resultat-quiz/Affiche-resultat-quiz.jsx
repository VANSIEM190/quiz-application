import PropTypes from 'prop-types'

const AfficheResultatQuiz = ({ score, tailleTableau }) => {
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Voir le Résultat
      </button>

      <div
        className="modal fade "
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-hero-pattern bg-clip-text">
              <h1
                className="modal-title fs-5 text-transparent"
                id="staticBackdropLabel"
              >
                SMARTQUIZ
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>
                Félicitations pour avoir complété le quiz ! Voici vos résultats
                :
              </p>
              <p>
                Votre score est : {score} / {tailleTableau}
              </p>
              <p>
                Merci d&#039;avoir participé à notre quiz. Nous espérons que
                vous avez trouvé cela instructif et amusant !
              </p>
            </div>
            <div className="modal-footer "></div>
            <button
              type="button"
              className="btn bg-hero-pattern w-2/4 self-center mb-2"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

AfficheResultatQuiz.propTypes = {
  score: PropTypes.number.isRequired,
  tailleTableau: PropTypes.number.isRequired,
}

export default AfficheResultatQuiz
