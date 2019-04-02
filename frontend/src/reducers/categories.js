import {RECEIVE_CATEGORIES} from '../actions/categories'
import {RECEIVE_POSTS} from '../actions/posts'

export default function categories(state = {}, action){
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const categs = action.categories.reduce((map,categ)=>{
                map[categ.name] = {...categ, posts: []}
                return map
            },{})
            return {
                ...state,
                ...categs
            }
        case RECEIVE_POSTS:
            const posts = action.posts
            let categories = {}
            posts.forEach(post => {
                let posts = []
                if(categories[post.category]){
                    posts = categories[post.category].posts
                }
                categories[post.category] = {
                    ...state[post.category],
                    posts: posts.concat(post.id)
                }
            });
            return {
                ...state,
                ...categories
            }    
        default:
            return state
    }
}