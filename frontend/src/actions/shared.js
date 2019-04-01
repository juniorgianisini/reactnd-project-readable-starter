import {showLoading, hideLoading} from 'react-redux-loading-bar'
import {handleReceiveCategories} from './categories'
import {handleReceivePosts} from './posts'

export function handleReceiveInitialData(){
    return async (dispatch) => {
        dispatch(showLoading())
        await dispatch(handleReceiveCategories())
        await dispatch(handleReceivePosts())
        dispatch(hideLoading())
    }
}