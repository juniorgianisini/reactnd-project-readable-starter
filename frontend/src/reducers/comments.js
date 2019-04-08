import {RECEIVE_COMMENTS_BY_POSTID, CHANGE_VOTE_COMMENT} from '../actions/comments'

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
        case CHANGE_VOTE_COMMENT:
            const {isUpVote} = action
            const score = state[action.commentId].voteScore
            return {
                ...state,
                [action.commentId]: {...state[action.commentId], voteScore: isUpVote ? score + 1 : score - 1} 
            }
        default:
            return state
    }
}