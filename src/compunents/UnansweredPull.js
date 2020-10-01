import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class UnansweredPull extends Component {

  render() {
    const { users, question } = this.props
    const avatar = users[question.author].avatarURL
    return(
      <div className='center'>
        <h4>{users[question.author].name} asks: </h4>
        <Avatar
          avatar={avatar}
          auther={question.author}
        />

        <div className="question-info">
          <h5>Would you rather</h5>
          <p>{question.optionOne.text}</p>
          <p>{question.optionTwo.text}</p>
        </div>

        <button>
          Submit
        </button>

      </div>
    )
  }
}

function mapStateToProps({ users, questions }, {id}) {
  return {
    users: users,
    question: questions[id]
  }
}

export default connect(mapStateToProps)(UnansweredPull)
