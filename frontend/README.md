# React Readable

Readable foi construído como trabalho de finalização de curso de React-Redux realizado na Udacity. O aplicativo permite criar postagens e comentários, filtrar por categoria ou texto, ordenar, visualizar em colunas ou lista e votar nas postagens e comentários. Foi construíndo utilizando as tecnologias React na camada de apresentação,Redux no gerenciamento de estado e outras bibliotécas auxiliares como Material-UI, Reselect, Debounce etc.

# Instalação

git clone https://github.com/juniorgianisini/reactnd-project-readable-starter.git
Terminal 1:
cd reactnd-project-readable-starter/api-server
npm install
node server

Terminal 2:
cd reactnd-project-readable-starter/frontend
npm install
npm start

frontend\public
frontend\public\favicon.ico - Ícone do React
frontend\public\index.html - Página principal, "não alterar"
frontend\public\manifest.json - Configurações gerais do App
frontend\src\actions
frontend\src\actions\categories.js - Ações que alteram e estado 'categories' no Redux.
frontend\src\actions\comments.js - Ações que alteram e estado 'comments' no Redux.
frontend\src\actions\posts.js - Ações que alteram e estado 'posts' no Redux.
frontend\src\actions\shared.js - Ações que alteram e estado 'shared' no Redux.
frontend\src\actions\view.js - Ações que alteram e estado 'view' no Redux que guarda estados gerais da aplicação.
frontend\src\components
frontend\src\components\ActionBar.js - Componente barra de ações compartilhado nas postagens e comentários.
frontend\src\components\App.js - Componente principal do Sistema.
frontend\src\components\AppBreadCrumbs.js - Cmponente que apresenta as páginas acessadas com links de navegação.
frontend\src\components\AppRoute.js - Componente de rota customizada para diferentes cabeçalhos.
frontend\src\components\Category.js - Componente de categoria, acessado pela url '/:category'.
frontend\src\components\Comment.js - Componente para exibição do comentário de uma postagem.
frontend\src\components\ErrorBoundary.js - Componente que centraliza a captura de erros. Está instável, alguns erros não são propagados. Código está comentado!
frontend\src\components\Header.js - Cabeçalho da aplicação compartilhado por todas as telas.
frontend\src\components\ListComments.js - Componente lista de "Comment".
frontend\src\components\ListPosts.js - Componente lista de "Post", acessado pela url root "/"
frontend\src\components\NewComment.js - Componente formulário para criação e edição de comentário.
frontend\src\components\NewPost.js - Componente formulário para criação e edição de postagens.
frontend\src\components\PageNotFound.js - Página para exibição do erro 404 Not Found.
frontend\src\components\Post.js - Componente que apresenta as informações de uma postagem.
frontend\src\components\PostDetails.js - Apresenta os detalhes de uma postagem, wrapper de Post.
frontend\src\middleware
frontend\src\middleware\index.js - Centraliza o import de todos os middlware`s
frontend\src\middleware\logger.js - Middlware que escreve no console do Browser as ações e alterações no estado do Redux.
frontend\src\reducers
frontend\src\reducers\categories.js - 
frontend\src\reducers\comments.js
frontend\src\reducers\index.js
frontend\src\reducers\posts.js
frontend\src\reducers\view.js
frontend\src\selectors
frontend\src\selectors\categories.js
frontend\src\selectors\comments.js
frontend\src\selectors\posts.js
frontend\src\selectors\view.js
frontend\src\utils
frontend\src\utils\api.js
frontend\src\utils\helper.js
frontend\src\index.css
frontend\src\index.js
frontend\src\styles.js
frontend\src\theme.js

