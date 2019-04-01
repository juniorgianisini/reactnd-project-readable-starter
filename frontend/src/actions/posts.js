import { getAllPosts } from '../utils/api'

export const RECEIVE_POSTS = "RECEIVE_POSTS"

export function receivePosts(posts)  {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function handleReceivePosts(){
    return (dispatch) => {
        return getAllPosts().then((posts) => {
            dispatch(receivePosts(posts))
        })
    }
}