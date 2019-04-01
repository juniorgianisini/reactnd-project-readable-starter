import {RECEIVE_POSTS} from '../actions/posts'

export default function posts(state = {}, action){
    switch (action.type) {
        case RECEIVE_POSTS:
            const posts = action.posts.reduce((map,post)=>{
                map[post.id] = {...post}
                return map
            },{})
            
            return {
                ...state,
                ...posts
            }
        default:
            return state
    }
}