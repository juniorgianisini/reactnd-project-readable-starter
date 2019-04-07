import { CHANGE_POSTS_ORDER_BY } from '../actions/view'

export default function view(state = {columnOrderBy: ''}, action) {
    switch (action.type) {
        case CHANGE_POSTS_ORDER_BY:
            const {columnOrderBy} = action
            return {
                ...state,
                columnOrderBy
            }
        default:
            return state
    }
}