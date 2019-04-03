import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleReceiveInitialData } from '../actions/shared'
import ListCategory from './ListCategory';
import Category from './Category';
import Nav from './Nav'
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleReceiveInitialData())
  }

  render() {
    const {classes} = this.props

    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="app">
            <Route path="/" exact component={ListCategory} />
            <Route path="/:id" component={Category} />
          </div>
        </Fragment>
      </Router>
    );
  }
}

export default withStyles(styles)(connect()(App))