import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'
import { Link, withRouter } from 'react-router-dom'

class Authentication extends Component {
  state = {
    value: '',
    toHome: false
  }

  handleOnChange = (e) => {
    e.preventDefault()
    this.setState({ value: e.target.value })
  }

  handleOnClick = (e) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.value))
    this.setState({ toHome: true})
  }

  toParent = (e, id) => {
    e.preventDefault()
    this.props.dispatch(setAuthedUser(this.state.value))
    this.props.history.push(`/home`)
  }

  render() {
    const { users } = this.props
    if(this.state.toHome === true){
      return <Redirect to="/home" />
    }

    return (
      <div className='center'>

        <div>
          <p>Page sign in to continue</p>
          <select defaultValue={this.props.authedUser} onChange={this.handleOnChange}>
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

      <Link to={`/home`} >
        <button onClick={(e) => this.toParent(e, this.props.authedUser)}>
          Login
        </button>

      </Link>
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

export default withRouter(connect(mapStateToProps)(Authentication))
