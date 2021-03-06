import React, { Component } from 'react'
import { connect } from 'react-redux'
import Questions from './Questions'
import {Redirect} from 'react-router-dom'

class Home extends Component {
  state = {
    answered: false
  }

  handleAnswered = (e) => {
    e.preventDefault()
    this.setState(prevState => ({
      answered: !prevState.answered
    }))
  }

  filterQuestionsIds = () => {
    return this.state.answered
      ? this.props.quesiontIds.filter((id) => Object.keys(this.props.users[this.props.authedUser].answers).includes(id))
      : this.props.quesiontIds.filter((id) => !Object.keys(this.props.users[this.props.authedUser].answers).includes(id))
  }

  renderQuestions = () => (
    <div>
      <button
        disabled={!this.state.answered}
        onClick={this.handleAnswered}
      >
        Unanswered Question
      </button>

      <button
        disabled={this.state.answered}
        onClick={this.handleAnswered}
      >
        Answered Question
      </button>

        <Questions ids={this.filterQuestionsIds()} />
    </div>
  )

  render() {
    return (
      <div>
        <h3 className="center">
          Your Timeline
        </h3>
        {this.props.authedUser !== null
          ? this.renderQuestions()
          : <Redirect to='/authentication' />
        }
      </div>
    )
  }
}

function mapStateToProps({ users, authedUser, questions }) {
  return {
    users: users,
    authedUser: authedUser,
    quesiontIds: Object.keys(questions)
      .sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(Home)
