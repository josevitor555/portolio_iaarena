import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faUsers, faLayerGroup } from '@fortawesome/free-solid-svg-icons';

const ProblemSection = () => {
    return (
        <section id="problem" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl">
                    <p className="text-sm font-medium mb-4" style={{ color: '#E7C7A0' }}>O Problema</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                        A interação com IA está presa no passado
                    </h2>
                    <p className="text-lg leading-relaxed mb-12" style={{ color: '#888888' }}>
                        As interações humano-IA atuais são isoladas, unidimensionais e não aproveitam todo o potencial da inteligência artificial para aprendizado e criação.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="animated-border-card p-6 transition-all hover:scale-105">
                        <div className="animated-bg-card rounded-xl p-6" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(231, 76, 60, 0.1)' }}>
                                <FontAwesomeIcon icon={faMessage} className="w-6 h-6" style={{ color: '#E74C3C' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Interações Superficiais</h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>Formatos simples de perguntas e respostas limitam a profundidade do engajamento da IA e os resultados de aprendizado.</p>
                        </div>
                    </div>

                    <div className="animated-border-card p-6 transition-all hover:scale-105">
                        <div className="animated-bg-card rounded-xl p-6" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(241, 196, 15, 0.1)' }}>
                                <FontAwesomeIcon icon={faUsers} className="w-6 h-6" style={{ color: '#F1C40F' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Experiências Isoladas</h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>Sem ambientes estruturados para observar trocas intelectuais entre IAs.</p>
                        </div>
                    </div>

                    <div className="animated-border-card p-6 transition-all hover:scale-105">
                        <div className="animated-bg-card rounded-xl p-6" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)' }}>
                                <FontAwesomeIcon icon={faLayerGroup} className="w-6 h-6" style={{ color: '#E7C7A0' }} />
                            </div>
                            <h3 className="text-lg font-medium mb-2" style={{ fontFamily: "'Spectral', serif" }}>Modalidades Limitadas</h3>
                            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>Interações apenas em texto perdem o potencial criativo da geração multimodal de IA.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSection;
