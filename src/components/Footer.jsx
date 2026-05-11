import React from 'react'
import { motion } from 'framer-motion'

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    const teamMembers = [
        { name: 'Milka Borja', icon: 'woman' },
        { name: 'Carlos Puente', icon: 'man' },
        { name: 'Bryan Salvador', icon: 'man' }
    ]

    const footerLinks = [
        { label: 'Methodology Docs', href: '#', icon: 'description' },
        { label: 'Link del Colab', href: 'https://colab.research.google.com/drive/1P0-eztpPxu0gLaBZfiLep0HzMhq-F1_G?usp=sharing', icon: 'auto_awesome' },
        { label: 'Ver GitHub Repo', href: 'https://github.com/Carlitops13/FundamentosIA.git', icon: 'code' }
    ]

    return (
        <motion.footer
            className="bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant dark:border-outline-variant w-full py-16 mt-24"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
        >
            <div className="w-full px-margin-mobile md:px-margin-desktop max-w-max-width mx-auto space-y-8">
                {/* Top Section: Copyright & Subject */}
                <motion.div
                    className="flex flex-col md:flex-row justify-between items-center gap-4 pb-6 border-b border-outline-variant/30"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <div className="font-label-caps text-label-caps text-on-surface-variant opacity-60">
                            © {currentYear} Escuela Politécnica Nacional
                        </div>
                        <div className="font-label-caps text-label-caps text-primary-fixed-dim/80 text-xs">
                            Asignatura: Fundamentos de Inteligencia Artificial
                        </div>
                    </div>

                    {/* Footer Links - Right */}
                    <motion.div
                        className="flex flex-wrap justify-center gap-6"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        {footerLinks.map((link, index) => (
                            <motion.a
                                key={index}
                                href={link.href}
                                target={link.href.startsWith('http') ? '_blank' : '_self'}
                                rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                                className="flex items-center gap-2 text-on-surface-variant dark:text-on-surface-variant hover:text-primary-fixed-dim transition-all font-body-sm text-body-sm group"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <motion.span
                                    className="material-symbols-outlined text-base group-hover:text-primary-fixed-dim transition-colors"
                                    whileHover={{ rotate: 20 }}
                                >
                                    {link.icon}
                                </motion.span>
                                <span className="hidden sm:inline">{link.label}</span>
                            </motion.a>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Middle Section: Team Members */}
                <motion.div
                    className="flex flex-col items-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                >
                    <p className="text-center text-body-sm font-label-caps text-on-surface-variant/60">
                        DESARROLLADO POR
                    </p>
                    <div className="flex gap-8 flex-wrap justify-center">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="flex flex-col items-center gap-2"
                                whileHover={{ scale: 1.1 }}
                            >
                                <motion.div
                                    className="w-12 h-12 rounded-full bg-primary-fixed-dim/20 border border-primary-fixed-dim/50 flex items-center justify-center hover:bg-primary-fixed-dim/40 transition-all"
                                    whileHover={{ rotate: 10 }}
                                >
                                    <span className="material-symbols-outlined text-primary-fixed-dim">
                                        {member.icon}
                                    </span>
                                </motion.div>
                                <span className="text-body-sm text-on-surface-variant text-center font-semibold">
                                    {member.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Bottom Section: Tech Stack */}
                <motion.div
                    className="flex flex-col items-center gap-4 pt-6 border-t border-outline-variant/20"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-center text-body-sm text-on-surface-variant/60">
                        Developed with
                    </p>
                    <div className="flex gap-6 justify-center flex-wrap">
                        {/* React */}
                        <motion.a
                            href="https://react.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-primary-fixed-dim hover:text-primary transition-all"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            title="React"
                        >
                            <span className="material-symbols-outlined text-3xl">dashboard_customize</span>
                            <span className="text-xs font-label-caps">React</span>
                        </motion.a>

                        {/* Framer Motion */}
                        <motion.a
                            href="https://www.framer.com/motion/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-primary-fixed-dim hover:text-primary transition-all"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            title="Framer Motion"
                        >
                            <span className="material-symbols-outlined text-3xl">animation</span>
                            <span className="text-xs font-label-caps">Motion</span>
                        </motion.a>

                        {/* Tailwind CSS */}
                        <motion.a
                            href="https://tailwindcss.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-primary-fixed-dim hover:text-primary transition-all"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            title="Tailwind CSS"
                        >
                            <span className="material-symbols-outlined text-3xl">palette</span>
                            <span className="text-xs font-label-caps">Tailwind</span>
                        </motion.a>

                        {/* Vite */}
                        <motion.a
                            href="https://vitejs.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center gap-2 text-primary-fixed-dim hover:text-primary transition-all"
                            whileHover={{ scale: 1.15, rotate: 5 }}
                            title="Vite"
                        >
                            <span className="material-symbols-outlined text-3xl">bolt</span>
                            <span className="text-xs font-label-caps">Vite</span>
                        </motion.a>
                    </div>
                    <p className="text-center text-body-sm text-on-surface-variant/60">
                        Made with ❤️
                    </p>
                </motion.div>
            </div>
        </motion.footer>
    )
}

export default Footer
