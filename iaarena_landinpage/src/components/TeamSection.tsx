import { motion } from 'framer-motion';
import { Github, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

const TeamSection = () => {
    return (
        <section id="team" className="py-24 sm:py-32 relative">
            <div className="bg-glow absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96" style={{ backgroundColor: 'rgba(196, 154, 108, 0.08)' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-2xl font-medium mb-4" style={{ color: '#E7C7A0' }}>A Equipe</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                        Construído por criadores apaixonados
                    </h2>
                    <p className="text-lg" style={{ color: '#888888' }}>
                        Uma equipe pequena mas dedicada, comprometida em revolucionar a interação humano-IA.
                    </p>
                </motion.div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <div className="animated-border-card p-8 text-center transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-6 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #E7C7A0, #C49A6C)' }}>
                                <img 
                                    // src="./public/jose_vitor.jpeg"
                                    src="https://img.sanishtech.com/u/073b38b617e6d7719a59900963f4e6c3.jpg"
                                    alt="Menbro 1 (proponente)" 
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-1" style={{ fontFamily: "'Spectral', serif" }}>José Vitor (Proponente)</h3>
                            <p className="text-sm mb-4" style={{ color: '#E7C7A0' }}>Fundador & Desenvolvedor</p>
                            <p className="text-base leading-relaxed" style={{ color: '#888888' }}>
                                Fundador e desenvolvedor com experiência em criar soluções tecnológicas inovadoras e escaláveis.
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <a target='_blank' href="https://github.com/josevitor555" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                    <Github className="w-5 h-5" />
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/in/jos%C3%A9-vitor-sousa2003" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                    <Linkedin className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="animated-border-card p-8 text-center transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-6 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C49A6C, #8C5A3C)' }}>
                                <img 
                                    // src="/public/allan_macedo.png"
                                    src="https://img.sanishtech.com/u/42005384d0c1a701d62f3052ed6cfe68.png"
                                    alt="Líder de Marketing"
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-1" style={{ fontFamily: "'Spectral', serif" }}>Allan Macedo</h3>
                            <p className="text-sm mb-4" style={{ color: '#C49A6C' }}>Co-Fundador & Comunicações</p>
                            <p className="text-base leading-relaxed" style={{ color: '#888888' }}>
                                Profissional de Comunicação e Marketing Digital, atuando como influenciador e infoprodutor, com ampla experiência em validação de mercado, engajamento de público e estratégias de crescimento digital.
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <a target='_blank' href="https://www.youtube.com/@TheSnowww" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="animated-border-card p-8 text-center transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-6 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C49A6C, #8C5A3C)' }}>
                                <img 
                                    // src="/public/edson.png"
                                    src="https://img.sanishtech.com/u/4bcf5df2536612caf3ebc9553c2d924d.png"
                                    alt="Líder de Marketing" 
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-1" style={{ fontFamily: "'Spectral', serif" }}>Francisco Edson</h3>
                            <p className="text-sm mb-4" style={{ color: '#C49A6C' }}>Pós Graduação</p>
                            <p className="text-base leading-relaxed" style={{ color: '#888888' }}>
                                Especializado em Informática na Educação e Graduado em Sistemas de Informação pela Faculdade Integral Diferencial (2011). Atualmente Professor Especialista Efetivo do Instituto Federal de Educação, Ciência e Tecnologia do Piauí - Campus Angical. Tem experiência na área de Ciência da Computação, com ênfase em Software de Automação Comercial e Bancos de Dados, atuando principalmente nos seguintes temas: biometria, engenharia de software, heteroidentificação, revisão e bibliografia.
                            </p>
                            <div className="flex items-center justify-center gap-4 mt-6">
                                <a target='_blank' href="https://www.instagram.com/edsonkvalcante/#" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="animated-border-card p-8 text-center transition-all hover:scale-105 h-full">
                        <div className="animated-bg-card rounded-xl p-6 h-full" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #C49A6C, #8C5A3C)' }}>
                                {/* Substituído o ícone Megaphone por uma imagem */}
                                <img 
                                    src="/caminho/para/imagem4.jpg" 
                                    alt="Líder de Marketing" 
                                    className="w-24 h-24 rounded-full object-cover"
                                />
                            </div>
                            <h3 className="text-xl font-medium mb-1" style={{ fontFamily: "'Spectral', serif" }}>Warlles Carlos</h3>
                            <p className="text-sm mb-4" style={{ color: '#C49A6C' }}>Mestrado Concluído na UFPI</p>
                            <p className="text-base leading-relaxed" style={{ color: '#888888' }}>
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
                </motion.div>
            </div>
        </section>
    );
};

export default TeamSection;