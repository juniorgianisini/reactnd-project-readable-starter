import {
    CHANGE_POSTS_ORDER_BY,
    CHANGE_POSTS_TEXT_SEARCH,
    CHANGE_OPEN_DRAWER,
    CHANGE_COLUMNS_OR_LIST,
    CHANGE_TITLE
} from "../actions/view";

export default function view(
    state = {
        columnOrderBy: "",
        openDrawer: false,
        columnsView: false,
        title: ""
    },
    action
) {
    switch (action.type) {
        case CHANGE_POSTS_ORDER_BY:
            const { columnOrderBy } = action;
            return {
                ...state,
                columnOrderBy
            };
        case CHANGE_OPEN_DRAWER:
            return {
                ...state,
                openDrawer: action.openDrawer
            };
        case CHANGE_POSTS_TEXT_SEARCH:
            return {
                ...state,
                textSearch: action.textSearch
            };
        case CHANGE_COLUMNS_OR_LIST:
            return {
                ...state,
                columns: action.columns
            };
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.title
            };
        default:
            return state;
    }
}
