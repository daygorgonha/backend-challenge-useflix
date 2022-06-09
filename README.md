<div align="center">
 <img src="./assets/logo-useflix.png" alt="useflix"/>
</div>

<h1 align="center"> Desafio Backend UseFlix 🍿 </h1>

<h4 align="center"> 
	  Status: Concluido 🚀 
</h4>

<br />

<p align="center">Nesse projeto foi criado uma API RESTfull com Node.js e Sequelize.</p>

<br />

## Funcionalidades

### Categorias:
- Uma categoria pode ser adicionada, removida, atualizada e listada.
- Uma categoria com filmes não pode ser removida.

### Filmes:
- Um filme pode ser adicionado, removido, atualizado e listado.
- Cada filme cadastrado deverá pertencer a somente uma categoria.

<br />

##  Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

<p align="center">
   <img  src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
  <img  src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img  src="https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white"/>
  <img  src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/>
  <img  src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</p>

<br />

### Instalação e Execução do Projeto

- Clone este repositório

```
> git clone https://github.com/daygorgonha/backend-challenge-useflix
```

- Navegue até o diretório principal do projeto

```
> cd backend-challenge-useflix
```

- Configure o environment

```
> cp .env.example .env 
```

### Execução local
<br/>


- Instale as dependências com o Yarn

```
> yarn
```

- Execute o projeto

```
> yarn dev
```

- Execute a migration

```
> yarn sequelize db:migrate
```
<br/>

### Execução com docker-compose
<br/>

- Execute o docker-compose

```
> sudo docker-compose up
```

- Execute a migration

```
> sudo docker-compose run --rm app npx sequelize-cli db:migrate
```
<br/>

---

<div align="center">
  <br />
  <a href="https://github.com/daygorgonha">
    <img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/97552170?v=4" width="100px;" alt=""/>
    <br />
    <small>Feito com ❤️ by <a href="https://www.linkedin.com/in/dayanegorgonha/">Dayane Gorgonha</a></small>
  </a>