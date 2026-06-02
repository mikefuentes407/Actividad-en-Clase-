---
layout: ../../layouts/BaseLayout.astro
title: "Deploy en Astro"
description: "Como usar deploy."
---

## Requisitos previos

Dirigirse en VS a package.json y en la parte de scripts, despues de astro poner:

 ```bash
"start": "astro dev",
```
Luego debajo de ese mismo poner: 

```bash
"deploy": "astro build && gh-pages -d dist"
```

ahora te diriges a astro.config.mjs en la parte de "export default defineConfig({" y justo debajo poner:

```bash
site: 'https://tu-hombre-de-usuario.github.io',
```

Despues debajo de ese mismo pones: 

```bash
base: '/Nombre-de-tu-repositorio',
```
No olvides el slash! (/)

## Instalacion de Deploy

Ahora tienes que hacer el siguiente paso en la terminal de VS:

 ```bash
npm install -D gh-pages
```

## Github

Luego te diriges a tu repositorio en Github
Vas a la parte de settings (configuraciones)
Luego a la seccion de pages
Buscas el apartado de build and deployment
en la parte de source miras que este en deploy from a branch (mas adelante usaremos github actions)
Por defecto en la parte de branch se pone gh-pages, si no lo tienes asi te toca hacerlo manualmente



## Visual Studio Code
Ahora entras a la terminal de github y pones:

```bash
npm run deploy
```
Luego vuelves a Github y ya tienes el link, puedes acceder dandole al link directo o en el boton de Visit site.