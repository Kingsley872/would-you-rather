import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'
import { withRouter } from 'react-router-dom'

class Questions extends Component {

  toParent = (e, id) => {
    e.preventDefault()
    this.props.history.push(`/questions/${id}`)
  }

  render() {
    const { users, questions, ids } = this.props

    return (
      <div>
        <ul className='home-list'>
          {ids.map((id) => (
            <li key={id}>
              <div classs="question">
                <h4>{users[questions[id].author].name} asks</h4>

                <Avatar
                  avatar={users[questions[id].author].avatarURL}
                  auther={questions[id].auther}
                />

                <div className="question-info">
                  <h5>Would you rather</h5>
                  <p>{questions[id].optionOne.text.substring(0, 10)}...</p>
                  <button
                    className='btn'
                    onClick={(e) => this.toParent(e, id)}
                  >
                    View pull
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ authedUser, users, questions }, { ids }) {
  return {
    users,
    authedUser,
    questions,
    ids,
  }
}

export default withRouter(connect(mapStateToProps)(Questions))
