# React 19 Jobs

Plataforma web para exploracion y publicacion de ofertas laborales orientadas al ecosistema React, desarrollada con React 19, Tailwind CSS y React Router.

## Tecnologias

- React 19
- React Router v8
- React Icons
- Tailwind CSS v4
- Vite

## Estructura de la Aplicacion

- `src/App.jsx`: Configuracion central del enrutador de la aplicacion (`createBrowserRouter`, `RouterProvider`).
- `src/layouts/MainLayout.jsx`: Plantilla base con barra de navegacion (`Navbar`) y punto de montaje (`Outlet`) para las vistas.
- `src/pages/HomePage.jsx`: Pagina principal compuesta por Hero, HomeCards, listado preliminar de ofertas y llamada a la accion.
- `src/pages/JobsPage.jsx`: Pagina de exploracion completa de empleos.
- `src/pages/NotFoundPage.jsx`: Manejo de rutas inexistentes (404) con opcion de retorno al inicio.
- `src/components/JobListing.jsx`: Componente de tarjeta de empleo individual con gestion de estado local para expandir o colapsar la descripcion.
- `src/components/JobListings.jsx`: Contenedor para la presentacion y renderizado iterativo de empleos.
- `src/components/Navbar.jsx`: Barra de navegacion superior integrada con enrutamiento SPA mediante enlaces declarativos.
- `src/components/HomeCards.jsx`: Secciones de acceso directo para candidatos y reclutadores.
- `src/jobs.json`: Estructura de datos JSON con la informacion detallada de las ofertas laborales.

## Cambios Implementados

- Arquitectura de Enrutamiento: Sustitucion de la vista monolítica previa en `App.jsx` por un sistema de rutas declarativo utilizando React Router (`createRoutesFromElements`, `Route`, `RouterProvider`).
- Navegacion SPA: Reemplazo de enlaces tradicionales `<a>` con referencias a archivos HTML estaticos por componentes `<Link>` para evitar recargas completas del navegador.
- Modularizacion de Vistas: Segmentacion del contenido en componentes de pagina dedicados dentro del directorio `src/pages/` y encapsulamiento del layout global en `src/layouts/`.
- Interactividad en Componentes: Incorporacion de `useState` en `JobListing` para la alternancia de lectura ("Mas" / "Menos") de la descripcion del puesto.
- Integracion de Iconografia: Incorporacion del paquete `react-icons` para senalizacion visual de ubicaciones (`FaMapMarkerAlt`) y alertas de error (`FaExclamationTriangle`).
- Centralizacion de Datos: Extraccion de ofertas de trabajo hacia el archivo `src/jobs.json`.

## Puesta en Marcha

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/Brayan-Stiven-Munera-Teran/React19-jobs.git
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Iniciar entorno de desarrollo:
   ```bash
   npm run dev
   ```
4. Generar compilacion para produccion:
   ```bash
   npm run build
   ```
