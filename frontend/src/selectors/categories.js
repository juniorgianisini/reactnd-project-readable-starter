
export const getCategoryIds = (state) => Object.keys(state.categories)

export const getCategoryById = (state, id) => state.categories[id]