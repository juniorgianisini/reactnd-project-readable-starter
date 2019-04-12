import { RECEIVE_CATEGORIES } from "../actions/categories";
import { RECEIVE_POSTS, ADD_POST, REMOVE_POST } from "../actions/posts";

export default function categories(state = {}, action) {
    switch (action.type) {
        case RECEIVE_CATEGORIES:
            const categories = action.categories;
            return {
                ...state,
                ...categories.reduce((map, categ) => {
                    map[categ.name] = { ...categ, posts: [] };
                    return map;
                }, {})
            };
        case RECEIVE_POSTS:
            const posts = action.posts;
            return {
                ...state,
                ...posts.reduce((map, post) => {
                    let posts = [];
                    if (map[post.category]) {
                        posts = map[post.category].posts;
                    }
                    map[post.category] = {
                        ...state[post.category],
                        posts: posts.concat(post.id)
                    };
                    return map;
                }, {})
            };
        case ADD_POST:
            const post = action.post;
            return {
                ...state,
                [post.category]: {
                    ...state[post.category],
                    posts: state[post.category].posts.concat(post.id)
                }
            };
        case REMOVE_POST:
            const postRemove = action.post;
            return {
                ...state,
                [postRemove.category]: {
                    ...state[postRemove.category],
                    posts: state[postRemove.category].posts.filter(
                        id => id !== postRemove.id
                    )
                }
            };
        default:
            return state;
    }
}
