import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        { label: 'Introducción', href: '#introduction' },
        { label: 'Metodología', href: '#methodology' },
        { label: 'Flujo Técnico', href: '#flow' },
        { label: 'Visualizaciones', href: '#visualizations' },
        { label: 'Resultados', href: '#results' },
        { label: 'Conclusiones', href: '#conclusions' },
    ]

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-surface dark:bg-surface fixed top-0 w-full z-50 border-b border-outline-variant dark:border-outline-variant bg-surface/90 backdrop-blur-md"
        >
            <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-max-width mx-auto gap-6">
                {/* Logo */}
                <motion.div
                    className="font-code-block text-body-base font-bold tracking-tighter text-primary-container dark:text-primary-container flex-shrink-0"
                    whileHover={{ scale: 1.05 }}
                >
                    Fundamentos de Inteligencia Artificial
                </motion.div>

                {/* Desktop Navigation - Centered */}
                <div className="hidden md:flex gap-8 flex-1 justify-center">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            href={item.href}
                            className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors whitespace-nowrap"
                            whileHover={{ scale: 1.05, color: '#e9feff' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {item.label}
                        </motion.a>
                    ))}
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-6 flex-shrink-0">
                    <motion.a
                        href="https://colab.research.google.com/drive/1P0-eztpPxu0gLaBZfiLep0HzMhq-F1_G?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center bg-primary-fixed-dim text-on-primary-fixed px-6 py-2 rounded-DEFAULT font-label-caps text-label-caps hover:brightness-110 transition-all glow whitespace-nowrap"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Link del Colab
                    </motion.a>

                    {/* Mobile menu toggle */}
                    <motion.button
                        className="md:hidden text-primary-fixed-dim p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="material-symbols-outlined">
                            {isMenuOpen ? 'close' : 'menu'}
                        </span>
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="md:hidden bg-surface-container-high border-t border-outline-variant"
                >
                    <div className="flex flex-col px-margin-mobile py-4 gap-3">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                className="font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors py-2"
                                onClick={() => setIsMenuOpen(false)}
                                whileHover={{ x: 5 }}
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}
        </motion.nav>
    )
}

export default Header
