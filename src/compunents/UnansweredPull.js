import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Avatar from './Avatar'
import { handleAnswerQuestion } from '../actions/questions'

class UnansweredPull extends Component {
  state = {
    result: '',
    toHome: false
  }

  handleOnChange = (e) => {
    const text = e.target.value
    this.setState(() => ({
      result: text,
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.result !== ''){
      this.props.dispatch(
        handleAnswerQuestion(this.props.question.id, this.state.result)
      )

      this.setState(() => ({
        result: '',
        toHome: true
      }))

    } else {
      alert("Pick one as your answer")
    }
  }

  render() {
    const { users, question } = this.props

    if(this.state.toHome === true) {
      return <Redirect to="/" />
    }

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

          <div onChange={this.handleOnChange}>
            <input
              type="radio"
              value="optionOne"
              name="options"
            />
            {question.optionOne.text}
            <input
              type="radio"
              value="optionTwo"
              name="options"
            />
            {question.optionTwo.text}
          </div>

        </div>

        <button onClick={this.handleSubmit}>
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
