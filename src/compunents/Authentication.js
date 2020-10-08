import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Authentication extends Component {
  state = {
    value: '',
    redirect: false
  }

  handleOnChange = (e) => {
    e.preventDefault()
    this.setState({ value: e.target.value })
  }

  toParent = (e, id) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.value))

    this.setState(() => ({
      redirect: true
    }))
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/'} }

    if(this.state.redirect === true){
      return <Redirect to={from} />
    }

    const { users, authedUser } = this.props

    return (
      <div className='center'>

        <div>
          <p>Page sign in to continue</p>
          <select defaultValue={authedUser} onChange={this.handleOnChange}>
            <option value="">
              Logout
            </option>
            {Object.keys(users).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}
          </select>
        </div>

        <button onClick={(e) => this.toParent(e, authedUser)}>
          Login
        </button>
      </div>
    )
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users: users,
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Authentication)
