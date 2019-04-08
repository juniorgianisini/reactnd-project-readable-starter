import {createSelector} from 'reselect'
import { getColumnPostOrderBy } from './view'

export const getPostById = (state, id) => state.posts[id]

const getPosts = (state, props) => {
    const {categoryId} = props 
    if(!categoryId || categoryId === ''){
        return Object.keys(state.posts).map(key => state.posts[key])
    }else{
        const category = state.categories[categoryId]
        if(category){
            return category.posts.map(id => state.posts[id])
        }else{
            return []
        }
    }
}

/**
 * Utilizando reselect por questões de performance durante a pesquisa por categoria ou ordenação.
 * Memoriza a listagem de posts para manter em cache, somente filtra ou ordena se ocorreu mudanças
 * nos parâmetros.
 * 
 */
export const getPostsFilterOrderSelector = createSelector([getPosts, getColumnPostOrderBy], (posts, columnOrderBy) => {
    if(!columnOrderBy || columnOrderBy === ''){
        return posts
    }
    if(columnOrderBy === 'voteScore' || columnOrderBy === 'timestamp'){
        return posts.sort((a,b) => a[columnOrderBy] - b[columnOrderBy]);
    }else{
        return posts.sort((a,b) => {
            const valueA = a[columnOrderBy].toUpperCase()
            const valueB = b[columnOrderBy].toUpperCase()
            return valueA > valueB ? 1 : valueA < valueB ? -1 : 0
        });
    }
})