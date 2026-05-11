import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ImageModal from './ImageModal'
import { containerVariants, visualizationsVariants } from '@/utils/animations'
import codoImage from '@/assets/Codo.png'
import clusterPersoImage from '@/assets/clusterPerso.png'
import clusterPCAImage from '@/assets/ClusterPCA.png'
import clusterAgloImage from '@/assets/ClusterAglo.png'
import dendogramaImage from '@/assets/dendograma.png'

export const Visualizations = () => {
    const [selectedImage, setSelectedImage] = useState(null)

    const visualizations = [
        {
            id: 1,
            title: 'Método del Codo',
            description: 'Análisis del codo para determinar el número óptimo de clusters (k=4). Este gráfico muestra la relación entre el número de clusters y la inercia intra-cluster.',
            figure: 'FIG_01: ELBOW_METHOD.PNG',
            placeholder: '[Método del Codo]',
            src: codoImage
        },
        {
            id: 2,
            title: 'Clusters de Personalidad',
            description: 'Visualización de los 4 clusters de personalidad identificados mediante K-Means. Cada color representa un perfil: Extrovertido, Sociable, Reservado e Introvertido.',
            figure: 'FIG_02: PERSONALITY_CLUSTERS.PNG',
            placeholder: '[Clusters de Personalidad]',
            src: clusterPersoImage
        },
        {
            id: 3,
            title: 'Clusters DBSCAN con PCA',
            description: 'Validación de clusters utilizando DBSCAN en el espacio PCA. Muestra las áreas de densidad y puntos de ruido identificados en el análisis.',
            figure: 'FIG_03: DBSCAN_PCA.PNG',
            placeholder: '[Clusters DBSCAN con PCA]',
            src: clusterPCAImage
        },
        {
            id: 4,
            title: 'Clustering Jerárquico Aglomerativo',
            description: 'Matriz de distancia del clustering jerárquico aglomerativo, mostrando la estructura jerárquica de los clusters y la similitud entre grupos.',
            figure: 'FIG_04: HIERARCHICAL_CLUSTERING.PNG',
            placeholder: '[Clustering Jerárquico Aglomerativo]',
            src: clusterAgloImage
        },
        {
            id: 5,
            title: 'Dendrograma del Clustering Jerárquico',
            description: 'Árbol jerárquico que ilustra la agrupación progresiva de los datos. Las líneas horizontales representan las distancias a las que se fusionan los clusters.',
            figure: 'FIG_05: DENDROGRAM.PNG',
            placeholder: '[Dendrograma]',
            src: dendogramaImage
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
            {/* Section Header */}
            <motion.div
                className="border-l-2 border-primary-fixed-dim pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }}
            >
                <h2 className="font-headline-md text-headline-md text-primary">Visualizaciones de Datos</h2>
                <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">SALIDAS DEL MODELO & ANÁLISIS</p>
            </motion.div>

            {/* Visualizations Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                {visualizations.map((viz) => (
                    <motion.div
                        key={viz.id}
                        variants={visualizationsVariants}
                        custom={viz.id - 1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-surface border border-outline-variant rounded-lg overflow-hidden group cursor-pointer"
                        whileHover={{ borderColor: '#00dce5' }}
                        onClick={() => handleImageClick(viz)}
                    >
                        {/* Image Container */}
                        <motion.div
                            className="h-48 bg-surface-container-low border-b border-outline-variant flex items-center justify-center p-4 relative overflow-hidden rounded"
                            whileHover={{ backgroundColor: '#1c2b3c' }}
                        >
                            <span className="absolute top-3 left-3 font-code-block text-xs text-primary-fixed-dim bg-surface-container/80 px-2 py-1 rounded z-10 backdrop-blur-sm">
                                {viz.figure}
                            </span>

                            {/* Hover Zoom Effect */}
                            <motion.div 
                                className="w-full h-full flex items-center justify-center bg-[#020617] relative"
                                whileHover="hover"
                                initial="normal"
                            >
                                {viz.src ? (
                                    <motion.img
                                        src={viz.src}
                                        alt={viz.title}
                                        className="absolute inset-0 w-full h-full object-cover"
                                        variants={{
                                            normal: { scale: 1 },
                                            hover: { scale: 1.15 }
                                        }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                    />
                                ) : (
                                    <div className="text-center px-2">
                                        <span className="text-on-surface-variant font-code-block text-sm block">
                                            {viz.placeholder}
                                        </span>
                                        <motion.div
                                            className="mt-2 text-primary-fixed-dim text-xs"
                                            initial={{ opacity: 0 }}
                                            whileHover={{ opacity: 1 }}
                                        >
                                            Haz click para ampliar
                                        </motion.div>
                                    </div>
                                )}
                            </motion.div>

                            {/* Hover Overlay */}
                            <motion.div
                                className="absolute inset-0 bg-primary-fixed-dim/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                                whileHover={{ opacity: 1 }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileHover={{ scale: 1 }}
                                    className="bg-surface-variant/80 p-2 rounded-lg"
                                >
                                    <span className="material-symbols-outlined text-primary-fixed-dim">
                                        zoom_in
                                    </span>
                                </motion.div>
                            </motion.div>
                        </motion.div>

                        {/* Content */}
                        <div className="p-4">
                            <motion.h4
                                className="font-body-base font-semibold text-primary mb-1"
                                whileHover={{ x: 5 }}
                            >
                                {viz.title}
                            </motion.h4>
                            <p className="text-body-sm text-on-surface-variant leading-relaxed">
                                {viz.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Image Modal */}
            <ImageModal
                isOpen={!!selectedImage}
                image={selectedImage}
                onClose={() => setSelectedImage(null)}
            />
        </section>
    )
}

export default Visualizations
