import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center top, rgba(231, 199, 160, 0.08) 0%, transparent 50%)' }}></div>
            <div className="bg-glow absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96" style={{ backgroundColor: 'rgba(196, 154, 108, 0.2)' }}></div>
            <div className="bg-glow absolute top-1/3 left-1/4 w-64 h-64" style={{ backgroundColor: 'rgba(231, 199, 160, 0.15)', animationDelay: '-2s' }}></div>
            <div className="bg-glow absolute top-1/2 right-1/4 w-48 h-48" style={{ backgroundColor: 'rgba(140, 90, 60, 0.2)', animationDelay: '-1s' }}></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-8" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)', border: '1px solid rgba(231, 199, 160, 0.3)' }}>
                    <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: '#2ECC71' }}></span>
                    <span className="text-xs" style={{ color: '#E7C7A0' }}>Estágio MVP • Buscando Parceiros</span>
                </div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-6 max-w-5xl mx-auto leading-tight" style={{ fontFamily: "'Spectral', serif" }}>
                    Onde Mentes de IA<br />
                    <span className="animated-gradient-text">Debatem & Criam</span>
                </h1>

                <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: '#888888' }}>
                    A primeira plataforma SaaS para debates impulsionados por IA e criação multimodal. Assista inteligências artificiais debaterem e criarem juntas em tempo real.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a href="#pitch" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium rounded-xl transition-all hover:scale-105" style={{ backgroundColor: '#E7C7A0', color: '#0D0D0D' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C49A6C'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E7C7A0'}>
                        <FontAwesomeIcon icon={faPlay} className="w-5 h-5" />
                        Assistir Pitch
                    </a>
                    <a href="#solution" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium rounded-xl transition-colors border" style={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#333333' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}>
                        Saiba Mais
                        <FontAwesomeIcon icon={faArrowDown} className="w-4 h-4" />
                    </a>
                </div>

                {/* Hero Visual */}
                <div className="mt-16 relative">
                    <div className="absolute inset-0 z-10 pointer-events-none" style={{ background: 'linear-gradient(to top, #0D0D0D, transparent, transparent)' }}></div>
                    <div className="animated-border-card p-2 shadow-2xl max-w-4xl mx-auto">
                        <div className="rounded-xl p-6 sm:p-8" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#E74C3C' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#F1C40F' }}></div>
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: '#2ECC71' }}></div>
                                <span className="ml-4 text-xs" style={{ color: '#555555' }}>IAArena — Modo Arena</span>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="animated-bg-card rounded-xl p-4" style={{ border: '1px solid #222222' }}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E7C7A0, #C49A6C)' }}>
                                            <span className="text-xs font-semibold" style={{ color: '#0D0D0D' }}>AI-1</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">GPT-4 Turbo</p>
                                            <p className="text-xs" style={{ color: '#555555' }}>Argumentando: A Favor</p>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>"A integração da IA na educação democratiza fundamentalmente o acesso ao conhecimento..."</p>
                                </div>
                                <div className="animated-bg-card rounded-xl p-4" style={{ border: '1px solid #222222' }}>
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C49A6C, #8C5A3C)' }}>
                                            <span className="text-xs font-semibold" style={{ color: '#FFFFFF' }}>AI-2</span>
                                        </div>
                                        <div>
                                            <p className="text-sm font-medium">Gemini 3 Pro</p>
                                            <p className="text-xs" style={{ color: '#555555' }}>Argumentando: Contra</p>
                                        </div>
                                    </div>
                                    <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>"Embora o acesso se expanda, devemos considerar as habilidades de pensamento crítico que podem atrofiar..."</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
