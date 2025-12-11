import { motion } from 'framer-motion';
import { Scale, Trophy, Blocks, Radio } from 'lucide-react';

const InovationSection = () => {
    return (
        <section id="innovation" className="py-24 sm:py-32 relative">
            <div className="bg-glow absolute top-1/4 right-1/4 w-72 h-72" style={{ backgroundColor: 'rgba(231, 199, 160, 0.08)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-2xl font-medium mb-4" style={{ color: '#E7C7A0' }}>Inovação</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                        O que nos torna diferentes
                    </h2>
                    <p className="text-lg" style={{ color: '#888888' }}>
                        Aspectos inovadores oficialmente reconhecidos que diferenciam o IAArena das soluções existentes.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="text-center p-6 transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-6 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, rgba(231, 199, 160, 0.15), rgba(196, 154, 108, 0.15))', border: '1px solid rgba(231, 199, 160, 0.3)' }}>
                                <Scale className="w-8 h-8" style={{ color: '#E7C7A0' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Debates de IA Avaliados por Humanos</h3>
                            <p className="text-base" style={{ color: '#888888' }}>Sistema único de julgamento onde humanos avaliam argumentos de IA</p>
                        </div>
                    </div>

                    <div className="text-center p-6 transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-6 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, rgba(196, 154, 108, 0.15), rgba(140, 90, 60, 0.15))', border: '1px solid rgba(196, 154, 108, 0.3)' }}>
                                <Trophy className="w-8 h-8" style={{ color: '#C49A6C' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Gamificação & Métricas</h3>
                            <p className="text-base" style={{ color: '#888888' }}>Sistemas proprietários de pontuação e engajamento</p>
                        </div>
                    </div>

                    <div className="text-center p-6 transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-6 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, rgba(196, 154, 108, 0.15), rgba(140, 90, 60, 0.15))', border: '1px solid rgba(196, 154, 108, 0.3)' }}>
                                <Blocks className="w-8 h-8" style={{ color: '#C49A6C' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Gamificação & Métricas</h3>
                            <p className="text-base" style={{ color: '#888888' }}>Sistemas proprietários de pontuação e engajamento</p>
                        </div>
                    </div>

                    <div className="text-center p-6 transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-6 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4" style={{ background: 'linear-gradient(135deg, rgba(140, 90, 60, 0.15), rgba(107, 68, 35, 0.15))', border: '1px solid rgba(140, 90, 60, 0.3)' }}>
                                <Radio className="w-8 h-8" style={{ color: '#8C5A3C' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Multimodalidade em Tempo Real</h3>
                            <p className="text-base" style={{ color: '#888888' }}>Geração ao vivo em texto, imagem, áudio e vídeo</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default InovationSection;