export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
}

export const slideInLeft = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

export const slideInRight = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
}

export const scaleIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.6, ease: "easeOut" }
}

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2,
        }
    }
}

export const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        }
    }
}

export const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        }
    }
}

export const hoverScale = {
    whileHover: { scale: 1.05, transition: { duration: 0.3 } },
    whileTap: { scale: 0.95 }
}

// Animaciones por sección
export const methodologyVariants = {
    hidden: { opacity: 0, rotateX: -20 },
    visible: {
        opacity: 1,
        rotateX: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
}

export const methodologyCardVariants = {
    hidden: { opacity: 0, rotateY: -30, x: -20 },
    visible: (custom) => ({
        opacity: 1,
        rotateY: 0,
        x: 0,
        transition: {
            duration: 0.6,
            delay: custom * 0.15,
            ease: "easeOut"
        }
    })
}

export const technicalFlowVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: custom * 0.1,
            ease: "easeOut"
        }
    })
}

export const visualizationsVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: (custom) => ({
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
            duration: 0.7,
            delay: custom * 0.12,
            ease: "easeOut"
        }
    })
}

export const resultsCardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.85 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            delay: custom * 0.15,
            ease: "backOut"
        }
    })
}

export const conclusionsVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut"
        }
    }
}

export const conclusionsItemVariants = {
    hidden: { opacity: 0, x: -30, y: 10 },
    visible: (custom) => ({
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.6,
            delay: custom * 0.1,
            ease: "easeOut"
        }
    })
}
