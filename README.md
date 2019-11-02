# Pagar.me Software Engineer Back-end Challenge :sparkles:

<a href="https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend" target="_blank">Challenge description (PT-BR)</a>

# Installation

:exclamation: **Dependencies** :exclamation:
- <a href="https://docs.docker.com/install/" target="_blank">Docker</a>
- <a href="https://docs.docker.com/compose/install/" target="_blank">Docker Composer</a>
- <a href="https://nodejs.org/en/download/" target="_blank">Node</a>
- <a href="https://yarnpkg.com/en/" target="_blank">Yarn</a>

### 1. Clone

```sh
$ git@github.com:wesleyhf/pagarme-software-engineer-backend.git
```

### 2. Setup .env file

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

### 5. Run migrations

```sh
$ yarn sequelize db:migrate
```

# Usage

### pgadmin4

URL: http://localhost:9000

```
Email Address: admin@admin.com.br
Password: pgsecret
```

> To change these values check your .env file