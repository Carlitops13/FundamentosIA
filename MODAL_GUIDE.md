## 📸 Guía Completa: Modal/Lightbox con Imágenes

Tu proyecto ya tiene un Modal completamente funcional. Aquí está cómo usarlo:

---

## 🎯 ¿Cómo funciona el Modal?

### El componente está en: `src/components/ImageModal.jsx`

**Características:**
✅ Click para abrir a pantalla completa
✅ Hover zoom suave (scale effect)
✅ Transiciones Framer Motion
✅ Responsive en todos los dispositivos
✅ Cierre al hacer click fuera o botón X

---

## 📋 3 Formas de Agregar Imágenes

### OPCIÓN 1: Importar imágenes (Recomendado ⭐)

**Paso 1:** Crear carpeta de assets
```bash
cd c:\Users\Stalin\Downloads\Web
mkdir -p src/assets
```

**Paso 2:** Copiar tus imágenes
```bash
# Windows PowerShell:
copy "C:\ruta\pca-clusters.png" src/assets/
copy "C:\ruta\dendrogram.png" src/assets/
copy "C:\ruta\dbscan-density.png" src/assets/
```

**Paso 3:** Actualizar `src/components/Visualizations.jsx`

```jsx
// 🔝 Al inicio del archivo, agregar imports:
import pcaImage from '@/assets/pca-clusters.png'
import dendrogramImage from '@/assets/dendrogram.png'
import dbscanImage from '@/assets/dbscan-density.png'

// 📊 Luego, en el array visualizations:
const visualizations = [
    {
        id: 1,
        title: 'Clusters en el plano PCA',
        description: 'Validating the K-Means model...',
        figure: 'FIG_01: PCA_SCATTER.PNG',
        placeholder: '[INSERT_GRAPH_HERE: PCA Clusters]',
        src: pcaImage  // ✅ Agregar la imagen importada
    },
    {
        id: 2,
        title: 'Dendrograma',
        description: 'Hierarchical clustering tree...',
        figure: 'FIG_02: DENDROGRAM.PNG',
        placeholder: '[INSERT_GRAPH_HERE: Dendrogram]',
        src: dendrogramImage  // ✅
    },
    {
        id: 3,
        title: 'DBSCAN Density Areas',
        description: 'Visualizing density areas...',
        figure: 'FIG_03: DBSCAN_DENSITY.PNG',
        placeholder: '[INSERT_GRAPH_HERE: DBSCAN]',
        src: dbscanImage  // ✅
    },
]
```

### OPCIÓN 2: Usar carpeta 'public'

**Paso 1:** Copiar imágenes a carpeta pública
```bash
mkdir -p public/images
copy "C:\ruta\*.png" public/images/
```

**Paso 2:** Actualizar Visualizations.jsx
```jsx
const visualizations = [
    {
        id: 1,
        src: '/images/pca-clusters.png'  // ✅ Ruta pública
    },
    // ...
]
```

### OPCIÓN 3: URLs externas

```jsx
const visualizations = [
    {
        id: 1,
        src: 'https://ejemplo.com/images/pca-clusters.png'  // ✅ URL
    },
    // ...
]
```

---

## 🖼️ Cómo funciona el Modal paso a paso

### 1️⃣ Click en una imagen

```jsx
// En Visualizations.jsx
const handleImageClick = (visualization) => {
    setSelectedImage({
        title: visualization.title,
        description: visualization.description,
        placeholder: visualization.placeholder,
        src: visualization.src,
        type: visualization.src ? 'image' : 'placeholder'  // Tipo
    })
}

// En cada tarjeta:
<motion.div
    onClick={() => handleImageClick(viz)}  // ← Click abre modal
    className="cursor-pointer"
>
    {/* Tarjeta */}
</motion.div>
```

### 2️⃣ Modal se abre

```jsx
// En ImageModal.jsx
<AnimatePresence>
    {isOpen && (
        <motion.div
            initial={{ opacity: 0 }}         // Inicia transparente
            animate={{ opacity: 1 }}         // Se muestra
            exit={{ opacity: 0 }}            // Se desvanece
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        >
            {/* Contenido */}
        </motion.div>
    )}
</AnimatePresence>
```

### 3️⃣ Mostrar imagen o placeholder

