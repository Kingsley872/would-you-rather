import { _saveQuestion } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addQuestionToUser } from '../actions/users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (optOne, optTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading)
    return _saveQuestion({
      optionOneText: optOne,
      optionTwoText: optTwo,
      author: authedUser,
    }).then((question) => {
        dispatch(addQuestion(question))
        dispatch(addQuestionToUser(question.author, question.id))
      })
      .then(() => dispatch(hideLoading()))
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}
