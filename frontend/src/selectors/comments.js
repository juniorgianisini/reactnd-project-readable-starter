export const getCommentById = (state, id) => state.comments[id]

export const getCommentIds = (state, postId) => state.posts[postId].comments