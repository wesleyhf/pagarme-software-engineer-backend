# pagar.me - Software Engineer Back-end Challenge :sparkles:

<a href="https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend" target="_blank">Challenge description (PT-BR)</a>

# Table of Contents

- [My Checklist :sweat_smile:](https://github.com/wesleyhf/pagarme-software-engineer-backend/issues/1)
- [Documentation](https://github.com/wesleyhf/pagarme-software-engineer-backend/wiki/documentation)
- [Developing](#developing)
- [Testing](#testing)


# Developing

Just follow the steps but if found a :beetle: drop your comments on [Issues section.](https://github.com/wesleyhf/pagarme-software-engineer-backend/issues)

## Dependencies

- <a href="https://docs.docker.com/install/" target="_blank">Docker</a>
- <a href="https://docs.docker.com/compose/install/" target="_blank">Docker Composer</a>

## Setup

1. Clone the repository

```sh
$ git clone git@github.com:wesleyhf/pagarme-software-engineer-backend.git
```

2. Setup .env file

```sh
$ cp .env.example .env
```

3. Build Docker images

Check if your `./docker` file has permission to execute, if not run: `chmox +x ./docker`

```sh
$ ./docker build
```

4. Run migrations/seeders

```sh
$ ./docker migrate
$ ./docker seed
```

5. Let's play!

```sh
$ ./docker dev
# use ./docker down to stop all the containers
```

Now you can access http://pagarme.localhost/ and starting your development.

To help you on this journey:

- Check out our [Documentation](https://github.com/wesleyhf/pagarme-software-engineer-backend/wiki/documentation)

- You can use our [Postman Collection](https://learning.getpostman.com/docs/postman/collections/intro-to-collections/), check the `postman.json`.

# Testing

**Check if you ran the migration command `./docker migrate`**

```sh
$ ./docker test
```