```jsx
{image && image.type === 'image' ? (
    <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-contain"
    />
) : (
    <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
            <span className="text-on-surface-variant">
                {image?.placeholder}
            </span>
            <p className="text-on-surface-variant text-sm mt-2">
                {image?.description}
            </p>
        </div>
    </div>
)}
```

### 4️⃣ Cierre

```jsx
// Click en X o fuera del modal
<motion.button
    onClick={onClose}
    className="absolute top-4 right-4"
>
    <span className="material-symbols-outlined">close</span>
</motion.button>
```

---

## 🎬 Animaciones del Modal

### Fade Background
```jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
exit={{ opacity: 0 }}
```

### Scale Content
```jsx
initial={{ scale: 0.9, opacity: 0 }}
animate={{ scale: 1, opacity: 1 }}
exit={{ scale: 0.9, opacity: 0 }}
```

### Resultado: Transición suave de entrada y salida

---

## 🎨 Personalizar el Modal

### Cambiar color de fondo oscuro

`src/components/ImageModal.jsx`:
```jsx
// Línea ~27, cambiar de:
className="fixed inset-0 bg-black/80"

// A:
className="fixed inset-0 bg-surface/95"
```

### Agregar animación de bounce

```jsx
<motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ 
        scale: 1, 
        opacity: 1,
        transition: { 
            type: "spring", 
            stiffness: 200, 
            damping: 20 
        }
    }}
>
```

### Aumentar blur del fondo

```jsx
// De:
className="backdrop-blur-sm"

// A:
className="backdrop-blur-md"  // Más desenfoque
```

---

## 📱 Hacer que el Modal sea Responsive

Edita `src/components/ImageModal.jsx`:

```jsx
<motion.div
    className="relative max-w-4xl max-h-[90vh] w-full 
               md:max-w-5xl lg:max-w-6xl  // Ajustar para pantallas grandes
               bg-surface-container-high rounded-lg 
               overflow-hidden p-4 md:p-0"  // Padding en mobile
>
```

---

## 🔍 Agregar Zoom Manual en el Modal

```jsx
import { useState } from 'react'

export const ImageModal = ({ isOpen, image, onClose }) => {
    const [zoom, setZoom] = useState(1)

    return (
        <motion.div>
            {/* Controles de zoom */}
            <div className="flex gap-2 p-4 border-b border-outline-variant">
                <button onClick={() => setZoom(z => Math.max(z - 0.2, 1))}>
                    <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="text-on-surface-variant">{Math.round(zoom * 100)}%</span>
                <button onClick={() => setZoom(z => Math.min(z + 0.2, 3))}>
                    <span className="material-symbols-outlined">add</span>
                </button>
                <button onClick={() => setZoom(1)}>Reset</button>
            </div>

            {/* Imagen zoomeable */}
            <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain"
                style={{ scale: zoom }}
                drag
                dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
            />
        </motion.div>
    )
}
```

---

## 🔄 Agregar Navegación Entre Imágenes

```jsx
const [currentIndex, setCurrentIndex] = useState(0)

export const Visualizations = () => {
    const nextImage = () => {
        setCurrentIndex((i) => (i + 1) % visualizations.length)
        setSelectedImage(visualizations[(currentIndex + 1) % visualizations.length])
    }

    const prevImage = () => {
        setCurrentIndex((i) => (i - 1 + visualizations.length) % visualizations.length)
        setSelectedImage(visualizations[(currentIndex - 1 + visualizations.length) % visualizations.length])
    }

    return (
        <ImageModal
            isOpen={!!selectedImage}
            image={selectedImage}
            onClose={() => setSelectedImage(null)}
            onNext={nextImage}
            onPrev={prevImage}
        />
    )
}
```

Luego en `ImageModal.jsx`:
```jsx
<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4">
    <button onClick={onPrev} className="p-2 bg-surface rounded">
        <span>←</span>
    </button>
    <button onClick={onNext} className="p-2 bg-surface rounded">
        <span>→</span>
    </button>
</div>
```

---

## ✅ Checklist de Verificación

