import {combineReducers} from 'redux'
import categories from './categories'
import {loadingBarReducer} from 'react-redux-loading-bar'

export default combineReducers ({
    categories,
    loadingBar: loadingBarReducer
})