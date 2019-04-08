import { RECEIVE_POSTS, CHA } from '../actions/posts'
import { RECEIVE_COMMENTS_BY_POSTID } from '../actions/comments'
import { CHANGE_VOTE_POST } from './../actions/posts';

export default function posts(state = {}, action) {
    switch (action.type) {
        case RECEIVE_POSTS:
            const posts = action.posts.reduce((map, post) => {
                map[post.id] = { ...post }
                return map
            }, {})

            return {
                ...state,
                ...posts
            }
        case RECEIVE_COMMENTS_BY_POSTID:
            const {comments, postId} = action
            return {
                ...state,
                [postId]: {...state[postId], comments: !comments ? [] : comments.map((comment) => comment.id)}
            }
        case CHANGE_VOTE_POST:
            const score = state[action.postId].voteScore
            return {
                ...state,
                [action.postId]: {...state[action.postId], voteScore: action.isUpVote ? score + 1 : score - 1}
            }
        default:
            return state
    }
}