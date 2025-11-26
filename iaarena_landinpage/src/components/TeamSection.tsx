import { Code2, Megaphone, Github, Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
    return (
        <section id="team" className="py-24 sm:py-32 relative">
            <div className="bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96" style={{ backgroundColor: 'rgba(196, 154, 108, 0.08)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <p className="text-sm font-medium mb-4" style={{ color: '#E7C7A0' }}>A Equipe</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                        Construído por criadores apaixonados
                    </h2>
                    <p className="text-lg" style={{ color: '#888888' }}>
                        Uma equipe pequena mas dedicada, comprometida em revolucionar a interação humano-IA.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                    <div className="animated-border-card p-8 text-center transition-all hover:scale-105">
                        <div className="animated-bg-card rounded-xl p-6" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E7C7A0, #C49A6C)' }}>
                                <Code2 className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-medium mb-1" style={{ fontFamily: "'Spectral', serif" }}>Líder Técnico</h3>
                            <p className="text-sm mb-4" style={{ color: '#E7C7A0' }}>Co-Fundador & Desenvolvedor</p>
                            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                                Desenvolvedor full-stack com experiência em integração de IA, sistemas em tempo real e arquitetura escalável.
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <a href="#" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                    <Github className="w-5 h-5" />
                                </a>
                                <a href="#" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="animated-border-card p-8 text-center transition-all hover:scale-105">
                        <div className="animated-bg-card rounded-xl p-6" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C49A6C, #8C5A3C)' }}>
                                <Megaphone className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-medium mb-1" style={{ fontFamily: "'Spectral', serif" }}>Líder de Marketing</h3>
                            <p className="text-sm mb-4" style={{ color: '#C49A6C' }}>Co-Fundador & Comunicações</p>
                            <p className="text-sm leading-relaxed" style={{ color: '#888888' }}>
                                Comunicador estratégico com experiência em startups de tecnologia, construção de marca e desenvolvimento de comunidade.
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <a href="#" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a href="#" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
