// Este archivo es un ejemplo de cómo modificar Visualizations.jsx
// para cargar tus imágenes locales

// OPCIÓN 1: Importar imágenes directamente
// ==========================================
// import pcaImage from '@/assets/pca-clusters.png'
// import dendrogramImage from '@/assets/dendrogram.png'
// import dbscanImage from '@/assets/dbscan-density.png'

// Luego en el array visualizations:
// {
//     id: 1,
//     title: 'Clusters en el plano PCA',
//     description: 'Validating the K-Means model...',
//     figure: 'FIG_01: PCA_SCATTER.PNG',
//     placeholder: '[INSERT_GRAPH_HERE: PCA Clusters]',
//     src: pcaImage  // ← Usar la imagen importada
// }

// OPCIÓN 2: Usar rutas públicas
// ==============================
// Si tus imágenes están en la carpeta 'public/':
// {
//     id: 1,
//     src: '/images/pca-clusters.png'
// }

// OPCIÓN 3: URLs externas
// =======================
// {
//     id: 1,
//     src: 'https://tu-servidor.com/pca-clusters.png'
// }

// PASOS PARA CONFIGURAR IMÁGENES:

// 1. Crea la carpeta de assets
//    mkdir -p src/assets

// 2. Copia tus imágenes
//    cp /ruta/a/tus/imagenes/* src/assets/

// 3. Actualiza Visualizations.jsx
//    import pcaImage from '@/assets/pca-clusters.png'
//    
//    visualizations = [
//        {
//            // ...
//            src: pcaImage
//        }
//    ]

// 4. O actualiza el objeto con rutas relativas
//    src: new URL('../assets/pca-clusters.png', import.meta.url).href

// VERIFICAR QUE FUNCIONA:
// - Abre http://localhost:3000/visualizations
// - Haz hover en las tarjetas (deben verse las imágenes)
// - Haz click para abrir el modal
