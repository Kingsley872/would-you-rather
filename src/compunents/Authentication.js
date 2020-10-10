import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import { unSetAuthedUser } from '../actions/authedUser'

class Authentication extends Component {
  state = {
    value: this.props.authedUser === null ? 'empty' : this.props.authedUser,
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

  handleLogout = (e) => {
    this.props.dispatch(unSetAuthedUser(null))

    this.setState(() => ({
      value: 'empty'
    }))
  }

  render() {
    const { value, redirect } = this.state
    const { from } = this.props.location.state || { from: { pathname: '/'} }

    if(redirect === true){
      return <Redirect to={from} />
    }

    const { users, authedUser } = this.props

    return (
      <div className='center'>

        <div>
          <p>Page sign in to continue</p>
          <select
            defaultValue={value}
            onChange={this.handleOnChange}
          >

            <option value='empty'>
              Empty
            </option>

            {Object.keys(users).map((key) => (
              <option value={key} key={key}>
                {key}
              </option>
            ))}

          </select>
        </div>

        <button
          onClick={(e) => this.toParent(e, authedUser)}
          disabled={value === 'empty' || authedUser !== null}
        >
          Login
        </button>

        <button
          onClick={this.handleLogout}
          disabled={ authedUser === null}
        >
          Logout
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
