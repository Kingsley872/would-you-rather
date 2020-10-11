import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import Nav from './Nav'
import Home from './Home'
import Authentication from './Authentication'
import LoaderBoard from './LoaderBoard'
import NewQuestion from './NewQuestion'
import NotFoundPage from './NotFoundPage'
import Question from './Question'

class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render(){
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <h3 className='center'>React App Would You Ranther</h3>
            <Nav />
            <hr />
            {
               <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/authentication' component={Authentication} />
                  <Route path='/questions/:question_id' component={Question} />
                  <Route path='/loaderboard' component={LoaderBoard} />
                  <Route path='/add' component={NewQuestion} />
                  <Route path='*' component={NotFoundPage} />
                </Switch>}
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
