import {
    RECEIVE_COMMENTS_BY_POSTID,
    CHANGE_VOTE_COMMENT,
    ADD_COMMENT,
    CHANGE_COMMENT,
    REMOVE_COMMENT
} from "../actions/comments";

export default function comments(state = {}, action) {
    switch (action.type) {
        case RECEIVE_COMMENTS_BY_POSTID:
            const comments = action.comments.reduce((map, comment) => {
                map[comment.id] = { ...comment };
                return map;
            }, {});

            return {
                ...state,
                ...comments
            };
        case CHANGE_VOTE_COMMENT:
            const { isUpVote } = action;
            const score = state[action.commentId].voteScore;
            return {
                ...state,
                [action.commentId]: {
                    ...state[action.commentId],
                    voteScore: isUpVote ? score + 1 : score - 1
                }
            };
        case ADD_COMMENT:
            const comment = action.comment;
            return {
                ...state,
                [comment.id]: { ...comment }
            };
        case CHANGE_COMMENT:
            const commentChange = action.comment;
            return {
                ...state,
                [commentChange.id]: {
                    ...state[commentChange.id],
                    ...commentChange
                }
            };
        case REMOVE_COMMENT:
            const commentRemove = action.comment;
            return {
                ...Object.keys(state)
                    .filter(id => id !== commentRemove.id)
                    .reduce((map, id) => {
                        map[id] = { ...state[id] };
                        return map;
                    }, {})
            };
        default:
            return state;
    }
}
