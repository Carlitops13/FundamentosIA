## 🎨 Guía de Personalización - Ejemplos Prácticos

### 1️⃣ Cambiar Colores Globales

**Archivo:** `tailwind.config.js`

```javascript
// Ejemplo: Cambiar de tema azul a rosa
theme: {
    extend: {
        colors: {
            'primary-fixed-dim': '#FF006E',      // Rosa fuerte
            'primary': '#FB5FB5',                // Rosa suave
            'primary-container': '#FFB7D7',      // Rosa muy suave
            'surface': '#1A1A2E',                // Fondo más oscuro
        }
    }
}
```

### 2️⃣ Agregar Nuevas Animaciones

**Archivo:** `src/utils/animations.js`

```javascript
// Nueva animación: rotar en
export const rotateIn = {
    initial: { opacity: 0, rotate: -90 },
    animate: { opacity: 1, rotate: 0 },
    transition: { duration: 0.8, ease: "easeOut" }
}

// Nueva animación: elasticidad
export const elastic = {
    initial: { opacity: 0, scale: 0.5 },
    animate: { opacity: 1, scale: 1 },
    transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 10 
    }
}
```

Luego úsalas en componentes:

```jsx
import { rotateIn } from '@/utils/animations'

<motion.div variants={rotateIn} initial="initial" whileInView="animate">
    Contenido
</motion.div>
```

### 3️⃣ Personalizar Tipografía

**Archivo:** `tailwind.config.js`

```javascript
// Agregar nuevos pesos de fuente
fontSize: {
    'xs': ['12px', { lineHeight: '16px' }],
    'title-xl': ['32px', { lineHeight: '40px', fontWeight: '700' }],
    'subtitle': ['18px', { lineHeight: '28px', fontWeight: '600' }],
},

// Personalizar fuentes
fontFamily: {
    'display': ['Poppins', 'sans-serif'],  // Nueva fuente
    'mono': ['Fira Code', 'monospace'],    // Nueva monoespaciada
}
```

### 4️⃣ Agregar Nuevas Secciones

**Paso 1:** Crear componente

```jsx
// src/components/NewSection.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/utils/animations'

export const NewSection = () => {
    return (
        <motion.section
            id="new-section"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
        >
            <motion.h2 variants={itemVariants}>
                Mi Nueva Sección
            </motion.h2>
            
            <motion.p variants={itemVariants}>
                Contenido aquí...
            </motion.p>
        </motion.section>
    )
}

export default NewSection
```

**Paso 2:** Agregar a App.jsx

```jsx
import NewSection from './components/NewSection'

function App() {
    return (
        <main>
            {/* ... otras secciones */}
            <NewSection />
            {/* ... */}
        </main>
    )
}
```

### 5️⃣ Crear Cards con Efectos Avanzados

```jsx
<motion.div
    className="bg-surface-container border border-outline-variant rounded-lg p-6"
    whileHover={{
        borderColor: '#00dce5',
        boxShadow: '0 0 30px rgba(0, 220, 229, 0.4)',
        y: -8,
        transition: { duration: 0.3 }
    }}
    whileTap={{ scale: 0.98 }}
>
    {/* Contenido */}
</motion.div>
```

### 6️⃣ Agregar Formularios Interactivos

```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Formulario:', formData)
        // Enviar a API...
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="space-y-4"
        >
            {Object.keys(formData).map((field) => (
                <motion.input
                    key={field}
                    type={field === 'email' ? 'email' : 'text'}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={(e) => setFormData({
                        ...formData,
                        [field]: e.target.value
                    })}
                    className="w-full bg-surface-container border border-outline-variant text-on-surface px-4 py-2 rounded"
                    whileFocus={{ borderColor: '#00dce5' }}
                />
            ))}
            
            <motion.button
                type="submit"
                className="bg-primary-fixed-dim text-on-primary-fixed px-6 py-3 rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                Enviar
            </motion.button>
        </motion.form>
    )
}
```

### 7️⃣ Agregar Contador Animado

