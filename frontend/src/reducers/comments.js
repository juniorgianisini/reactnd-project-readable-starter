import {RECEIVE_COMMENTS_BY_POSTID} from '../actions/comments'

export default function comments(state = {}, action){
    switch (action.type) {
        case RECEIVE_COMMENTS_BY_POSTID:
            const comments = action.comments.reduce((map,comment)=>{
                map[comment.id] = {...comment}
                return map
            },{})
            
            return {
                ...state,
                ...comments
            }
        default:
            return state
    }
}