export const CHANGE_POSTS_ORDER_BY = "CHANGE_POSTS_ORDER_BY";
export const CHANGE_POSTS_TEXT_SEARCH = "CHANGE_POSTS_TEXT_SEARCH";
export const CHANGE_OPEN_DRAWER = "CHANGE_OPEN_DRAWER";
export const CHANGE_COLUMNS_OR_LIST = "CHANGE_COLUMNS_OR_LIST";
export const CHANGE_TITLE = "CHANGE_TITLE";

export function changePostsOrderBy(columnOrderBy) {
    return {
        type: CHANGE_POSTS_ORDER_BY,
        columnOrderBy
    };
}

export function changePostsTextSearch(textSearch) {
    return {
        type: CHANGE_POSTS_TEXT_SEARCH,
        textSearch
    };
}

export function changeOpenDrawer(openDrawer) {
    return {
        type: CHANGE_OPEN_DRAWER,
        openDrawer
    };
}

export function changeColumnsOrList(columns) {
    return {
        type: CHANGE_COLUMNS_OR_LIST,
        columns
    };
}

export function changeTitle(title) {
    return {
        type: CHANGE_TITLE,
        title
    };
}
