const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

/**
 * Recuperar todas as categorias
 */
export const getAllCategories = () =>
  fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
 * Recuperar todos os posts de uma determinada categoria.
 * 
 * @param {String} id - Identificador da categoria 
 */
export const getPostsByCategory = (id) =>
  fetch(`${api}/${id}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
 * Recuperar todos os posts
 */
export const getAllPosts = () =>
  fetch(`${api}/posts`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
 * Adicionar um novo registro de post.
 * 
 * @param {Object} post - Objeto post definido pelo usuário
 * @param {String} post.id - Identificador único do post (UUID)
 * @param {String} post.timestamp - Data de inclusão do post, pode ser utilizado Date.now()
 * @param {String} post.title - Título do post
 * @param {String} post.body - Mensagem do post
 * @param {String} post.author - Autor do post
 * @param {String} post.category - Categoria do post, precisa ser um valor válido pré-definido.
 */
export const createPost = (post) =>
  fetch(`${api}/posts`, {
    method: 'POST',
    headers,
    body: JSON.stringify(post)
  }).then(res => res.json())

/** 
 * Recuperar um post baseado em seu identificador.
 * 
 * @param {String} id - Identificador do post 
 */
export const getPostById = (id) => {
  fetch(`${api}/posts/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)
}

/** 
 * Votar em um determinado post
 * 
 * @param {String} id - Identificador do Post 
 * @param {Boolean} isUpVote - True para incrementar os votos e false para decrementar 
 */
export const setVotePost = (id, isUpVote) =>
  fetch(`${api}/posts/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: (isUpVote ? 'upVote' : 'downVote') })
  }).then(res => res.json())

/**
 * Atualizar informação de um post já existente
 * 
 * @param {String} id - Identificador do Post  
 * @param {String} title - Título do Post
 * @param {*} body - Mensagem do post
 */
export const updatePost = (id, title, body) =>
  fetch(`${api}/posts/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ title: title, body: body })
  }).then(res => res.json())

/**
 * Remover um post
 *  Define a flag deleted do post para true.
 *  Define a flag parentDeleted de todos os filhos de post para true
 * 
 * @param {String} id - Identificador do Post
 */
export const deletePost = (id) =>
  fetch(`${api}/posts/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json())

/**
 * Retorna todos os comentário de um único Post
 * 
 * @param {String} id - Indetificador do Post
 */
export const getCommentsByPost = (id) =>
  fetch(`${api}/posts/${id}/comments`, { headers })
    .then(res => res.json())
    .then(data => data)

/**
 * Adicionar um novo comentário de um determinado post.
 * 
 * @param {Object} comment - Objeto post definido pelo usuário
 * @param {String} post.id - Identificador único do comentário (UUID)
 * @param {String} post.timestamp - Data de inclusão do post, pode ser utilizado Date.now()
 * @param {String} post.body - Mensagem do post
 * @param {String} post.author - Autor do post
 * @param {String} post.parentId - Identificador único do post do comentário.
 */
export const createComment = (comment) =>
  fetch(`${api}/comments`, {
    method: 'POST',
    headers,
    body: JSON.stringify(comment)
  }).then(res => res.json())

/**
 * Retorna os detalhes de um único comentário
 * 
 * @param {String} id - Indetificador do Post
 */
export const getCommentById = (id) =>
  fetch(`${api}/comments/${id}`, { headers })
    .then(res => res.json())
    .then(data => data)

/** 
 * Votar em um determinado comentário
 * 
 * @param {String} id - Identificador do Post 
 * @param {Boolean} isUpVote - True para incrementar os votos e false para decrementar 
 */
export const setVoteComment = (id, isUpVote) =>
  fetch(`${api}/comments/${id}`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ option: (isUpVote ? 'upVote' : 'downVote') })
  }).then(res => res.json())

/**
 * Atualizar informações de um comentário
 * 
 * @param {Object} comment - Objeto com informações do comentário
 * @param {String} comment.id - Idetificandor único do comentário 
 * @param {String} comment.body - Mensagem do comentário
 * @param {String} comment.timestamp - Data de atualização do comentário
 */
export const updateComment = ({ id, body, timestamp }) =>
  fetch(`${api}/comments/${id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({ body: body, timestamp: timestamp })
  }).then(res => res.json())

/**
 * Remove um comentário
 *  Define a flag deleted para true
 * 
 * @param {String} id - Indetificador único do comentário
 */  
export const deleteComment = (id) =>
  fetch(`${api}/comments/${id}`, {
    method: 'DELETE',
    headers
  }).then(res => res.json())