import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/home' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/authentication' activeClassName='active'>
              {this.props.authedUser === ''
                ? 'Login'
                : 'Logout'}
            </NavLink>
          </li>
          <li>
            <NavLink to='/loaderBoard' activeClassName='active'>
              LoaderBoard
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Nav)
