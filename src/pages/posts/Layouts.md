---
layout: ../../layouts/BaseLayout.astro
title: "Layouts de Astro"
description: "Como funcionan los layouts."
---

# Layouts

Los layouts son una herramienta que permite reutilizar una misma estructura en diferentes páginas de un sitio web. Gracias a ellos, no es necesario repetir elementos como el encabezado, el menú de navegación o el pie de página en cada archivo.

En este proyecto se utiliza un layout principal llamado **BaseLayout.astro**, el cual contiene los componentes que se muestran en todas las páginas del manual.

## ¿Para qué sirven?

Cuando un sitio tiene varias páginas, es común que compartan la misma apariencia. Los layouts ayudan a mantener esa consistencia y hacen que el código sea más fácil de mantener.

Por ejemplo, si se desea cambiar el diseño del encabezado, solo será necesario modificarlo una vez dentro del layout y el cambio se reflejará en todas las páginas.

## Ejemplo de Layout

```astro
---
import Header from "../components/Header.astro";
import Navigation from "../components/Navigation.astro";
import Footer from "../components/Footer.astro";
---

<Header />
<Navigation />

<main>
    <slot />
</main>

<Footer />
```

## ¿Qué es el slot?

El elemento `<slot />` indica el lugar donde se mostrará el contenido específico de cada página.

Por ejemplo, si una página tiene información sobre componentes y otra sobre instalación, ambas utilizarán el mismo layout, pero cada una mostrará un contenido diferente dentro del slot.

## Ventajas de los Layouts

* Evitan repetir código.
* Mantienen una estructura uniforme en todo el sitio.
* Facilitan la organización del proyecto.
* Permiten realizar cambios de manera rápida y sencilla.

## Uso en este proyecto

En este manual técnico, todas las páginas utilizan el mismo layout principal. Esto permite que el encabezado, el menú de navegación y el pie de página se mantengan iguales en cada sección, ofreciendo una experiencia más ordenada y agradable para el usuario.

Los layouts son una de las características más útiles de Astro, ya que ayudan a construir sitios web más organizados, reutilizables y fáciles de mantener.
