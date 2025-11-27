import { motion } from 'framer-motion';
import { Play } from "lucide-react";

const PitchVideoSection = () => {
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
                    <div className="pitch-card group cursor-pointer">

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
        </section>
    );
}

export default PitchVideoSection;