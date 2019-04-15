import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
//import ErrorBoundary from './components/ErrorBoundary'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        {/* <ErrorBoundary> */}
            <App />
        {/* </ErrorBoundary> */}
    </Provider>,
    document.getElementById('root'))