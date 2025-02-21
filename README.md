# 🔥 Desafio Final - SISPAR

> Bem-vindo ao repositório do projeto SISPAR (Sistema de Solicitação de Reembolsos), desenvolvido como parte do ciclo Be Digital! Este é um sistema web simples que simula uma interface para solicitação e visualização de reembolsos. Ele foi projetado para praticar os conceitos de Front-end utilizando React + Vite , com foco em organização, funcionalidades básicas e estilização

## 📋 Índice
1. [Descrição do Projeto](#descricao-do-projeto)
2. [Funcionalidades Implementadas](#funcionalidades-implementadas)
3. [Estrutura do Projeto](#estrutura-do-projeto)
4. [Como Executar o Projeto](#como-executar-o-projeto)
5. [Tecnologias Utilizadas](#tecnologias-utilizadas)
6. [Links Importantes](#links-importantes)


## 📝 Descrição do Projeto <a id="descricao-do-projeto"></a>
O SISPAR é um sistema web que permite aos usuários realizar login, navegar entre telas e solicitar reembolsos. Ele é composto por três principais telas:

- Tela de Login: Ponto inicial do sistema, onde o usuário pode acessar a plataforma.
- Tela de Reembolsos: Uma interface parcialmente estática que exibe informações sobre reembolsos e permite navegar para outras telas.
- Tela de Solicitação de Reembolsos : Onde o usuário pode preencher um formulário para solicitar um reembolso, com os dados sendo armazenados temporariamente.
> Além disso, o sistema possui uma NavBar responsiva com ícones de navegação e um menu hambúrguer funcional.

## ✅ Funcionalidades Implementadas <a id="funcionalidades-implementadas"></a>
### 1. Tela de Login
- **Botão "ENTRAR"** : Redireciona o usuário para a Tela de Reembolsos.
- **Rota configurada** : Garante que o redirecionamento ocorra corretamente utilizando React Router.
### 2. Tela de Reembolsos
- **Interface parcialmente estática com:**
    - Um card "Solicitar Reembolso" que redireciona para a Tela de Solicitação de Reembolsos.
    - Layout organizado e estilizado.
### 3. Tela de Solicitação de Reembolsos
- **Formulário funcional com campos de input para:**
    - Nome, valor, descrição e outros dados relevantes.
- **Armazenamento temporário dos dados inseridos (simulado com estado local do React).**
### 4. NavBar (Navegação)
- **Ícones funcionais**:
    - **Home** : Redireciona para a Tela de Reembolsos.
    - **Solicitação** : Redireciona para a Tela de Solicitação de Reembolsos.
    - **Logout** : Retorna o usuário à Tela de Login.
- **Menu Hambúrguer**:
    - Abre e fecha a barra de navegação lateral.

## 📂 Estrutura do Projeto <a id="estrutura-do-projeto"></a>
- A estrutura do projeto foi organizada para facilitar a manutenção e escalabilidade:
~~~ 
sispar/
├── node_modules/           # Dependências do projeto instaladas via npm/yarn
├── public/                 # Arquivos estáticos acessíveis publicamente
│   └── navio.png           # Imagem usada no projeto (ex: logo)
├── src/
│   ├── assets/             # Recursos como ícones/fonts (não utilizado no momento)
│   ├── components/         # Componentes reutilizáveis
│   │   └── navbar/         # Componente de navegação principal
│   │       ├── NavBar.jsx      # Lógica e estrutura do navbar
│   │       └── NavBar.module.scss  # Estilos específicos do navbar (CSS Modules)
│   ├── pages/              # Componentes de página/routing
│   │   ├── login/          # Página de login
│   │   │   ├── Login.jsx       # Formulário de autenticação
│   │   │   └── Login.module.scss  # Estilos da página de login
│   │   ├── reembolsos/     # Página de gestão de reembolsos
│   │   │   ├── Reembolsos.jsx    # Listagem/controle de reembolsos
│   │   │   └── Reembolsos.module.scss
│   │   └── solicitacao/    # Página de solicitação de reembolsos
│   │       ├── Solicitacao.jsx   # Formulário de solicitação
│   │       └── Solicitacao.module.scss
│   ├── App.jsx             # Componente raiz que organiza o layout geral
│   ├── global.scss         # Estilos globais aplicados a toda aplicação
│   ├── index.css           # Estilos base do documento (opcional/reset CSS)
│   └── main.jsx            # Ponto de entrada da aplicação (renderiza App)
├── .gitignore              # Arquivos/pastas ignorados pelo Git
├── eslint.config.js        # Configurações de linting para qualidade de código
├── index.html              # Template HTML principal
├── package-lock.json       # Versões exatas das dependências
├── package.json            # Metadados e scripts do projeto
├── README.md               # Documentação do projeto
└── vite.config.js          # Configurações específicas do Vite (build/dev server)
~~~


## ▶️ Como Executar o Projeto <a id="como-executar-o-projeto"></a>
> Para executar o projeto localmente, siga os passos abaixo:
### Pré-requisitos
- Node.js instalado (versão 16 ou superior)
- npm ou yarn instalado
### Passo a passo
1. Clone este repositório:
~~~
git clone https://github.com/nonatodiego/sispar.git
~~~
2. Navegue até a pasta do projeto:
~~~
cd sispar
~~~
3. Instale as dependências:
~~~
npm install
~~~
4. Inicie o servidor de desenvolvimento:
~~~
npm run dev
~~~
ou
~~~
yarn dev
~~~
5. Abra o navegador e acesse o endereço fornecido no terminal (geralmente http://localhost:5173)

> Nota : Este projeto utiliza React Router para gerenciar as rotas e navegação entre telas. 

## 💻 Tecnologias Utilizadas <a id="tecnologias-utilizadas"></a>
- **React** : Biblioteca JavaScript para construção da interface.
- **Vite** : Ferramenta de build rápida para desenvolvimento front-end.
- **React Router** : Gerenciamento de rotas e navegação.
- **CSS Modules** : Estilização modular para evitar conflitos de classes.
- **Flexbox/Grid** : Para criar layouts responsivos e organizados.
- **Figma** : Protótipo visual do projeto

## 🔗 Links Importantes <a id="links-importantes"></a>
- **Protótipo no Figma** : [SISPAR](https://www.figma.com/file/seu-link?spm=5aebb161.2ef5001f.0.0.14b05171p3IwKG)
- **Imagens do Projeto** : [Google Drive](https://drive.google.com/drive/folders/seu-link?spm=5aebb161.2ef5001f.0.0.14b05171p3IwKG)
- **Materiais de Apoio** :
    -  [Unidades e Medidas, Cor e Tipografia](https://link-material-de-apoio/?spm=5aebb161.2ef5001f.0.0.14b05171p3IwKG)
    - [Flexbox para Estilização](https://link-material-de-apoio/?spm=5aebb161.2ef5001f.0.0.14b05171p3IwKG)
