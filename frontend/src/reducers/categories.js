import {RECEIVE_CATEGORIES} from '../actions/categories'
import {RECEIVE_POSTS} from '../actions/posts'

export default function categories(state = {}, action){
    switch (action.type) {
        case RECEIVE_CATEGORIES:
        const categories = action.categories    
        return {
                ...state,
                ...categories.reduce((map,categ)=>{
                    map[categ.name] = {...categ, posts: []}
                    return map
                },{})
            }
        case RECEIVE_POSTS:
            const posts = action.posts
            return {
                ...state,
                ...posts.reduce((map, post) => {
                    let posts = []
                    if(map[post.category]){
                        posts = map[post.category].posts
                    }
                    map[post.category] = {
                        ...state[post.category],
                        posts: posts.concat(post.id)
                    }
                    return map
                }, {})
            }    
        default:
            return state
    }
}