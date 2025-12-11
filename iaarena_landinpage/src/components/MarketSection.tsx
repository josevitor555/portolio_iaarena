import { motion } from 'framer-motion';
import { GraduationCap, PenTool, Users } from 'lucide-react';

const MarketSection = () => {
    return (
        <section className="py-24 sm:py-32 relative" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div className="bg-glow absolute bottom-1/4 left-1/4 w-80 h-80" style={{ backgroundColor: 'rgba(196, 154, 108, 0.1)', animationDelay: '-1.5s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-2xl font-medium mb-4" style={{ color: '#E7C7A0' }}>Oportunidade de Mercado</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                            Um mercado em rápida expansão
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: '#888888' }}>
                            O mercado de IA na educação na América Latina deverá atingir US$ 0,5 bilhão em 2025. A partir daí, espera-se que cresça a uma taxa composta de crescimento anual de 33,5%, alcançando US$ 2,1 bilhões em 2030.
                            <br /><br />
                            Fonte: Resourcera, 2025.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)' }}>
                                    <GraduationCap className="w-6 h-6" style={{ color: '#E7C7A0' }} />
                                </div>
                                <div>
                                    <p className="font-medium">Universidades e Escolas</p>
                                    <p className="text-base" style={{ color: '#888888' }}>Instituições educacionais buscando ferramentas inovadoras de IA</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(196, 154, 108, 0.1)' }}>
                                    <PenTool className="w-6 h-6" style={{ color: '#C49A6C' }} />
                                </div>
                                <div>
                                    <p className="font-medium">Criadores de Conteúdo</p>
                                    <p className="text-base" style={{ color: '#888888' }}>Profissionais aproveitando a IA para conteúdo multimodal</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: 'rgba(140, 90, 60, 0.1)' }}>
                                    <Users className="w-6 h-6" style={{ color: '#8C5A3C' }} />
                                </div>
                                <div>
                                    <p className="font-medium">Entusiastas de IA</p>
                                    <p className="text-base" style={{ color: '#888888' }}>Early adopters explorando capacidades de IA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className="grid grid-cols-2 gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="p-6 transition-all hover:scale-105 h-full">
                            <div className="animated-bg-card rounded-xl p-4 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                                <p className="text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Spectral', serif", color: '#E7C7A0' }}>$0,5B</p>
                                <p className="text-base mt-2" style={{ color: '#888888' }}>Espera-se alcançar até 2025</p>
                            </div>
                        </div>
                        <div className="p-6 transition-all hover:scale-105 h-full">
                            <div className="animated-bg-card rounded-xl p-4 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                                <p className="text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Spectral', serif", color: '#C49A6C' }}>$2,1B</p>
                                <p className="text-base mt-2" style={{ color: '#888888' }}>Com taxa composta de crescimento anual de 33,5%. Espera-se alcançar $2,1 bilhões até 2030.</p>
                            </div>
                        </div>
                        <div className="p-6 transition-all hover:scale-105 h-full">
                            <div className="animated-bg-card rounded-xl p-4 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                                <p className="text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Spectral', serif", color: '#8C5A3C' }}>$48M</p>
                                <p className="text-base mt-2" style={{ color: '#888888' }}>A América Latina se destaca pela sua eficiência de crescimento, gerando aproximadamente US$ 48 milhões em receita adicional para cada 1% de CAGR.</p>
                            </div>
                        </div>
                        <div className="p-6 transition-all hover:scale-105 h-full">
                            <div className="animated-bg-card rounded-xl p-4 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                                <p className="text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Spectral', serif", color: '#C49A6C' }}>$32,27B</p>
                                <p className="text-base mt-2" style={{ color: '#888888' }}>O mercado global de IA na educação deverá crescer de US$ 7,71 bilhões em 2025 para US$ 32,27 bilhões em 2030, expandindo a uma taxa composta de crescimento anual de 31,2%.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MarketSection;