import * as DomaineScolaire from './domain scolaire/all-quiz-domaine-scolaire'
import * as DomaineCommerciale from './domaine commercial/all-quiz-domaine-commersiale'
import * as DomaineSport from './domaine sport/all-quiz-domaine-sport'
import * as DomaineReligion from './domaine religion/all-quiz-religion'
import * as DomaineCinema from './domaine cinema/all-quiz-cinema'

const questions = {
  ...DomaineScolaire,
  ...DomaineCommerciale,
  ...DomaineSport,
  ...DomaineReligion,
  ...DomaineCinema,
}

export default questions
