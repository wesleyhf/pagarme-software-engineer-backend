# Update (2019-11-27)

**pt-BR**

Eu agradeço por todo o aprendizado/atenção que recebi pela [Pagar.me](https://github.com/pagarme), porém o "timing" não estava sincronizados para ambos os lados. Obrigado novamente!

**en**

I'm thankful for all the knowledge/attention that I received from [Pagar.me](https://github.com/pagarme) but the "timing" was not synced for both sides. Thank you again!

# pagar.me - Software Engineer Back-end Challenge :sparkles:

<a href="https://github.com/pagarme/vagas/tree/master/desafios/software-engineer-backend" target="_blank">Challenge description (PT-BR)</a>

# Table of Contents

- [My Checklist :sweat_smile:](https://github.com/wesleyhf/pagarme-software-engineer-backend/issues/1)
- [API Documentation](https://github.com/wesleyhf/pagarme-software-engineer-backend/wiki/API-Documentation)
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

3. Build Docker Images

Check if your `./docker` file has permission to execute, if not run: `chmox +x ./docker`

```sh
$ ./docker build
```

4. Run migrations/seeders

```sh
$ ./docker migrate
$ ./docker seed
```

5. Start the containers

```sh
$ ./docker dev
# use ./docker down to stop all the containers
```

6. Important :exclamation:

Now your environment is ready to develpoment!

Things you need to know:

- Our API is [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) and all responses are in [JSON](http://www.json.org/) format

Endpoint: http://pagarme.localhost/

- All endpoints needs an authentication, check below:

To set an authentication you need the `clientId` key on [Request Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers), e.g:

```
clientId:CLIENT_ID
```

To help you on this journey:

- Check out our [API Documentation](https://github.com/wesleyhf/pagarme-software-engineer-backend/wiki/API-Documentation)

- You can use our [Postman Collection](https://learning.getpostman.com/docs/postman/collections/intro-to-collections/), check the `postman.json`

# Testing

**Check if you ran the migration command `./docker migrate`**

```sh
$ ./docker test
```
