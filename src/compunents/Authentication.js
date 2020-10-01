import React, { Component } from 'react'
import { connect } from 'react-redux'

class Authentication extends Component {

  render() {
    const { users } = this.props
    return (
      <div className='center'>
        <p>Page sign in to continue</p>
        <select>
          {Object.keys(users).map((key) => (
            <option value={key}>
              {users[key].id}
            </option>
          ))}
        </select>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  return { users: users }
}

export default connect(mapStateToProps)(Authentication)
