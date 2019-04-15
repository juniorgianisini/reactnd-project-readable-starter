import {
    getCommentsByPost,
    setVoteComment,
    createComment,
    updateComment,
    deleteComment
} from "../utils/api";
import { generateUUID } from './../utils/helper';

export const RECEIVE_COMMENTS_BY_POSTID = "RECEIVE_COMMENTS_BY_POSTID";
export const CHANGE_VOTE_COMMENT = "CHANGE_VOTE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";
export const CHANGE_COMMENT = "CHANGE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

export function receiveComments(comments, postId) {
    return {
        type: RECEIVE_COMMENTS_BY_POSTID,
        postId,
        comments
    };
}

export function changeVoteComment(commentId, isUpVote) {
    return {
        type: CHANGE_VOTE_COMMENT,
        commentId,
        isUpVote
    };
}

export function addComment(comment) {
    return {
        type: ADD_COMMENT,
        comment
    };
}

export function changeComment(comment) {
    return {
        type: CHANGE_COMMENT,
        comment
    };
}

export function removeComment(comment) {
    return {
        type: REMOVE_COMMENT,
        comment
    };
}

export function handleReceiveComments(postId) {
    return dispatch => {
        return getCommentsByPost(postId).then(comments => {
            dispatch(receiveComments(comments, postId));
        });
    };
}

export function handleChangeVoteComment(commentId, isUpVote) {
    return dispatch => {
        return setVoteComment(commentId, isUpVote).then(() => {
            dispatch(changeVoteComment(commentId, isUpVote));
        });
    };
}

export function handleAddComment(comment) {
    return dispatch => {
        return createComment(comment).then(() => {
            dispatch(addComment(comment));
        });
    };
}

export function handleChangeComment(comment) {
    return dispatch => {
        return updateComment(comment).then(() => {
            dispatch(changeComment(comment));
        });
    };
}

export function handleRemoveComment(comment) {
    return dispatch => {
        return deleteComment(comment.id).then(() => {
            dispatch(removeComment(comment));
        });
    };
}

export function createCommentObject(comment, parentId) {
    return {
        id: comment.id || generateUUID(),
        timestamp: comment.timestamp || new Date(),
        voteScore: comment.voteScore || 0,
        body: comment.body,
        author: comment.author,
        parentId: comment.parentId || parentId
    };
}
