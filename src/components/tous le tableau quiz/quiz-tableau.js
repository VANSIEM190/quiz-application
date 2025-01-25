import {
  DomaineScolaire,
  DomaineCommerciale,
  DomaineSport,
  DomaineReligion,
  DomaineCinema,
} from './quizs'

const questions = {
  ...DomaineScolaire,
  ...DomaineCommerciale,
  ...DomaineSport,
  ...DomaineReligion,
  ...DomaineCinema,
}

export default questions
