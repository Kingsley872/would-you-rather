import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'
import { showLoading, hideLoading } from 'react-redux-loading'
import { addQuestionToUser, addAnswerToUser } from '../actions/users'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'

function answerQuestion ( authedUser, qid, answer ) {
  return {
    type: ANSWER_QUESTION,
    authedUser,
    qid,
    answer
  }
}
export function handleAnswerQuestion (qid, answer) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())
    dispatch(addAnswerToUser(authedUser, qid, answer))
    dispatch(answerQuestion(authedUser, qid, answer))

    return _saveQuestionAnswer({
      authedUser: authedUser,
      qid: qid,
      answer: answer
    }).then(() => dispatch(hideLoading()))
  }
}

function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function handleAddQuestion (optOne, optTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

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
