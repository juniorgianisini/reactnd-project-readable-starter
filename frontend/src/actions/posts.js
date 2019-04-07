import { getAllPosts } from '../utils/api'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const CHANGE_POSTS_ORDER_BY = "CHANGE_POSTS_ORDER_BY"

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

export function changePostsOrderBy(columnOrderBy)  {
    return {
        type: CHANGE_POSTS_ORDER_BY,
        columnOrderBy
    }
}