```jsx
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

export const AnimatedCounter = ({ value, duration = 2 }) => {
    const [count, setCount] = useState(0)
    const { ref, inView } = useInView({ triggerOnce: true })

    useEffect(() => {
        if (inView) {
            const increment = value / (duration * 60)
            let current = 0
            
            const timer = setInterval(() => {
                current += increment
                if (current >= value) {
                    setCount(value)
                    clearInterval(timer)
                } else {
                    setCount(Math.floor(current))
                }
            }, 1000 / 60)
            
            return () => clearInterval(timer)
        }
    }, [inView, value, duration])

    return (
        <motion.div ref={ref} className="text-4xl font-bold text-primary">
            {count.toLocaleString()}
        </motion.div>
    )
}
```

### 8️⃣ Crear Tabs/Pestañas

```jsx
import { useState } from 'react'
import { motion } from 'framer-motion'

export const Tabs = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0)

    return (
        <div>
            {/* Tab buttons */}
            <div className="flex gap-4 border-b border-outline-variant">
                {tabs.map((tab, index) => (
                    <motion.button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`px-6 py-3 font-label-caps transition-colors ${
                            activeTab === index 
                                ? 'text-primary border-b-2 border-primary-fixed-dim' 
                                : 'text-on-surface-variant'
                        }`}
                        whileHover={{ color: '#e9feff' }}
                    >
                        {tab.label}
                    </motion.button>
                ))}
            </div>

            {/* Tab content */}
            <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="py-6"
            >
                {tabs[activeTab].content}
            </motion.div>
        </div>
    )
}

// Uso:
<Tabs tabs={[
    { label: 'Tab 1', content: <p>Contenido 1</p> },
    { label: 'Tab 2', content: <p>Contenido 2</p> },
]} />
```

### 9️⃣ Agregar Dark/Light Mode Toggle

```jsx
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [isDark])

    return (
        <motion.button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-surface-container"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <motion.span
                className="material-symbols-outlined"
                animate={{ rotate: isDark ? 0 : 180 }}
                transition={{ duration: 0.3 }}
            >
                {isDark ? 'light_mode' : 'dark_mode'}
            </motion.span>
        </motion.button>
    )
}
```

### 🔟 Agregar Scrollbar Personalizado

**Archivo:** `src/styles/globals.css`

```css
::-webkit-scrollbar {
    width: 12px;
}

::-webkit-scrollbar-track {
    background: rgba(5, 20, 36, 0.5);
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #00dce5, #00f5ff);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #00f5ff, #63f7ff);
}
```

---

## 📊 Ejemplos de Componentes Comunes

### Accordion

```jsx
const [expanded, setExpanded] = useState(false)

<motion.div className="border border-outline-variant rounded">
    <motion.button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-4 flex justify-between items-center"
    >
        <span>Pregunta</span>
        <motion.span animate={{ rotate: expanded ? 180 : 0 }}>
            ▼
        </motion.span>
    </motion.button>
    
    <motion.div
        initial={false}
        animate={{ height: expanded ? 'auto' : 0 }}
        className="overflow-hidden"
    >
        <div className="p-4">Respuesta aquí</div>
    </motion.div>
</motion.div>
```

### Badge/Etiqueta Animada

```jsx
<motion.span
    className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed-dim/10 border border-primary-fixed-dim rounded-full"
    whileHover={{ scale: 1.05 }}
    animate={{ boxShadow: '0 0 15px rgba(0, 220, 229, 0.3)' }}
>
    <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
    Nueva sección
</motion.span>
```

### Loading Spinner

```jsx
<motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
    className="w-8 h-8 border-2 border-primary-fixed-dim border-t-transparent rounded-full"
/>
```

---

## 🚀 Deploy & Optimización

### Optimizar Imágenes

```bash
# Instalar herramienta de optimización
npm install --save-dev imagemin

# Luego optimizar:
npx imagemin src/assets/ --out-dir=src/assets-optimized/
```

### Pre-renderizar HTML

```bash
npm install --save-dev prerender-spa-plugin

# En vite.config.js:
import PrerenderSpaPlugin from 'prerender-spa-plugin'

export default {
    plugins: [
        react(),
        new PrerenderSpaPlugin({
            staticDir: path.resolve(__dirname, 'dist'),
            routes: ['/', '/visualizations', '/results']
        })
    ]
}
```

### Lazy Loading de Componentes

```jsx
import { lazy, Suspense } from 'react'

const Results = lazy(() => import('./components/Results'))
const Conclusions = lazy(() => import('./components/Conclusions'))

function App() {
    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Results />
            <Conclusions />
        </Suspense>
    )
}
```

---

¡Con estos ejemplos podrás personalizar completamente tu Landing Page! 🎨
