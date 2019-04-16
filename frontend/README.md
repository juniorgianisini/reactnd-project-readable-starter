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

├── public
│   ├── favicon.ico - Ícone do React
│   ├── index.html - Página principal, "não alterar"
│   └── manifest.json - Configurações gerais do App
└── src
    ├── actions
    │   ├── categories.js - Ações que alteram e estado 'categories' no Redux.
    │   ├── comments.js - Ações que alteram e estado 'comments' no Redux.
    │   ├── posts.js - Ações que alteram e estado 'posts' no Redux.
    │   ├── shared.js - Ações que alteram e estado 'shared' no Redux.
    │   └── view.js - Ações que alteram e estado 'view' no Redux que guarda estados gerais da aplicação.
    ├── components
    │   ├── ActionBar.js - Componente barra de ações compartilhado nas postagens e comentários.
    │   ├── App.js - Componente principal do Sistema.
    │   ├── AppBreadCrumbs.js - Cmponente que apresenta as páginas acessadas com links de navegação.
    │   ├── AppRoute.js - Componente de rota customizada para diferentes cabeçalhos.
    │   ├── Category.js - Componente de categoria, acessado pela url '/:category'.
    │   ├── Comment.js - Componente para exibição do comentário de uma postagem.
    │   └── ErrorBoundary.js - Componente que centraliza a captura de erros. Está instável, alguns erros não são propagados. Código está comentado!
    │   ├── Header.js - Cabeçalho da aplicação compartilhado por todas as telas.
    │   ├── ListComments.js - Componente lista de "Comment".
    │   ├── ListPosts.js - Componente lista de "Post", acessado pela url root "/"
    │   ├── NewComment.js - Componente formulário para criação e edição de comentário.
    │   ├── NewPost.js - Componente formulário para criação e edição de postagens.
    │   ├── PageNotFound.js - Página para exibição do erro 404 Not Found.
    │   ├── Post.js - Componente que apresenta as informações de uma postagem.
    │   └── PostDetails.js - Apresenta os detalhes de uma postagem, wrapper de Post.
    ├── middleware
    │   ├── index.js - Centraliza o import de todos os middlwares
    │   └── logger.js - Middlware que escreve no console do Browser as ações e alterações no estado do Redux.
    ├── reducers
    │   ├── categories.js - 
    │   ├── comments.js
    │   ├── index.js
    │   ├── posts.js
    │   └── view.js
    ├── selectors
    │   ├── categories.js
    │   ├── comments.js
    │   ├── posts.js
    │   └── view.js
    ├── utils
    │   ├── api.js
    │   └── helper.js
    ├── index.css
    ├── index.js
    ├── styles.js
    ├── theme.js
