import { motion } from 'framer-motion';
import { Play } from "lucide-react";
import { useState } from 'react';

const PitchVideoSection = () => {
    const [showVideo, setShowVideo] = useState(false);

    return (
        <section 
            id="pitch" 
            className="pitch-section py-24 sm:py-32"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="pitch-subtitle">Assista ao Nosso Pitch</p>

                    <h2 className="pitch-title">
                        Veja o IAArena em ação
                    </h2>
                </motion.div>

                {/* Wrapper */}
                <motion.div 
                    className="pitch-wrapper mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    
                    {/* Glow por trás */}
                    <div className="pitch-glow"></div>

                    {/* Card */}
                    <div className="pitch-card group cursor-pointer" onClick={() => setShowVideo(true)}>
                        {/* Camada animada */}
                        <div className="pitch-bg"></div>

                        {/* Conteúdo */}
                        <div className="pitch-content">
                            <div className="pitch-play group-hover:scale-110 transition-transform">
                                <div className="pitch-play-inner">
                                    <Play className="w-6 h-6 ml-1" />
                                </div>
                            </div>

                            <p className="pitch-label">
                                Assistir Pitch
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Modal do Vídeo */}
            {showVideo && (
                <motion.div 
                    className="fixed inset-0 bg-gray-160/10 backdrop-blur-sm flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="relative w-full max-w-4xl">
                        <motion.button 
                            className="absolute -top-12 right-0 text-white text-2xl"
                            onClick={() => setShowVideo(false)}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            ✕
                        </motion.button>
                        <motion.video 
                            controls 
                            autoPlay 
                            className="w-full rounded-lg"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3, delay: 0.15 }}
                        >
                            <source src="/Apresentação do IAArena.mp4" type="video/mp4" />
                            Seu navegador não suporta a reprodução de vídeos.
                        </motion.video>
                    </div>
                </motion.div>
            )}
        </section>
    );
}

export default PitchVideoSection;
