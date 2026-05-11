import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, methodologyCardVariants } from '@/utils/animations'

export const Methodology = () => {
    const algorithms = [
        {
            icon: 'scatter_plot',
            title: 'K-Means',
            description: 'Un algoritmo de agrupamiento basado en centroides que divide los datos en grupos distintos según su proximidad al centro del clúster. Altamente eficiente para distribuciones de datos estructuradas y esféricas.',
            color: 'text-primary-fixed-dim'
        },
        {
            icon: 'bubble_chart',
            title: 'DBSCAN',
            description: 'Clustering espacial basado en densidad de aplicaciones con ruido. Agrupa puntos densamente empaquetados, lo que lo hace excelente para identificar formas irregulares y filtrar ruido o valores atípicos.',
            color: 'text-outline'
        },
        {
            icon: 'account_tree',
            title: 'Clustering Jerárquico Aglomerativo',
            description: 'Agrupamiento aglomerativo que crea una jerarquía o "relaciones familiares" entre los puntos de datos. Útil para comprender la relación estructural de los datos mediante dendrogramas sin especificar previamente el número de clústeres.',
            color: 'text-primary-fixed-dim'
        },
        {
            icon: 'compress',
            title: 'PCA (Análisis de Componentes Principales)',
            description: 'Una técnica de reducción de dimensionalidad utilizada aquí para simplificar 7 variables behaviorales complejas hasta 2 ejes principales (componentes), preservando la varianza mientras se habilita la visualización y interpretación en 2D.',
            color: 'text-primary-fixed-dim'
        },
    ]

    return (
        <section id="methodology" className="space-y-8">
            {/* Section Header */}
            <motion.div
                className="border-l-2 border-primary-fixed-dim pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }}
            >
                <h2 className="font-headline-md text-headline-md text-primary">Metodología: Estado del arte</h2>
                <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">ALGORITMOS </p>
            </motion.div>

            {/* Algorithms Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
            >
                {algorithms.map((algo, index) => (
                    <motion.div
                        key={index}
                        variants={methodologyCardVariants}
                        custom={index}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="bg-surface-container-high border border-outline-variant rounded-lg p-6 transition-all duration-300 cursor-pointer group"
                        whileHover={{
                            borderColor: '#00dce5',
                            boxShadow: '0 0 20px rgba(0, 220, 229, 0.2)',
                            y: -5,
                        }}
                    >
                        {/* Icon and Title */}
                        <div className="flex items-center gap-3 mb-4">
                            <motion.span
                                className={`material-symbols-outlined ${algo.color}`}
                                whileHover={{ rotate: 10, scale: 1.2 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                {algo.icon}
                            </motion.span>
                            <h3 className="font-code-block text-body-base font-bold text-on-surface">
                                {algo.title}
                            </h3>
                        </div>

                        {/* Description */}
                        <motion.p
                            className="text-body-sm text-on-surface-variant min-h-[80px] leading-relaxed"
                        >
                            {algo.description}
                        </motion.p>

                        {/* Hover accent line */}
                        <motion.div
                            className="mt-4 h-1 bg-gradient-to-r from-primary-fixed-dim to-transparent rounded"
                            initial={{ scaleX: 0 }}
                            whileHover={{ scaleX: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Methodology
