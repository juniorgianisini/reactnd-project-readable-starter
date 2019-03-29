import { getCategories } from '../utils/api'
import {receiveCategories} from './categories'
import {showLoading, hideLoading} from 'react-redux-loading-bar'


export function handleGetInitialData(){
    return (dispatch) => {
        dispatch(showLoading())
        return getCategories().then(({categories}) => {
            dispatch(receiveCategories(categories))
            dispatch(hideLoading())
        })
    }
}