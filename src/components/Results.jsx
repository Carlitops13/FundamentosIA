import React from 'react'
import { motion } from 'framer-motion'
import { containerVariants, resultsCardVariants } from '@/utils/animations'

export const Results = () => {
    const profiles = [
        {
            id: 1,
            name: 'Muy Sociable y Extrovertido',
            color: 'from-red-500/20 to-red-600/10',
            accent: 'border-red-500',
            icon: 'sentiment_very_satisfied',
            traits: [
                'Altamente social y comunicativo',
                'Busca estimulación constante',
                'Energético y entusiasta',
                'Confiado en interacciones públicas',
                'Prefiere actividades grupales'
            ],
            percentage: 22.62
        },
        {
            id: 2,
            name: 'Sociable',
            color: 'from-blue-500/20 to-blue-600/10',
            accent: 'border-blue-500',
            icon: 'sentiment_satisfied',
            traits: [
                'Equilibrio entre interacción y reflexión',
                'Amable y colaborativo',
                'Disfruta de conexiones significativas',
                'Flexible en diferentes contextos',
                'Sociable pero con límites claros'
            ],
            percentage: 30
        },
        {
            id: 3,
            name: 'No muy sociable',
            color: 'from-purple-500/20 to-purple-600/10',
            accent: 'border-purple-500',
            icon: 'sentiment_neutral',
            traits: [
                'Observador y reflexivo',
                'Prefiere interacciones pequeñas',
                'Selectivo con las amistades',
                'Valora la privacidad',
                'Pensador profundo'
            ],
            percentage: 26.39
        },
        {
            id: 4,
            name: 'No sociable e introvertido',
            color: 'from-indigo-500/20 to-indigo-600/10',
            accent: 'border-indigo-500',
            icon: 'sentiment_dissatisfied',
            traits: [
                'Prefiere solitud y espacios tranquilos',
                'Energía limitada en grupos grandes',
                'Pensamiento profundo e introspectivo',
                'Creatividad en soledad',
                'Conexiones intensas con pocos'
            ],
            percentage: 20.93
        },
    ]

    return (
        <section id="results" className="space-y-8">
            {/* Section Header */}
            <motion.div
                className="border-l-2 border-primary-fixed-dim pl-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <h2 className="font-headline-md text-headline-md text-primary">Resultados: Los 4 Perfiles</h2>
                <p className="font-label-caps text-label-caps text-on-surface-variant mt-1">SEGMENTACIÓN DE PERSONALIDADES</p>
            </motion.div>

            {/* Profiles Grid */}
            <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-gutter"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-100px" }}
            >
                {profiles.map((profile) => (
                    <motion.div
                        key={profile.id}
                        variants={resultsCardVariants}
                        custom={profile.id - 1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className={`bg-gradient-to-br ${profile.color} border-2 ${profile.accent} rounded-lg p-6 backdrop-blur-sm transition-all duration-300`}
                        whileHover={{
                            borderColor: '#00dce5',
                            boxShadow: '0 0 20px rgba(0, 220, 229, 0.2)',
                            y: -5,
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <motion.span
                                    className="material-symbols-outlined text-4xl text-primary-fixed-dim"
                                    whileHover={{ scale: 1.2, rotate: 10 }}
                                >
                                    {profile.icon}
                                </motion.span>
                                <h3 className="font-headline-md text-headline-md text-primary">
                                    {profile.name}
                                </h3>
                            </div>
                            <motion.div
                                className="text-2xl font-bold text-primary-fixed-dim"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                {profile.percentage}%
                            </motion.div>
                        </div>

                        {/* Progress Bar */}
                        <div className="mb-4 bg-surface-container rounded-full h-2 overflow-hidden">
                            <motion.div
                                className="bg-gradient-to-r from-primary-fixed-dim to-primary-container h-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${profile.percentage}%` }}
                                transition={{ duration: 1, delay: 0.3 }}
                                viewport={{ once: true }}
                            />
                        </div>

                        {/* Traits */}
                        <div className="space-y-2">
                            <p className="font-label-caps text-label-caps text-on-surface-variant mb-3">CARACTERÍSTICAS</p>
                            {profile.traits.map((trait, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-2"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <span className="text-primary-fixed-dim mt-1">•</span>
                                    <span className="text-body-sm text-on-surface-variant">
                                        {trait}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Learn More Button */}
                       
                    </motion.div>
                ))}
            </motion.div>

            {/* Distribution Summary */}
            <motion.div
                className="bg-surface-container-high border border-outline-variant rounded-lg p-8 shadow-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="mb-8">
                    <h3 className="font-headline-md text-headline-md text-primary mb-3">Distribución de Clusters</h3>
                    <p className="text-body-base text-on-surface-variant leading-relaxed">
                        El dataset de <span className="text-primary-fixed-dim font-semibold">1,834 registros</span> se distribuye de manera significativa entre los cuatro perfiles,
                        con una tendencia hacia los tipos más sociables. Esta distribución sugiere una población con
                        inclinación moderada hacia la socialización, pero con representación considerable de perfiles
                        más introspectivos.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {profiles.map((profile) => (
                        <motion.div
                            key={profile.id}
                            className={`bg-gradient-to-br ${profile.color} border-2 ${profile.accent} rounded-lg p-5 text-center transition-all hover:shadow-lg`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: profile.id * 0.1, duration: 0.4 }}
                            viewport={{ once: false }}
                            whileHover={{ y: -3 }}
                        >
                            <motion.span
                                className={`material-symbols-outlined text-4xl ${profile.icon === 'sentiment_very_satisfied' ? 'text-red-400' : profile.icon === 'sentiment_satisfied' ? 'text-blue-400' : profile.icon === 'sentiment_neutral' ? 'text-purple-400' : 'text-indigo-400'} block mb-3`}
                                whileHover={{ scale: 1.15 }}
                            >
                                {profile.icon}
                            </motion.span>
                            <p className="text-body-sm font-semibold text-on-surface mb-3 line-clamp-2">
                                {profile.name}
                            </p>
                            <motion.div
                                className="text-display-lg text-primary font-bold"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ delay: profile.id * 0.1 + 0.2, type: 'spring', stiffness: 200 }}
                            >
                                {profile.percentage}%
                            </motion.div>
                            <motion.div
                                className="mt-3 h-1 bg-gradient-to-r rounded-full"
                                style={{
                                    backgroundImage: profile.id === 1 ? 'linear-gradient(to right, rgb(239, 68, 68), rgba(220, 38, 38, 0.5))' :
                                        profile.id === 2 ? 'linear-gradient(to right, rgb(59, 130, 246), rgba(37, 99, 235, 0.5))' :
                                        profile.id === 3 ? 'linear-gradient(to right, rgb(168, 85, 247), rgba(126, 34, 206, 0.5))' :
                                        'linear-gradient(to right, rgb(99, 102, 241), rgba(67, 56, 202, 0.5))'
                                }}
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ delay: profile.id * 0.1 + 0.3, duration: 0.6 }}
                            />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    )
}

export default Results
