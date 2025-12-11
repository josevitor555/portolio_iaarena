import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUsers, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const ProblemSection = () => {
    return (
        <section id="problem" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <motion.p 
                        className="text-2xl font-medium mb-4"
                        style={{ color: '#E7C7A0' }}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        O Problema
                    </motion.p>
                    <motion.h2 
                        className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6"
                        style={{ fontFamily: "'Spectral', serif" }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        A interação com IA está presa no passado
                    </motion.h2>
                    <motion.p 
                        className="text-lg leading-relaxed mb-12"
                        style={{ color: '#888888' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        As interações humano-IA atuais são isoladas, unidimensionais e não aproveitam todo o potencial da inteligência artificial para aprendizado e criação.
                    </motion.p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <div className="p-8 transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-8 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)' }}>
                                <FontAwesomeIcon icon={faMessage} className="w-6 h-6" style={{ color: '#E7C7A0' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Interações Superficiais</h3>
                            <p className="text-base leading-relaxed" style={{ color: '#888888' }}>Formatos simples de perguntas e respostas limitam a profundidade do engajamento da IA e os resultados de aprendizado.</p>
                        </div>
                    </div>

                    <div className="p-8 transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-8 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-8" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)' }}>
                                <FontAwesomeIcon icon={faUsers} className="w-6 h-6" style={{ color: '#E7C7A0' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Experiências Isoladas</h3>
                            <p className="text-base leading-relaxed" style={{ color: '#888888' }}>Sem ambientes estruturados para observar trocas intelectuais entre IAs.</p>
                        </div>
                    </div>

                    <div className="p-8 transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-8 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)' }}>
                                <FontAwesomeIcon icon={faLayerGroup} className="w-6 h-6" style={{ color: '#E7C7A0' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Modalidades Limitadas</h3>
                            <p className="text-base leading-relaxed" style={{ color: '#888888' }}>Interações apenas em texto perdem o potencial criativo da geração multimodal de IA.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ProblemSection;