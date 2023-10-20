# Desafio Frontend Brisalabs - Pokédex App

Este é um desafio de frontend para a vaga de desenvolvedor frontend na Brisanet. O objetivo é criar uma aplicação web estilo Pokédex que consome a PokéAPI e oferece funcionalidades de login, listagem de Pokémon, filtragem, busca, favoritos e tema escuro.

## Tecnologias Utilizadas

- ReactJS
- TypeScript
- Styled Components
- Context API
- Requisições à PokéAPI

## Níveis

### Básico

- **Página de Login**: Implementada com a funcionalidade de login e armazenamento do token no LocalStorage.
- **Verificação de Sessão**: A aplicação verifica se já existe uma sessão salva (token no LocalStorage). Se existir, redireciona para a página "Ver Todos"; caso contrário, redireciona para a página de login.
- **Listagem Completa (Página "Ver Todos")**: A página lista registros da API, limitando a exibição a 20 itens.

### Intermediário

- **Filtragem**: Implementada na página "Ver Todos" através de botões.
- **Busca e Listagem (Página "Procurar")**: É possível realizar a busca por um Pokémon específico e listar todos os registros encontrados.
- **Detalhes do Pokémon**: Um modal exibe as informações detalhadas de um Pokémon.

### Avançado

- **Favoritar Pokémon**: Implementado na página "Favoritos" com contagem de Pokémon favoritados no menu.
- **Tema Escuro**: Uma opção de tema escuro foi adicionada para aprimorar a experiência do usuário.

## Critérios de Avaliação

- Componentização: Componentes bem estruturados e reutilizáveis.
- Clean Code: Código organizado e legível.
- Organização de Pastas: Estrutura de pastas bem definida.
- Fidelidade ao Layout: A interface está de acordo com o layout fornecido.

## Como Executar o Projeto

1. Clone este repositório.
2. Instale as dependências com `npm install` ou `yarn install`.
3. Execute a aplicação com `npm start` ou `yarn start`.
