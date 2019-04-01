import {RECEIVE_CATEGORIES} from '../actions/categories'

export default function categories(state = {}, action){
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const categs = action.categories.reduce((map,categ)=>{
                map[categ.name] = {...categ}
                return map
            },{})
            return {
                ...state,
                ...categs
            }
        default:
            return state
    }
}