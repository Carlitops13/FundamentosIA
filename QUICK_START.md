## 🚀 GUÍA DE INICIO RÁPIDO

Tu proyecto React ya está completo. Aquí está el plan para empezar:

### ✅ Lo que ya está hecho:

✨ **Componentes React** (8 componentes principales)
- Header con navegación y mobile menu
- Hero con información general
- Methodology con las 4 algoritmos (K-Means, DBSCAN, PCA, Hierarchical)
- Technical Flow con los 4 pasos del proceso
- Visualizations con placeholders y modal/lightbox
- Results con los 4 perfiles de personalidad
- Conclusions con recomendaciones
- Footer

🎬 **Animaciones Framer Motion**
- Fade-in y slide-up al hacer scroll
- Hover effects con elevación en tarjetas
- Scale effects en las imágenes
- Stagger animations en listas
- Modal smooth con backdrop blur

🎨 **Estilos Tailwind CSS**
- Tema oscuro completo
- Colores personalizados del diseño original
- Tipografía (Inter, JetBrains Mono)
- Responsive design (mobile, tablet, desktop)
- Efecto glassmorphism en UI

🖼️ **Modal/Lightbox**
- Click en imágenes para ver a pantalla completa
- Hover zoom effect (scale suave)
- Transiciones smooth con Framer Motion
- Accesible y responsive

---

### 📋 PRÓXIMOS PASOS (5 minutos):

#### Paso 1: Instalar dependencias
```bash
cd c:\Users\Stalin\Downloads\Web
npm install
```

#### Paso 2: Iniciar servidor de desarrollo
```bash
npm run dev
```
→ Se abrirá automáticamente en http://localhost:3000

#### Paso 3: Agregar tus imágenes (Opcional pero recomendado)
```bash
# Crear carpeta de assets
mkdir -p src/assets

# Copiar tus imágenes
cp /ruta/a/pca-clusters.png src/assets/
cp /ruta/a/dendrogram.png src/assets/
cp /ruta/a/dbscan-density.png src/assets/
```

#### Paso 4: Actualizar rutas de imágenes en Visualizations.jsx
En `src/components/Visualizations.jsx`, busca:
```jsx
const visualizations = [
    {
        id: 1,
        title: 'Clusters en el plano PCA',
        // ... otros campos
        src: null  // ← Cambiar a tu ruta
    },
    // ...
]
```

A:
```jsx
import pcaImage from '@/assets/pca-clusters.png'

const visualizations = [
    {
        id: 1,
        title: 'Clusters en el plano PCA',
        // ...
        src: pcaImage  // ← O usar: '/images/pca-clusters.png'
    },
    // ...
]
```

#### Paso 5: Personalizar placeholders del footer (Opcional)
En `src/components/Footer.jsx`:
- `[INSERT_SUBJECT_HERE]` → Tu nombre de asignatura
- `[INSERT_TEAM_MEMBERS_HERE]` → Nombres del equipo

---

### 📁 Estructura de carpetas:

```
Web/
├── src/
│   ├── components/          # 8 componentes React
│   │   ├── Header.jsx
│   │   ├── Hero.jsx
│   │   ├── Methodology.jsx
│   │   ├── TechnicalFlow.jsx
│   │   ├── Visualizations.jsx
│   │   ├── Results.jsx
│   │   ├── Conclusions.jsx
│   │   ├── Footer.jsx
│   │   └── ImageModal.jsx   # Modal/Lightbox
│   ├── styles/
│   │   └── globals.css      # Estilos globales
│   ├── utils/
│   │   └── animations.js    # Configuración Framer Motion
│   ├── assets/              # Carpeta para tus imágenes
│   ├── App.jsx              # Componente principal
│   └── main.jsx             # Punto de entrada
├── index.html               # HTML principal
├── package.json             # Dependencias
├── tailwind.config.js       # Config Tailwind
├── postcss.config.js
├── vite.config.js
├── README.md                # Documentación completa
└── .gitignore

```

---

### 🎯 Verificación rápida:

Una vez que ejecutes `npm run dev`, verifica que ves:

✅ Header con navegación y logo PERSONA.LAB
✅ Sección Hero con información general
✅ 4 tarjetas de algoritmos con hover effects
✅ Flujo técnico con los 4 pasos
✅ 3 tarjetas de visualizaciones (con placeholders)
✅ 4 perfiles de personalidad con porcentajes
✅ Sección de conclusiones y recomendaciones
✅ Footer con links

Si haces click en una visualización → Se abre el modal con la imagen

---

### 🔧 Comandos útiles:

```bash
# Iniciar desarrollo (hot reload)
npm run dev

# Compilar para producción
npm run build

# Previsualizar build
npm run preview

# Linter (si lo necesitas)
npm run lint

# Ver estructura del proyecto
tree -L 2
```

---

### 📌 Customizaciones comunes:

**Cambiar color primario:**
1. Abre `tailwind.config.js`
2. Busca `'primary-fixed-dim': '#00dce5'`
3. Reemplaza con tu color (ej: `'#FF5733'`)

**Cambiar velocidad de animaciones:**
1. Abre `src/utils/animations.js`
2. Modifica `duration: 0.6` en las animaciones

**Agregar más secciones:**
1. Crea nuevo componente en `src/components/`
2. Agrégalo a `src/App.jsx`
3. Úsalo con Framer Motion

---

### ❓ Troubleshooting:

**Error: "Cannot find module"**
→ Ejecuta `npm install` nuevamente

**Las animaciones no funcionan**
→ Reinicia el servidor: `Ctrl+C` y `npm run dev`

**Las imágenes no cargan**
→ Verifica que el path sea correcto en Visualizations.jsx
→ Usa `import` en lugar de rutas string

**Puerto 3000 ocupado**
→ Cámbialo en `vite.config.js` → `port: 3001`

---

### 🎓 Recursos de ayuda:

📖 **Documentación:**
- [React 18](https://react.dev)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Vite](https://vitejs.dev/)

🚀 **Deploy (cuando esté listo):**
- Vercel: `npm run build` → Subir carpeta `dist`
- Netlify: `npm run build` → Drag & drop `dist`
- GitHub Pages: Configurar con GitHub Actions

---

### 💡 Tips finales:

✨ **Personalización avanzada:**
- Todos los colores están en `tailwind.config.js`
- Todas las animaciones están en `src/utils/animations.js`
- Usa componentes Framer Motion como template para nuevas secciones

📱 **Responsive design:**
- Diseño adaptativo para mobile (320px) a desktop (1280px)
- Menu hamburguesa en mobile automático

♿ **Accesibilidad:**
- Semántica HTML correcta
- Links y botones funcionales
- Contraste adecuado de colores

---

**¿Listo?** 🚀

Ejecuta:
```bash
npm install
npm run dev
```

¡Y disfruta tu Landing Page en React! 🎉

Si necesitas ayuda, revisa el archivo `README.md` para documentación completa.
