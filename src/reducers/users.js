import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION_TO_USER } from '../actions/users'

export default function users (state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }

    case ADD_QUESTION_TO_USER:
      const allQuestions = state[action.author].questions.concat([action.id])

      return {
        ...state,
        [action.author]: {
          ...state[action.author],
          questions: allQuestions
        }
      }

    default:
      return state
  }
}
