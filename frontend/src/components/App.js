import React, { Component, Fragment, PureComponent } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading-bar'
import { handleReceiveInitialData } from '../actions/shared'
import Category from './Category';
import { Grid } from '@material-ui/core';
import Header from './Header';
import Post from './Post';
import ListPosts from './ListPosts';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleReceiveInitialData())
  }

  render() {
    const {loading} = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {!loading &&
            <Grid container justify="center">
              <Grid item xs={10}>
                <Header />
                <Route path="/" exact component={ListPosts} />
                <Route path="/:id" exact component={Category} />
                <Route path="/:category/:id" render={() => <Post editMode={true} />} />
              </Grid>
            </Grid>
          }
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return { loading: state.categories.length === 0 }
}

export default connect(mapStateToProps)(App)