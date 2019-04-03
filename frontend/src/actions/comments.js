import {getCommentsByPost} from '../utils/api'

export const RECEIVE_COMMENTS_BY_POSTID = "RECEIVE_COMMENTS_BY_POSTID"

export function receiveComments(comments, postId)  {
    return {
        type: RECEIVE_COMMENTS_BY_POSTID,
        postId,
        comments
    }
}

export function handleReceiveComments(postId){
    return (dispatch) => {
        return getCommentsByPost(postId).then((comments) => {
            dispatch(receiveComments(comments, postId))
        })
    }
}

