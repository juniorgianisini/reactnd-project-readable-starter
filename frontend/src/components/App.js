import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleGetInitialData } from '../actions/shared'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(handleGetInitialData())
  }

  render() {
    const {categories} = this.props
    return (
      <div className="App">
        <ul>
          {
            Object.keys(categories).map(key => <li>{categories[key].name}</li>)
            //(categories ? this.props.categories.map((cat)=><li>cat</li>) : null)
          }  
        </ul>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return { categories: categories }
}

export default connect(mapStateToProps)(App)
