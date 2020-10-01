import React, { Component } from 'react'
import { connect } from 'react-redux'
import UnansweredPull from './UnansweredPull'
import AnsweredPull from './AnsweredPull'
import Avatar from './Avatar'

class Question extends Component {
  // handleViewPull = (e) => {
  //   e.preventDefault()
  // }

  render() {
    const { users, authedUser, question } = this.props
    const avatar = users[question.author].avatarURL

    return (
      <div classs="question">
        <h4>{users[question.author].name} asks</h4>

        <Avatar
          avatar={avatar}
          auther={question.auther}
        />

        <div className="question-info">
          <h5>Would you rather</h5>
          <p>{question.optionOne.text.substring(0, 10)}...</p>
          <button
            className='btn'
            onClick={this.handleViewPull}
          >
            View pull
          </button>
        </div>

      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { id, answered}) {
  const question = questions[id]
  return {
    users,
    authedUser,
    question
  }
}

export default connect(mapStateToProps)(Question)
