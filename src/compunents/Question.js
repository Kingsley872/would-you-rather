import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import { withRouter } from 'react-router-dom'

class Question extends Component {
  state = {
    pull: ''
  }

  toParent = (e) => {
    e.preventDefault()
    let temp = ''
    if(this.props.answered){
      temp = `/answered-pull/${this.props.id}`
      this.props.history.push(temp)
    } else {
      temp = `/unanswered-pull/${this.props.id}`
      this.props.history.push(temp)
    }

    this.setState(() => ({
      pull: temp
    }))
  }

  render() {
    const { users, authedUser, question, id } = this.props
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
            onClick={this.toParent}
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
    question,
    id,
    answered
  }
}

export default withRouter(connect(mapStateToProps)(Question))
