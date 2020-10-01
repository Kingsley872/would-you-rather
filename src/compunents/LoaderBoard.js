import React, { Component } from 'react'
import { connect } from 'react-redux'
import Avatar from './Avatar'


class LoaderBoard extends Component {
  render() {
    const { users, questions, sortedUserIds } = this.props
    return(
      <div className='center'>
        <ul>
          {sortedUserIds.map(id =>
            <li key={id}>

              <h3>{users[id].name}</h3>

              <Avatar
                avatar={users[id].avatarURL}
                auther={users[id]}
              />

              <p>Answered questions {Object.keys(users[id].answers).length}</p>
              <p>Created questions {users[id].questions.length}</p>
              <h4>
                Score {Object.keys(users[id].answers).length + users[id].questions.length}
              </h4>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps({ users, questions }) {
  return {
    users: users,
    questions: questions,
    sortedUserIds: Object.keys(users)
      .sort((a, b) => (Object.keys(users[b].answers).length + users[b].questions.length) -
                      (Object.keys(users[a].answers).length + users[a].questions.length))
  }
}

export default connect(mapStateToProps)(LoaderBoard)
