import { getAllPosts, setVotePost} from '../utils/api'

export const RECEIVE_POSTS = "RECEIVE_POSTS"
export const CHANGE_POSTS_ORDER_BY = "CHANGE_POSTS_ORDER_BY"
export const CHANGE_VOTE_POST = "CHANGE_VOTE_POST"

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
