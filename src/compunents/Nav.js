import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
  render() {
    const { authedUser } = this.props

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to='/add' activeClassName='active'>
              NewQuestion
            </NavLink>
          </li>

          <li>
            <NavLink to='/loaderBoard' activeClassName='active'>
              LoaderBoard
            </NavLink>
          </li>

          <li>
            <NavLink to='/authentication' activeClassName='active'>
              {authedUser === ''
                ? 'Login'
                : `Hollo ${authedUser} Logout`}
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
