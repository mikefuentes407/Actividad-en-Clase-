---
layout: ../../layouts/BaseLayout.astro
title: "Instalación de Astro"
description: "Primeros pasos para instalar Astro."
---
# Instalación de Astro

Antes de crear un proyecto con Astro, es importante verificar que el equipo cuente con los requisitos necesarios.

## Requisitos previos:

### Node.js

Astro funciona sobre Node.js, por lo que es necesario tener instalada una versión reciente.

Para comprobar si Node.js está instalado, abre una terminal y ejecuta:

```bash
node -v
```

Si aparece un número de versión, significa que Node.js está instalado correctamente.

### npm

npm es el gestor de paquetes que se instala junto con Node.js y permite descargar las dependencias del proyecto.

Puedes verificar su instalación con:

```bash
npm -v
```

### Editor de código

Se recomienda utilizar Visual Studio Code debido a sus herramientas para desarrollo web y soporte para Astro.

### Conexión a Internet

Es necesaria para descargar las dependencias y paquetes requeridos durante la instalación.

## Crear un proyecto Astro

Una vez verificados los requisitos, ejecuta el siguiente comando:

```bash
npm create astro@latest
```

El asistente solicitará información como el nombre del proyecto y la plantilla que deseas utilizar.

## Ingresar al proyecto

```bash
cd nombre-del-proyecto
```

## Instalar dependencias

```bash
npm install
```

## Ejecutar el proyecto

```bash
npm run dev
```

Después de ejecutar el comando, aparecerá una dirección similar a:

```text
http://localhost:4321
```

Abre esa dirección en tu navegador para visualizar el sitio web.

## Resultado esperado

Si todo se realizó correctamente, verás la página inicial de Astro funcionando en tu navegador y podrás comenzar a desarrollar tu proyecto.