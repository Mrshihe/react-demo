import { ADD_PERSON } from '../constant'

export const addPersonAction = (person) => {
  return { type: ADD_PERSON, data: person }
}