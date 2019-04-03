import { RECEIVE_POSTS } from '../actions/posts'
import { RECEIVE_COMMENTS_BY_POSTID } from '../actions/comments'

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
        default:
            return state
    }
}