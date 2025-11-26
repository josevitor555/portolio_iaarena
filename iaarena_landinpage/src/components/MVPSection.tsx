import { Rocket } from 'lucide-react';

const MVPSection = () => {
    return (
        <section className="py-24 sm:py-32 relative" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: 'rgba(241, 196, 15, 0.1)', border: '1px solid rgba(241, 196, 15, 0.3)' }}>
                        <Rocket className="w-4 h-4" style={{ color: '#F1C40F' }} />
                        <span className="text-xs font-medium" style={{ color: '#F1C40F' }}>Estágio Atual</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                        MVP em Desenvolvimento
                    </h2>
                    <p className="text-lg" style={{ color: '#888888' }}>
                        Estamos construindo a fundação. Aqui está uma prévia do que está por vir.
                    </p>
                </div>

                {/* Roadmap */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, #E7C7A0, #C49A6C, #8C5A3C, #444444)' }}></div>

                        <div className="space-y-12">
                            <div className="relative flex items-center gap-8 md:gap-0">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 md:-translate-x-1.5" style={{ backgroundColor: '#2ECC71', boxShadow: '0 0 0 4px #0D0D0D, 0 0 20px rgba(46, 204, 113, 0.5)' }}></div>
                                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                                    <p className="text-sm font-medium" style={{ color: '#2ECC71' }}>Concluído</p>
                                    <h3 className="text-lg font-medium" style={{ fontFamily: "'Spectral', serif" }}>Conceito & Arquitetura</h3>
                                    <p className="text-sm" style={{ color: '#888888' }}>Design do sistema, seleção de tech stack, protótipos iniciais</p>
                                </div>
                            </div>

                            <div className="relative flex items-center gap-8 md:gap-0">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 md:-translate-x-1.5 animate-pulse" style={{ backgroundColor: '#E7C7A0', boxShadow: '0 0 0 4px #0D0D0D, 0 0 20px rgba(231, 199, 160, 0.5)' }}></div>
                                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                                    <p className="text-sm font-medium" style={{ color: '#E7C7A0' }}>Em Progresso</p>
                                    <h3 className="text-lg font-medium" style={{ fontFamily: "'Spectral', serif" }}>Desenvolvimento do MVP</h3>
                                    <p className="text-sm" style={{ color: '#888888' }}>Modo Arena principal, Modo Criativo básico, autenticação de usuário</p>
                                </div>
                            </div>

                            <div className="relative flex items-center gap-8 md:gap-0">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 md:-translate-x-1.5" style={{ backgroundColor: '#444444', boxShadow: '0 0 0 4px #0D0D0D' }}></div>
                                <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                                    <p className="text-sm font-medium" style={{ color: '#555555' }}>Em Breve</p>
                                    <h3 className="text-lg font-medium" style={{ fontFamily: "'Spectral', serif" }}>Lançamento Beta</h3>
                                    <p className="text-sm" style={{ color: '#888888' }}>Beta fechado com early adopters, coleta de feedback</p>
                                </div>
                            </div>

                            <div className="relative flex items-center gap-8 md:gap-0">
                                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full transform -translate-x-1.5 md:-translate-x-1.5" style={{ backgroundColor: '#444444', boxShadow: '0 0 0 4px #0D0D0D' }}></div>
                                <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12 md:ml-auto">
                                    <p className="text-sm font-medium" style={{ color: '#555555' }}>Futuro</p>
                                    <h3 className="text-lg font-medium" style={{ fontFamily: "'Spectral', serif" }}>Lançamento Público</h3>
                                    <p className="text-sm" style={{ color: '#888888' }}>Lançamento completo da plataforma, recursos empresariais, acesso à API</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MVPSection;
