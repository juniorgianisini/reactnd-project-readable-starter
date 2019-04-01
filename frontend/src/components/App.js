import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import { handleReceiveInitialData } from '../actions/shared'
import Grid from '@material-ui/core/Grid';
import Category from './Category'

const styles = theme => ({
  grid: {
      direction: "column",
      alignItems: "scretch",
      marginLeft: 20,
      marginRight: 20
  }
});


class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleReceiveInitialData())
  }

  render() {
    const { categories, classes } = this.props
    return (
      <Fragment>
        <LoadingBar />
        <div className="App">
          <Grid className={classes.grid}>
            {
              Object.keys(categories).map(key => <Category key={categories[key].name} category={categories[key].name}/>)
            }
          </Grid>
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories: categories }
}

export default withStyles(styles)(connect(mapStateToProps)(App))
