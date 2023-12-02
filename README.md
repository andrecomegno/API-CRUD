<p>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">   
    <img src="https://img.shields.io/github/followers/andrecomegno.svg" alt="Followers">
  </a>
</p>

<p align="left">
<img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=GREEN&style=for-the-badge"/>
</p>

<div>
  <p align="center">
    <img src="public/image/logo.jpg" alt="Logo" height="280">
  </p>
</div>

# Introdução
<p> API CRUD de Filmes, desenvolvido no Senac no curso de Full-Stack, com API é possível, a exclusão, alteração, inclusão e consulta. Você também pode compartilhar os filmes que está assistindo no momento. </p>

<p> Professor: JOAO PEDRO PARELLA </p>

## Instalação

```bash
$ npm install
```

## Executando API

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Postman

```bash
# inclusão
POST http://localhost:3000/filmes
Selecione Body, raw, json

# consultar
GET http://localhost:3000/filmes
Selecione Params

# exclusão
DELET http://localhost:3000/filmes/[id do filme]
Selecione Params

# compartilhar
GET http://localhost:3000/filmes/[id do filme]/compartilhar
Selecione Params

# alteração
PUT http://localhost:3000/filmes/[id do filme]
Selecione Params
```

```bash
# json
{
  "nome": "300 Spartans",
  "duracao": 117,
  "sinopse": "This is Spartaaaaa !!",
  "ano": 2006,
  "genero": "História True ;)"
}
```

### 👾 Linguagens e Ferramentas
<img align="left" alt="TypeScript" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/typescript.png" />
<img align="left" alt="JavaScript" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/javascript.png" />
<img align="left" alt="Node.js" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/nodejs.png" />
<img align="left" alt="Postman" width="30px" src="https://github.com/andrecomegno/andrecomegno/blob/main/icon/postman.png" />
<br>
