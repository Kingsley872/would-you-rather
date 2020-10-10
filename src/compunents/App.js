import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route , Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading'

import Nav from './Nav'
import Home from './Home'
import UnansweredPull from './UnansweredPull'
import AnsweredPull from './AnsweredPull'
import Authentication from './Authentication'
import LoaderBoard from './LoaderBoard'
import NewQuestion from './NewQuestion'
import NotFoundPage from './NotFoundPage'

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
                  <Route path='/unanswered-pull/:id' component={UnansweredPull} />
                  <Route path='/answered-pull/:id' component={AnsweredPull} />
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
