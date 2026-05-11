import React from 'react'
import { motion } from 'framer-motion'
import { fadeInUp, scaleIn, containerVariants, itemVariants } from '@/utils/animations'

export const Hero = () => {
    const metrics = [
        { label: 'Variables (N)', value: '7' },
        { label: 'Grupos objetivo(k)', value: '4' },
        { label: 'Algoritmos Principales', value: 'K-Means, DBSCAN, Clustering Jerárquico Aglomerativo, PCA' },
        { label: 'Tamaño del Dataset', value: '1834 records' },
    ]

    return (
        <section
            id="introduction"
            className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center min-h-screen md:min-h-[614px] pt-16 md:pt-20 px-4 md:px-0"
        >
            {/* Left Content */}
            <motion.div
                className="col-span-1 lg:col-span-8 space-y-4 md:space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {/* Badge */}
                <motion.div
                    variants={itemVariants}
                    className="inline-flex items-center gap-2 px-3 py-1 border border-primary-fixed-dim/30 bg-primary-fixed-dim/10 rounded-full"
                >
                    <span className="w-2 h-2 rounded-full bg-primary-fixed-dim animate-pulse"></span>
                    <span className="font-label-caps text-label-caps text-primary-fixed-dim">
                        
                    </span>
                </motion.div>

                {/* Title */}
                <motion.h1
                    variants={itemVariants}
                    className="font-display-lg text-3xl md:text-4xl lg:text-display-lg text-primary leading-tight"
                >
                    Análisis de Perfiles de Personalidad
                </motion.h1>

                {/* Description */}
                <motion.p
                    variants={itemVariants}
                    className="text-on-surface-variant max-w-2xl text-base md:text-lg leading-relaxed"
                >
                    Enfoque de aprendizaje no supervisado para identificar patrones de comportamiento latentes. Al aplicar técnicas avanzadas de agrupamiento a datos psicométricos, categorizamos a los individuos en cuatro tipologías distintas: :{' '}
                    <span className="text-primary-fixed-dim font-semibold">Muy Sociable y Extrovertido</span>,{' '}
                    <span className="text-primary-fixed-dim font-semibold">Sociable</span>,{' '}
                    <span className="text-primary-fixed-dim font-semibold">No muy sociable</span>, y{' '}
                    <span className="text-primary-fixed-dim font-semibold">No sociable e introvertido</span>.
                </motion.p>

                {/* Motivation Box */}
                <motion.div
                    variants={itemVariants}
                    className="bg-surface-container-high border-l-4 border-primary-fixed-dim p-4 rounded-r"
                >
                    <h3 className="font-label-caps text-label-caps text-primary mb-2">MOTIVACIÓN</h3>
                    <p className="text-body-sm text-on-surface-variant">
                        Buscamos identificar patrones naturales en la personalidad sin etiquetas previas. El objetivo es agrupar a los usuarios según sus rasgos psicológicos para ofrecer recomendaciones y experiencias digitales personalizadas.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-4"
                >
                    <motion.a
                        href="https://colab.research.google.com/drive/1P0-eztpPxu0gLaBZfiLep0HzMhq-F1_G?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto bg-primary-fixed-dim text-on-primary-fixed px-4 md:px-6 py-2 md:py-3 text-sm md:text-label-caps rounded-DEFAULT font-label-caps hover:brightness-110 transition-all glow inline-block text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        EXPLORAR DATASET
                    </motion.a>
                    <motion.a
                        href="https://github.com/Carlitops13/FundamentosIA.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto border border-outline text-primary-fixed-dim px-4 md:px-6 py-2 md:py-3 text-sm md:text-label-caps rounded-DEFAULT font-label-caps hover:bg-surface-variant transition-all inline-block text-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        VER GITHUB REPO
                    </motion.a>
                </motion.div>
            </motion.div>

            {/* Right: Data Card */}
            <motion.div
                className="col-span-1 lg:col-span-4 flex justify-center mt-8 lg:mt-0"
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, margin: "-100px" }}
            >
                <motion.div
                    className="w-full max-w-sm md:max-w-none aspect-square border border-outline-variant bg-surface-container-high rounded-lg p-4 md:p-6 relative overflow-hidden group"
                    whileHover={{ borderColor: '#00dce5' }}
                >
                    {/* Background pattern */}
                    <div className="absolute inset-0 opacity-10 bg-dot-pattern"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-surface-container-high via-transparent to-primary-fixed-dim/10"></div>

                    {/* Content */}
                    <div className="relative z-10 h-full flex flex-col justify-between">
                        <span className="font-label-caps text-label-caps text-outline">DATA.MODEL.SUMMARY</span>

                        <div className="space-y-4">
                            {metrics.map((metric, index) => (
                                <motion.div
                                    key={index}
                                    className="flex justify-between border-b border-outline-variant pb-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-on-surface-variant">{metric.label}</span>
                                    <span className="text-primary-fixed-dim font-code-block">{metric.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default Hero
