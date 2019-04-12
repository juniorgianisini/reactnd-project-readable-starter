import { getAllPosts, setVotePost, createPost, updatePost, deletePost} from '../utils/api'
import UUID from 'uuid'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const CHANGE_POSTS_ORDER_BY = "CHANGE_POSTS_ORDER_BY"
export const CHANGE_VOTE_POST = "CHANGE_VOTE_POST"
export const ADD_POST = "ADD_POST"
export const CHANGE_POST = "CHANGE_POST"
export const REMOVE_POST = "REMOVE_POST"

export function receivePosts(posts)  {
    return {
        type: RECEIVE_POSTS,
        posts
    }
}

export function changePostsOrderBy(columnOrderBy)  {
    return {
        type: CHANGE_POSTS_ORDER_BY,
        columnOrderBy
    }
}

export function changeVotePost(postId, isUpVote)  {
    return {
        type: CHANGE_VOTE_POST,
        postId,
        isUpVote
    }
}

export function addPost(post)  {
    return {
        type: ADD_POST,
        post
    }
}

export function changePost(post)  {
    return {
        type: CHANGE_POST,
        post
    }
}

export function removePost(post)  {
    return {
        type: REMOVE_POST,
        post
    }
}

export function handleReceivePosts(){
    return (dispatch) => {
        return getAllPosts().then((posts) => {
            dispatch(receivePosts(posts))
        })
    }
}

export function handleChangeVotePost(postId, isUpVote){
    return (dispatch) => {
        return setVotePost(postId, isUpVote).then(()=>{
            dispatch(changeVotePost(postId, isUpVote))
        })
    }
}

export function handleAddPost(post){
    return (dispatch) => {
        return createPost(post).then(()=>{
            dispatch(addPost(post))
        })
    }
}

export function handleChangePost(post){
    return (dispatch) => {
        return updatePost(post.id, post.title, post.body).then(()=>{
            dispatch(changePost(post))
        })
    }
}

export function handleRemovePost(post){
    return (dispatch) => {
        return deletePost(post.id).then(()=>{
            dispatch(removePost(post))
        })
    }
}

export function createPostObject(post) {
    return {
        id: post.id || UUID(),
        timestamp: post.timestamp || new Date(),
        voteScore: post.voteScore || 0,
        title: post.title,
        body: post.body,
        comments: post.comments,
        commentCount: post.commentCount,
        category: post.category,
        author: post.author
    }
}


