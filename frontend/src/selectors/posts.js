import { createSelector } from "reselect";
import { getColumnPostOrderBy, getTextSearch } from "./view";

export const getPostById = (state, id) => state.posts[id];

const getPosts = (state, props) => {
    const { categoryId } = props;
    if (!categoryId || categoryId === "") {
        return Object.keys(state.posts).map(key => state.posts[key]);
    } else {
        const category = state.categories[categoryId];
        if (category) {
            return category.posts.map(id => state.posts[id]);
        } else {
            return [];
        }
    }
};

/**
 * Utilizando reselect por questões de performance durante a pesquisa por categoria ou ordenação.
 * Memoriza a listagem de posts para manter em cache, somente filtra ou ordena se ocorreu mudanças
 * nos parâmetros.
 *
 */
export const getPostsFilterSelector = createSelector(
    [getPosts, getColumnPostOrderBy, getTextSearch],
    (posts, columnOrderBy, textSearch) => {
        if (textSearch && textSearch !== "") {
            posts = posts.filter(
                post =>
                    post.title
                        .toUpperCase()
                        .indexOf(textSearch.toUpperCase()) !== -1 ||
                    post.body
                        .toUpperCase()
                        .indexOf(textSearch.toUpperCase()) !== -1
            );
        }

        if (columnOrderBy && columnOrderBy !== "") {
            if (
                columnOrderBy === "voteScore" ||
                columnOrderBy === "timestamp"
            ) {
                posts = posts.sort(
                    (a, b) => a[columnOrderBy] - b[columnOrderBy]
                );
            } else {
                posts = posts.sort((postA, postB) => {
                    const valuePostA = postA[columnOrderBy].toUpperCase();
                    const valuePostB = postB[columnOrderBy].toUpperCase();
                    return valuePostA > valuePostB
                        ? 1
                        : valuePostA < valuePostB
                        ? -1
                        : 0;
                });
            }
        }
        return posts;
    }
);
