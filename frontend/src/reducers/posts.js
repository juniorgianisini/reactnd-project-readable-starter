import {
    RECEIVE_COMMENTS_BY_POSTID,
    ADD_COMMENT,
    REMOVE_COMMENT
} from "../actions/comments";
import {
    RECEIVE_POSTS,
    CHANGE_VOTE_POST,
    ADD_POST,
    CHANGE_POST,
    REMOVE_POST
} from "./../actions/posts";

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            const posts = action.posts.reduce((map, post) => {
                map[post.id] = { ...post };
                return map;
            }, {});

            return {
                ...state,
                ...posts
            };
        case RECEIVE_COMMENTS_BY_POSTID:
            const { comments, postId } = action;
            return {
                ...state,
                [postId]: {
                    ...state[postId],
                    comments: !comments
                        ? []
                        : comments.map(comment => comment.id)
                }
            };
        case CHANGE_VOTE_POST:
            const score = state[action.postId].voteScore;
            return {
                ...state,
                [action.postId]: {
                    ...state[action.postId],
                    voteScore: action.isUpVote ? score + 1 : score - 1
                }
            };
        case ADD_POST:
            const post = action.post;
            return {
                ...state,
                [post.id]: { ...post, commentCount: 0 }
            };
        case CHANGE_POST:
            const postChange = action.post;
            return {
                ...state,
                [postChange.id]: { ...state[postChange.id], ...postChange }
            };
        case REMOVE_POST:
            const postRemove = action.post;
            return {
                ...Object.keys(state)
                    .filter(id => id !== postRemove.id)
                    .reduce((map, id) => {
                        map[id] = { ...state[id] };
                        return map;
                    }, {})
            };
        case ADD_COMMENT:
            const comment = action.comment;
            return {
                ...state,
                [comment.parentId]: {
                    ...state[comment.parentId],
                    comments: state[comment.parentId].comments.concat(
                        comment.id
                    ),
                    commentCount: state[comment.parentId].commentCount+1
                }
            };
        case REMOVE_COMMENT:
            const commentRemove = action.comment;
            return {
                ...state,
                [commentRemove.parentId]: {
                    ...state[commentRemove.parentId],
                    comments: state[commentRemove.parentId].comments.filter(
                        id => id !== commentRemove.id
                    ),
                    commentCount: state[commentRemove.parentId].commentCount-1
                }
            };
        default:
            return state;
    }
}
