import { GraduationCap, PenTool, Users } from 'lucide-react';

const MarketSection = () => {
    return (
        <section className="py-24 sm:py-32 relative" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div className="bg-glow absolute bottom-1/4 left-1/4 w-80 h-80" style={{ backgroundColor: 'rgba(196, 154, 108, 0.1)', animationDelay: '-1.5s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-sm font-medium mb-4" style={{ color: '#E7C7A0' }}>Oportunidade de Mercado</p>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                            Um mercado em rápida expansão
                        </h2>
                        <p className="text-lg mb-8 leading-relaxed" style={{ color: '#888888' }}>
                            O mercado global de IA na educação está projetado para atingir US$ 20 bilhões até 2027. O IAArena está posicionado na interseção de educação, criatividade e tecnologia de IA.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)' }}>
                                    <GraduationCap className="w-6 h-6" style={{ color: '#E7C7A0' }} />
                                </div>
                                <div>
                                    <p className="font-medium">Universidades e Escolas</p>
                                    <p className="text-sm" style={{ color: '#888888' }}>Instituições educacionais buscando ferramentas inovadoras de IA</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(196, 154, 108, 0.1)' }}>
                                    <PenTool className="w-6 h-6" style={{ color: '#C49A6C' }} />
                                </div>
                                <div>
                                    <p className="font-medium">Criadores de Conteúdo</p>
                                    <p className="text-sm" style={{ color: '#888888' }}>Profissionais aproveitando a IA para conteúdo multimodal</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgba(140, 90, 60, 0.1)' }}>
                                    <Users className="w-6 h-6" style={{ color: '#8C5A3C' }} />
                                </div>
                                <div>
                                    <p className="font-medium">Entusiastas de IA</p>
                                    <p className="text-sm" style={{ color: '#888888' }}>Early adopters explorando capacidades de IA</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="animated-border-card p-6 transition-all hover:scale-105">
                            <div className="animated-bg-card rounded-xl p-4" style={{ backgroundColor: '#0D0D0D' }}>
                                <p className="text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Spectral', serif", color: '#E7C7A0' }}>$20B</p>
                                <p className="text-sm mt-2" style={{ color: '#888888' }}>Mercado de IA na Educação até 2027</p>
                            </div>
                        </div>
                        <div className="animated-border-card p-6 transition-all hover:scale-105">
                            <div className="animated-bg-card rounded-xl p-4" style={{ backgroundColor: '#0D0D0D' }}>
                                <p className="text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Spectral', serif", color: '#C49A6C' }}>45%</p>
                                <p className="text-sm mt-2" style={{ color: '#888888' }}>Taxa de Crescimento Anual</p>
                            </div>
                        </div>
                        <div className="animated-border-card p-6 transition-all hover:scale-105">
                            <div className="animated-bg-card rounded-xl p-4" style={{ backgroundColor: '#0D0D0D' }}>
                                <p className="text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Spectral', serif", color: '#8C5A3C' }}>1.5B</p>
                                <p className="text-sm mt-2" style={{ color: '#888888' }}>Estudantes Globais</p>
                            </div>
                        </div>
                        <div className="animated-border-card p-6 transition-all hover:scale-105">
                            <div className="animated-bg-card rounded-xl p-4" style={{ backgroundColor: '#0D0D0D' }}>
                                <p className="text-4xl sm:text-5xl font-medium tracking-tight" style={{ fontFamily: "'Spectral', serif", color: '#E7C7A0' }}>85%</p>
                                <p className="text-sm mt-2" style={{ color: '#888888' }}>Querem Ferramentas de Aprendizado de IA</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MarketSection;
