export const CHANGE_POSTS_ORDER_BY = "CHANGE_POSTS_ORDER_BY"

export function changePostsOrderBy(columnOrderBy)  {
    return {
        type: CHANGE_POSTS_ORDER_BY,
        columnOrderBy
    }
}