import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, conclusionsItemVariants } from '@/utils/animations'

export const Conclusions = () => {
    const recommendations = [
        {
            title: 'Validación Matemática',
            description: 'Para futuros análisis, se recomienda complementar el "Método del Codo" con el Coeficiente de Silueta para medir con mayor rigor la separación entre clústeres.'
        },
        {
            title: 'Limpieza con DBSCAN',
            description: 'Utilizar algoritmos de densidad para identificar y eliminar respuestas inconsistentes o "ruido" antes de realizar la segmentación final, asegurando perfiles más puros.'
        },
        {
            title: 'Análisis Temporal',
            description: 'Realizar estudios longitudinales para rastrear cómo evolucionan los perfiles de personalidad en el tiempo y validar la estabilidad de las clasificaciones.'
        },
        {
            title: 'Importancia de Características',
            description: 'Analizar qué variables de comportamiento tienen el mayor impacto en la diferenciación de clusters  técnicas similares.'
        },
    ]

    return (
        <section id="conclusions" className="bg-surface-container-high border border-outline-variant rounded-lg p-8 lg:p-12">
            <div className="max-w-5xl mx-auto">
                {/* Title */}
                <motion.h2
                    className="font-headline-md text-headline-md text-primary mb-8"
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, margin: "-100px" }}
                >
                    Conclusiones & Recomendaciones
                </motion.h2>

                {/* Main Conclusion */}
                <motion.div
                    className="space-y-8 text-on-surface-variant mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={containerVariants}
                    viewport={{ once: false, margin: "-50px" }}
                >
                    {/* Key Insights List - Grid Layout */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                        <motion.div 
                            className="bg-surface-container rounded-lg p-5 border border-outline-variant/50 hover:border-primary-fixed-dim/50 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: false }}
                            whileHover={{ y: -3 }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <motion.span className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0">
                                    check_circle
                                </motion.span>
                                <p className="text-body-base font-semibold text-on-surface">Segmentación Exitosa</p>
                            </div>
                            <p className="text-body-sm text-on-surface-variant leading-relaxed">El modelo K-Means identificó perfiles de personalidad que coinciden con la teoría psicológica de rasgos, demostrando que los datos tienen una estructura lógica.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-surface-container rounded-lg p-5 border border-outline-variant/50 hover:border-primary-fixed-dim/50 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: false }}
                            whileHover={{ y: -3 }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <motion.span className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0">
                                    insights
                                </motion.span>
                                <p className="text-body-base font-semibold text-on-surface">Importancia del PCA</p>
                            </div>
                            <p className="text-body-sm text-on-surface-variant leading-relaxed">Sin la reducción de dimensiones, sería imposible interpretar el comportamiento de los 1,834 registros de forma visual.</p>
                        </motion.div>
                        
                        <motion.div 
                            className="bg-surface-container rounded-lg p-5 border border-outline-variant/50 hover:border-primary-fixed-dim/50 transition-all"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: false }}
                            whileHover={{ y: -3 }}
                        >
                            <div className="flex items-start gap-3 mb-3">
                                <motion.span className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0">
                                    verified
                                </motion.span>
                                <p className="text-body-base font-semibold text-on-surface">Consistencia</p>
                            </div>
                            <p className="text-body-sm text-on-surface-variant leading-relaxed">Los métodos jerárquicos y de densidad (DBSCAN) respaldaron en gran medida los grupos creados por K-Means.</p>
                        </motion.div>
                    </motion.div>

                    {/* Summary Paragraph */}
                    <motion.p
                        variants={conclusionsItemVariants}
                        custom={1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="text-body-base leading-relaxed bg-surface-container/50 p-6 rounded-lg border-l-4 border-primary-fixed-dim"
                    >
                        Los cuatro arquetipos de personalidad identificados proporcionan un marco significativo para entender la diversidad de comportamiento dentro de la población. Estos insights pueden ser aprovechados para estrategias de personalización, comunicación dirigida y experiencias de usuario personalizadas.
                    </motion.p>

                    {/* Recommendations Box - Enhanced Grid */}
                    <motion.div
                        variants={conclusionsItemVariants}
                        custom={2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false }}
                        className="bg-surface border border-outline-variant rounded-lg p-8"
                    >
                        <h4 className="font-label-caps text-label-caps text-primary mb-6">RECOMENDACIONES CLAVE</h4>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 gap-5"
                            initial="hidden"
                            whileInView="visible"
                            variants={containerVariants}
                            viewport={{ once: false }}
                        >
                            {recommendations.map((rec, index) => (
                                <motion.div
                                    key={index}
                                    variants={conclusionsItemVariants}
                                    custom={index}
                                    className="flex gap-3 p-4 rounded-lg bg-surface-container-high hover:bg-surface-container-highest transition-all"
                                    whileHover={{ x: 5 }}
                                >
                                    <motion.span
                                        className="material-symbols-outlined text-primary-fixed-dim flex-shrink-0"
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        arrow_right
                                    </motion.span>
                                    <div>
                                        <p className="font-body-base font-semibold text-on-surface">
                                            {rec.title}
                                        </p>
                                        <p className="text-body-sm text-on-surface-variant mt-2">
                                            {rec.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    )
}

export default Conclusions
