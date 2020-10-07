import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'

class AnsweredPull extends Component {
  render() {
    const { users, question, myVote } = this.props
    const avatar = users[question.author].avatarURL
    const opOneVotes = question.optionOne.votes.length
    const opTwoVotes = question.optionTwo.votes.length
    const totalVotes = opOneVotes + opTwoVotes

    return(
      <div className='center'>
        <h4>Asked by {users[question.author].name}</h4>
        <Avatar
          avatar={avatar}
          auther={question.author}
        />

        <div className="question-info">
          <h5>Results</h5>
          <div>
            <p>{question.optionOne.text}</p>
            <p>{parseFloat(opOneVotes/totalVotes*100).toFixed(2)}%</p>
            <p>{opOneVotes} out of {totalVotes}</p>
          </div>
          <div>
            <p>{question.optionTwo.text}</p>
            <p>{parseFloat(opTwoVotes/totalVotes*100).toFixed(2)}%</p>
            <p>{opTwoVotes} out of {totalVotes}</p>
            <p>My Vote is {myVote}</p>
          </div>
        </div>

      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, props) {
  const { id } = props.match.params
  const myVote = users[authedUser].answers[id]
  
  return {
    users: users,
    question: questions[id],
    myVote: myVote
  }
}

export default connect(mapStateToProps)(AnsweredPull)
