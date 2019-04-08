import {getCommentsByPost, setVoteComment} from '../utils/api'

export const RECEIVE_COMMENTS_BY_POSTID = "RECEIVE_COMMENTS_BY_POSTID"
export const CHANGE_VOTE_COMMENT = "CHANGE_VOTE_COMMENT"

export function receiveComments(comments, postId)  {
    return {
        type: RECEIVE_COMMENTS_BY_POSTID,
        postId,
        comments
    }
}

export function changeVoteComment(commentId, isUpVote)  {
    return {
        type: CHANGE_VOTE_COMMENT,
        commentId,
        isUpVote
    }
}

export function handleReceiveComments(postId){
    return (dispatch) => {
        return getCommentsByPost(postId).then((comments) => {
            dispatch(receiveComments(comments, postId))
        })
    }
}

export function handleChangeVoteComment(commentId, isUpVote){
    return (dispatch) => {
        return setVoteComment(commentId, isUpVote).then(()=>{
            dispatch(changeVoteComment(commentId, isUpVote))
        })
    }
}

