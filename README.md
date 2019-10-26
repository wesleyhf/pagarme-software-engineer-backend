# Pagar.me Software Engineer Back-end Challenge :sparkles:

[Challenge description (PT-BR)](https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend)

# Installation

:exclamation: **Dependencies** :exclamation:
- [Docker](https://docs.docker.com/install/)
- [Docker Composer](https://docs.docker.com/compose/install/)
- [Node](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/)

### 1. Clone

```sh
$ git@github.com:wesleyhf/pagarme-software-engineer-backend.git
```

### 1. Setup .env file

```sh
$ cp .env.example .env
```

### 3. Dependencies

```sh
$ yarn
```

### 4.Starting Docker

```sh
$ yarn docker:start
```

# Usage

### pgadmin4

URL: http://localhost:9000

```
Email Address: admin@admin.com.br
Password: pgsecret
```

> To change these values check your .env file