export const RECEIVE_USERS = 'RECEIVE_USERS'
export const ADD_QUESTION_TO_USER = 'ADD_QUESTION_TO_USER'
export const ADD_ANSWER_TO_USER = 'ADD_ANSWER_TO_USER'


export function addQuestionToUser (author, id) {
  return {
    type: ADD_QUESTION_TO_USER,
    author,
    id,
  }
}

export function addAnswerToUser(author, qid, answer){
  return {
    type: ADD_ANSWER_TO_USER,
    author: author,
    qid: qid,
    answer: answer
  }
}

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
}
