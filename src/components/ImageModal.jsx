import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const ImageModal = ({ isOpen, image, onClose }) => {
    React.useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative max-w-4xl max-h-[90vh] w-full bg-surface-container-high rounded-lg overflow-hidden"
                    >
                        {/* Close button */}
                        <motion.button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 bg-surface-container-high/80 hover:bg-surface-variant border border-outline-variant p-2 rounded-lg transition-all"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span className="material-symbols-outlined text-primary">close</span>
                        </motion.button>

                        {/* Image container */}
                        <div className="w-full h-full flex items-center justify-center bg-surface-container-low">
                            {image && image.type === 'image' ? (
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-contain"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="text-center">
                                        <span className="text-on-surface-variant font-code-block">{image?.placeholder}</span>
                                        <p className="text-on-surface-variant text-sm mt-2 px-4">{image?.description}</p>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Image info */}
                        {image && (
                            <div className="bg-surface-container border-t border-outline-variant p-4">
                                <p className="font-label-caps text-label-caps text-primary-fixed-dim mb-1">
                                    {image.title}
                                </p>
                                <p className="text-body-sm text-on-surface-variant">
                                    {image.description}
                                </p>
                            </div>
                        )}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ImageModal
