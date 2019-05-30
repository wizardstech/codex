# Codex

Create a blog with strapi (open source headless CMS) and gatsbyjs !

* [strapi](https://strapi.io)
* [gatsbyjs](https://www.gatsbyjs.org/)

## Requirements

* [docker](https://docs.docker.com/install/)
* [docker-compose](https://docs.docker.com/compose/install/)

Copy .env.dist to .env

## Environment variables

| **Environment variable** | **Project** | **Default**    | **Description**                               |
|--------------------------|-------------|----------------|-----------------------------------------------|
| SERVER_PORT              | Strapi      | 1338           | set the exposed strapi port                   |
| POSTGRES_USER            | Postgres    | root           | set the user of the postgres database         |
| POSTGRES_PASSWORD        | Postgres    | root           | set the password of the postgres database     |
| POSTGRES_DB              | Postgres    | codex-postgres | set the name of the postgres database         |
| POSTGRES_PORT            | Postgres    | 5667           | set the exposed port of the postgres database |
| BLOG_PORT                | Gatsbyjs    | 8082           | set the exposed port of the gastbyjs blog     |

## Install & launch

`docker-compose up`

If you kepts the default environmnet variables values, you can reach:

* strapi backend on [http://127.0.0.1:1338](http://localhost:1338)
* gatsbyjs blog on [http://127.0.0.1:8082](http://127.0.0.1:8082)

## Credits

A great thanks to these articles and their author(s) for helping us on this project:

* [https://blog.strapi.io/building-a-static-website-using-gatsby-and-strapi/](https://blog.strapi.io/building-a-static-website-using-gatsby-and-strapi/)
