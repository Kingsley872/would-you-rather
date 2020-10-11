import React from 'react'
import { connect } from 'react-redux'
import UnansweredPull from './UnansweredPull'
import AnsweredPull from './AnsweredPull'
import NotFoundPage from './NotFoundPage'

const Question = (props) => {
  const { authedUser, users, questions, id } = props

  const vaildId = Object.keys(questions).includes(id)
  if(!vaildId){
    return <NotFoundPage />
  }

  const answered = Object.keys(users[authedUser].answers).includes(id)

  return (
    <div>
      {answered
        ? <AnsweredPull id={id} />
        : <UnansweredPull id={id} />}
    </div>
  )
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const {question_id} = props.match.params
  return{
    authedUser: authedUser,
    users: users,
    questions: questions,
    id: question_id,
  }
}

export default connect(mapStateToProps)(Question)
