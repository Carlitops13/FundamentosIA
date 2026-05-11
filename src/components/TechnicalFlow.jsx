import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, technicalFlowVariants } from '@/utils/animations'

export const TechnicalFlow = () => {
    const steps = [
        {
            number: 1,
            title: 'Normalización',
            description: 'Se aplicó StandardScaler para garantizar que todas las variables contribuyan por igual a los cálculos de distancia, evitando que las características con escalas mayores dominen el modelo.'
        },
        {
            number: 2,
            title: 'The Elbow Method',
            description: 'Se trazó la suma de cuadrados dentro de los clústeres (WCSS) para identificar el número óptimo de clústeres. El punto de inflexión indicó claramente k=4 como el objetivo.'
        },
        {
            number: 3,
            title: 'Ejecución de K-Means',
            description: 'Se ejecutó el algoritmo K-Means con k=4 sobre los datos escalados para asignar cada registro de usuario a un arquetipo de personalidad específico.'
        },
        {
            number: 4,
            title: 'Validación via DBSCAN & Hierarchical',
            description: 'Se validaron los resultados de K-Means ejecutando clustering jerárquico (confirmando grupos estructurales) y verificando DBSCAN para entender la densidad y el ruido potencial.'
        },
    ]

    return (
        <section id="flow" className="bg-surface-container-high border border-outline-variant rounded-lg p-8">
            {/* Header */}
            <motion.h2
                className="font-headline-md text-headline-md text-primary mb-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, margin: "-100px" }}
            >
                Flujo Técnico
            </motion.h2>

            {/* Steps */}
            <motion.div
                className="space-y-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                {steps.map((step) => (
                    <motion.div
                        key={step.number}
                        variants={technicalFlowVariants}
                        custom={step.number - 1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="flex items-start gap-4 group"
                    >
                        {/* Number Circle */}
                        <motion.div
                            className="w-8 h-8 rounded-full bg-primary-fixed-dim/20 text-primary-fixed-dim flex items-center justify-center font-bold flex-shrink-0 border border-primary-fixed-dim/30"
                            whileHover={{
                                scale: 1.1,
                                backgroundColor: 'rgba(0, 220, 229, 0.4)',
                                boxShadow: '0 0 15px rgba(0, 220, 229, 0.3)'
                            }}
                            transition={{ duration: 0.3 }}
                        >
                            {step.number}
                        </motion.div>

                        {/* Content */}
                        <div className="flex-1">
                            <motion.h4
                                className="font-body-base font-semibold text-primary mb-1"
                                whileHover={{ x: 5 }}
                            >
                                {step.title}
                            </motion.h4>
                            <p className="text-body-sm text-on-surface-variant leading-relaxed">
                                {step.description}
                            </p>

                            {/* Connection Line - Visual indicator */}
                            {step.number < 4 && (
                                <motion.div
                                    className="mt-6 h-6 w-0.5 bg-gradient-to-b from-primary-fixed-dim/50 to-transparent absolute left-[14px]"
                                    initial={{ scaleY: 0 }}
                                    whileInView={{ scaleY: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                />
                            )}
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom accent */}
            <motion.div
                className="mt-8 pt-6 border-t border-outline-variant/30"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
            >
               
            </motion.div>
        </section>
    )
}

export default TechnicalFlow
