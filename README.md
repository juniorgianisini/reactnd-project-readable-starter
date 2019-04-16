# React Readable

O projeto Readable foi construído para o trabalho de finalização do curso de 'React Redux' realizado na Udacity. Este aplicativo permite criar postagens categorizadas e realizar comentários. 

* Para melhorar a usabilidade, vários recursos auxiliares foram adicionados como:
   * Listar as postagens de uma categoria através de um menu Drawer;
   * Filtrar as postagens por título ou texto;
   * Votar nas postagens e comentários;
   * Alternar o modo de visualização entre colunas ou linhas;
   * Ordenar as postagens por título, autor, pontuação etc.

No desenvolvimento foram utilizadas as tecnologias React, Material-UI, Redux, Redux-thunk, Reselect, Debounce, Redux-thunk etc.

# Instalação

```bash
git clone https://github.com/juniorgianisini/react-readable.git
```

## Terminal 1:
```bash
cd reactnd-project-readable-starter/api-server
npm install
node server
```

## Terminal 2:
```bash
cd reactnd-project-readable-starter/frontend
npm install
npm start
```

# Resources

```bash
├── api-server - Projeto NodeJs com serviços rest básicos para manter postagens e comentários. Este projeto foi disponibilizado pela Udacity para desenvolvimento do frontend.
├── frontend - Projeto React que acessa os serviços disponíveis em api-server.
│   └── public
    │   ├── favicon.ico - Ícone do Sistema
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
        │   └── ErrorBoundary.js - Componente que centraliza a captura de erros. Está instável pois alguns erros não são propagados. Código está comentado e será revisado futuramente.
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
        │   ├── categories.js - Aplica alterações do estado 'categories' na store do Redux.
        │   ├── comments.js - Aplica alterações do estado 'comments' na store do Redux.
        │   ├── index.js - Centraliza todos os imports dos reducers.
        │   ├── posts.js - Aplica alterações do estado 'posts' na store do Redux.
        │   └── view.js - Aplica alterações do estado 'view' na store do Redux.
        ├── selectors
        │   ├── categories.js - Centraliza o acesso ao estado 'categories' do Redux.
        │   ├── comments.js - Centraliza o acesso ao estado 'comments' do Redux.
        │   ├── posts.js - Centraliza o acesso ao estado 'posts' do Redux.
        │   └── view.js -  Centraliza o acesso ao estado 'view' do Redux.
        ├── utils
        │   ├── api.js - Funções para acesso remoto ao serviços rest do aplicativo api-server disponível em "http://localhost:3001"
        │   └── helper.js - Funções utilitárias
        ├── index.css - Global Styles
        ├── index.js - Script inicial do sistema que carrega a estrutura do React/Redux
        ├── styles.js - Componet styles, utilizado para customizar estilos dos componentes do Material-UI
        └── theme.js - Theme styles, utilizado para customizar o tema global do Material-UI. Não foi feita nenhuma customização, mas foi mantido para efeito de documentação e melhorias futuras.
```

# Screenshots

Home|Drawer Menu|Column View|New Post|Post Details
-----|------------|------
<img src="https://raw.githubusercontent.com/juniorgianisini/react-readable/master/images/Image1.png" width="250px">|
<img src="https://raw.githubusercontent.com/juniorgianisini/react-readable/master/images/Image2.png" width="250px">|
<img src="https://raw.githubusercontent.com/juniorgianisini/react-readable/master/images/Image3.png" width="250px">|
<img src="https://raw.githubusercontent.com/juniorgianisini/react-readable/master/images/Image4.png" width="250px">|
<img src="https://raw.githubusercontent.com/juniorgianisini/react-readable/master/images/Image5.png" width="250px">