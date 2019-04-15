export const getAllCategories = state =>
    Object.keys(state.categories).map(key => state.categories[key]);

export const getCategoryById = (state, id) => state.categories[id];
