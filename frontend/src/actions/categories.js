import { getAllCategories } from "../utils/api";

export const RECEIVE_CATEGORIES = "RECEIVE_CATEGORIES";

export function receiveCategories(categories) {
    return {
        type: RECEIVE_CATEGORIES,
        categories
    };
}

export function handleReceiveCategories() {
    return dispatch => {
        return getAllCategories().then(({ categories }) => {
            dispatch(receiveCategories(categories));
        });
    };
}
