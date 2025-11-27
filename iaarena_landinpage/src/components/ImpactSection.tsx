import { motion } from 'framer-motion';
import { Lightbulb, Globe, HeartHandshake } from 'lucide-react';

const ImpactSection = () => {
    return (
        <section className="py-24 sm:py-32 relative">
            <div className="bg-glow absolute top-1/3 right-1/3 w-64 h-64" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)', animationDelay: '-0.5s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-sm font-medium mb-4" style={{ color: '#E7C7A0' }}>Impacto Socioambiental</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                        Construindo um futuro mais inclusivo
                    </h2>
                    <p className="text-lg" style={{ color: '#888888' }}>
                        O IAArena está comprometido em democratizar o acesso à IA e promover o pensamento crítico em todo o país.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="animated-border-card relative overflow-hidden p-8 transition-all hover:scale-105">
                        <div className="animated-bg-card rounded-xl p-6" style={{ backgroundColor: '#0D0D0D' }}>
                            <Lightbulb className="w-10 h-10 mb-4" style={{ color: '#E7C7A0' }} />
                            <h3 className="text-xl font-medium mb-3 tracking-tight" style={{ fontFamily: "'Spectral', serif" }}>Pensamento Crítico</h3>
                            <p className="leading-relaxed" style={{ color: '#888888' }}>
                                Observar debates de IA desenvolve habilidades analíticas e a capacidade de avaliar argumentos complexos de múltiplas perspectivas.
                            </p>
                        </div>
                    </div>

                    <div className="animated-border-card relative overflow-hidden p-8 transition-all hover:scale-105">
                        <div className="animated-bg-card rounded-xl p-6" style={{ backgroundColor: '#0D0D0D' }}>
                            <Globe className="w-10 h-10 mb-4" style={{ color: '#C49A6C' }} />
                            <h3 className="text-xl font-medium mb-3 tracking-tight" style={{ fontFamily: "'Spectral', serif" }}>Democratização da IA</h3>
                            <p className="leading-relaxed" style={{ color: '#888888' }}>
                                Tornando capacidades avançadas de IA acessíveis a todos, independentemente de conhecimento técnico ou recursos.
                            </p>
                        </div>
                    </div>

                    <div className="animated-border-card relative overflow-hidden p-8 transition-all hover:scale-105">
                        <div className="animated-bg-card rounded-xl p-6" style={{ backgroundColor: '#0D0D0D' }}>
                            <HeartHandshake className="w-10 h-10 mb-4" style={{ color: '#8C5A3C' }} />
                            <h3 className="text-xl font-medium mb-3 tracking-tight" style={{ fontFamily: "'Spectral', serif" }}>Inclusão Tecnológica</h3>
                            <p className="leading-relaxed" style={{ color: '#888888' }}>
                                Reduzindo a exclusão digital ao fornecer ferramentas intuitivas de IA para comunidades e instituições carentes.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ImpactSection;