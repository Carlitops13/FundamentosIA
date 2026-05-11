# Persona Lab - React Migration

Landing page de análisis de perfiles de personalidad migrada de HTML/CSS a React con Tailwind CSS y Framer Motion.

## 🎯 Características

✨ **Componentes Funcionales React**
- Arquitectura modular y escalable
- Separación por secciones (Header, Hero, Methodology, TechnicalFlow, Visualizations, Results, Conclusions, Footer)

🎬 **Animaciones Avanzadas con Framer Motion**
- Fade-in y Slide-up en scroll
- Hover effects con elevación y brillo en tarjetas
- Efectos de escala y transiciones suaves
- Stagger animations para listas

🖼️ **Modal/Lightbox para Imágenes**
- Click para ampliar gráficas a pantalla completa
- Hover effects con zoom suave (scale)
- Modal responsive y accesible

📊 **Contenido Específico**
- Metodología: Normalización → PCA → Método del Codo (k=4)
- Resultados: 4 perfiles (Extrovertido, Sociable, Reservado, Introvertido)
- Visualizaciones con placeholders para imágenes locales
- Recomendaciones y conclusiones

## 📁 Estructura del Proyecto

```
src/
├── App.jsx                          # Componente principal
├── main.jsx                         # Punto de entrada
├── styles/
│   └── globals.css                  # Estilos globales y animaciones
├── components/
│   ├── Header.jsx                   # Navegación
│   ├── Hero.jsx                     # Sección introducción
│   ├── Methodology.jsx              # Algoritmos explicados
│   ├── TechnicalFlow.jsx            # Flujo técnico paso a paso
│   ├── Visualizations.jsx           # Gráficas con modal
│   ├── Results.jsx                  # Los 4 perfiles de personalidad
│   ├── Conclusions.jsx              # Conclusiones y recomendaciones
│   ├── Footer.jsx                   # Pie de página
│   └── ImageModal.jsx               # Modal/Lightbox
└── utils/
    └── animations.js                # Configuraciones de animaciones

Archivos de configuración:
├── package.json                     # Dependencias
├── tailwind.config.js              # Configuración de Tailwind
├── postcss.config.js               # Configuración de PostCSS
├── vite.config.js                  # Configuración de Vite
└── index.html                      # HTML principal
```

## 🚀 Instalación

### 1. Clonar o descargar el proyecto

```bash
cd c:\Users\Stalin\Downloads\Web
```

### 2. Instalar dependencias

```bash
npm install
```

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Se abrirá automáticamente en http://localhost:3000

### 4. Compilar para producción

```bash
npm run build
```

## 📝 Cómo insertar tus imágenes

### Paso 1: Coloca tus archivos de imagen
```
src/
├── assets/
    ├── pca-clusters.png          # Gráfica PCA
    ├── dendrogram.png            # Dendrograma
    └── dbscan-density.png        # DBSCAN
```

### Paso 2: Actualiza el componente Visualizations.jsx

Busca el array `visualizations` y actualiza los campos `src`:

```jsx
const visualizations = [
    {
        id: 1,
        title: 'Clusters en el plano PCA',
        // ... otros campos
        src: '/src/assets/pca-clusters.png'  // ← Actualizar aquí
    },
    // ... más visualizaciones
]
```

O usa rutas de importación:

```jsx
import pcaImage from '@/assets/pca-clusters.png'

const visualizations = [
    {
        // ...
        src: pcaImage
    },
    // ...
]
```

## 🎨 Personalización

### Cambiar Colores

Edita el archivo `tailwind.config.js` en la sección `colors`:

```js
colors: {
    'primary-fixed-dim': '#00dce5',  // Color primario
    'surface': '#051424',            // Fondo
    // ... más colores
}
```

### Cambiar Fonts

Los tipos de letra están definidos en `tailwind.config.js`:

```js
fontFamily: {
    'body-base': ['Inter', 'sans-serif'],
    'code-block': ['JetBrains Mono', 'monospace'],
}
```

### Personalizar Animaciones

Edita `src/utils/animations.js` para ajustar timing, easing, etc.:

```js
export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }  // Ajustar aquí
}
```

## 🔧 Configuración de Tailwind

El proyecto utiliza un tema personalizado con los colores del design system original. 

**Dark Mode**: Activo por defecto en el archivo `index.html`:

```html
<html lang="es" class="dark">
```

## 📦 Dependencias Principales

- **React 18.2.0**: Framework principal
- **Framer Motion 10.16.4**: Animaciones avanzadas
- **Tailwind CSS 3.3.0**: Estilos
- **Vite 4.4.0**: Build tool (reemplaza Create React App)

## 🌐 Deploy

### Vercel (recomendado)

```bash
npm run build
# Subir la carpeta 'dist' a Vercel
```

### Netlify

```bash
npm run build
# Conectar repositorio a Netlify o drag & drop la carpeta 'dist'
```

### GitHub Pages

```bash
npm run build
# Usar gh-pages package o configuración de GitHub Actions
```

## 📋 Placeholders Pendientes

Reemplaza los siguientes placeholders con tu contenido:

| Placeholder | Ubicación | Descripción |
|---|---|---|
| `[INSERT_SUBJECT_HERE]` | Footer | Nombre de la asignatura |
| `[INSERT_TEAM_MEMBERS_HERE]` | Footer | Nombres del equipo |
| `[INSERT_GRAPH_HERE: ...]` | Visualizations | Gráficas locales |
| Imágenes | `src/assets/` | Tus archivos PNG/JPG |

## 🎓 Estructura de Componentes React

Cada componente está construido con:

```jsx
import React from 'react'
import { motion } from 'framer-motion'
import { animationVariants } from '@/utils/animations'

export const ComponentName = () => {
    return (
        <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            {/* Contenido */}
        </motion.section>
    )
}

export default ComponentName
```

**Características estándar:**
- ✨ Animaciones on-scroll con Framer Motion
- 🎯 Intersection Observer (margin: "-100px" para trigger temprano)
- 📱 Responsive design con Tailwind
- ♿ Accesibilidad básica

## 🐛 Troubleshooting

### Las imágenes no cargan

Asegúrate de que:
1. Los archivos están en la carpeta `src/assets/`
2. La ruta es correcta en `Visualizations.jsx`
3. Usar rutas relativas o importaciones

### Las animaciones no funcionan

Verifica que:
1. Framer Motion está instalado (`npm list framer-motion`)
2. Los componentes están dentro de un viewport visible
3. `whileInView` tiene `viewport={{ once: true }}`

### Tailwind no aplica estilos

Soluciones:
1. Reinicia el servidor de desarrollo
2. Limpia la carpeta `.next` o `dist`
3. Verifica que el archivo CSS está importado en `App.jsx`

## 📚 Recursos

- [React Docs](https://react.dev)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Vite Docs](https://vitejs.dev/)

## 📄 Licencia

Este proyecto es para fines educativos.

---

**¡Listo para usar!** 🚀

Si encuentras problemas, asegúrate de:
1. Tener Node.js 16+ instalado
2. Haber ejecutado `npm install`
3. Estar en la carpeta del proyecto
4. Usar `npm run dev` para desarrollo