- [ ] Copié mis imágenes a `src/assets/`
- [ ] Importé las imágenes en `Visualizations.jsx`
- [ ] Actualicé el array `visualizations` con las rutas correctas
- [ ] Ejecuté `npm run dev`
- [ ] Veo las imágenes en las tarjetas de visualizaciones
- [ ] Puedo hacer click para abrir el modal
- [ ] El modal se muestra correctamente
- [ ] Puedo cerrar el modal con X o click fuera
- [ ] La animación es suave

---

## 🐛 Troubleshooting

### Las imágenes no aparecen

**Solución:**
```bash
# 1. Verifica que los archivos existan
dir src/assets/

# 2. Verifica la ruta en Visualizations.jsx
# 3. Reinicia el servidor
npm run dev

# 4. Abre DevTools (F12) y busca errores en Console
```

### El modal no abre

**Solución:**
```jsx
// Verifica que handleImageClick está llamándose:
console.log('Clicked:', visualization)
setSelectedImage({...})

// Verifica que ImageModal recibe props
<ImageModal isOpen={!!selectedImage} image={selectedImage} onClose={...} />
```

### Las imágenes se ven pixeladas

**Solución:**
- Asegúrate de que tus imágenes originales son de alta resolución (min 1920px ancho)
- Comprime pero no hagas muy pequeña la resolución

### El modal no se cierra

**Solución:**
```jsx
// Verifica que onClose está conectado:
onClick={onClose}  // ← Debe estar

// O usa keyboard:
useEffect(() => {
    const handleEsc = (e) => {
        if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
}, [onClose])
```

---

## 📊 Ejemplo Completo de Uso

**Archivo actualizado:** `src/components/Visualizations.jsx`

```jsx
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ImageModal from './ImageModal'
import { containerVariants, itemVariants } from '@/utils/animations'

// ✅ IMPORTAR LAS IMÁGENES
import pcaImage from '@/assets/pca-clusters.png'
import dendrogramImage from '@/assets/dendrogram.png'
import dbscanImage from '@/assets/dbscan-density.png'

export const Visualizations = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    // ✅ ACTUALIZAR VISUALIZATIONS CON IMÁGENES
    const visualizations = [
        {
            id: 1,
            title: 'Clusters en el plano PCA',
            description: 'Validating the K-Means model with colors...',
            figure: 'FIG_01: PCA_SCATTER.PNG',
            placeholder: '[INSERT_GRAPH_HERE: PCA Clusters]',
            src: pcaImage  // ✅ Imagen importada
        },
        {
            id: 2,
            title: 'Dendrograma',
            description: 'Hierarchical clustering tree...',
            figure: 'FIG_02: DENDROGRAM.PNG',
            placeholder: '[INSERT_GRAPH_HERE: Dendrogram]',
            src: dendrogramImage  // ✅
        },
        {
            id: 3,
            title: 'DBSCAN Density Areas',
            description: 'Visualizing density areas...',
            figure: 'FIG_03: DBSCAN_DENSITY.PNG',
            placeholder: '[INSERT_GRAPH_HERE: DBSCAN]',
            src: dbscanImage  // ✅
        },
    ]

    const handleImageClick = (visualization) => {
        setSelectedImage({
            title: visualization.title,
            description: visualization.description,
            placeholder: visualization.placeholder,
            src: visualization.src,
            type: visualization.src ? 'image' : 'placeholder'
        })
    }

    return (
        <section id="visualizations" className="space-y-8">
            {/* ... código anterior ... */}

            {/* Grid de visualizaciones */}
            <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                {visualizations.map((viz) => (
                    <motion.div
                        key={viz.id}
                        className="bg-surface border border-outline-variant rounded-lg overflow-hidden cursor-pointer"
                        onClick={() => handleImageClick(viz)}  // ✅ Click abre modal
                        whileHover={{ borderColor: '#00dce5' }}
                    >
                        {/* Contenido de la tarjeta */}
                        {/* ... código anterior ... */}
                    </motion.div>
                ))}
            </motion.div>

            {/* ✅ MODAL CON IMAGEN */}
            <ImageModal
                isOpen={!!selectedImage}
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </section>
    )
}

export default Visualizations
```

---

¡Ya está! Tu Modal está 100% funcional. Solo falta agregar las imágenes 🎉

Próximo paso: `npm run dev` y ¡a ver cómo queda!
