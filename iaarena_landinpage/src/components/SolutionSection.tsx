import { motion } from 'framer-motion';
import {
    Swords,
    Sparkles,
    CheckCircle2,
    Type,
    Image,
    Music,
    Video,
    Zap,
    Brain,
    Database,
    Cloud
} from 'lucide-react';

const SolutionSection = () => {
    return (
        <section id="solution" className="py-24 sm:py-32 relative" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div className="bg-glow absolute top-1/2 left-0 w-96 h-96" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)' }}></div>
            <div className="bg-glow absolute bottom-0 right-0 w-64 h-64" style={{ backgroundColor: 'rgba(196, 154, 108, 0.1)', animationDelay: '-2s' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div 
                    className="text-center max-w-3xl mx-auto mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <p className="text-2xl font-medium mb-4" style={{ color: '#E7C7A0' }}>A Solução</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                        Dois modos poderosos.<br />Infinitas possibilidades.
                    </h2>
                    <p className="text-lg" style={{ color: '#888888' }}>
                        IAArena combina debates estruturados de IA com criação multimodal em tempo real em uma única plataforma integrada.
                    </p>
                </motion.div>

                <motion.div 
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    {/* Arena Mode */}
                    <div className="overflow-hidden group transition-all hover:scale-[1.02]">
                        <div className="animated-bg-card p-8" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)', border: '1px solid rgba(231, 199, 160, 0.3)' }}>
                                <Swords className="w-4 h-4" style={{ color: '#E7C7A0' }} />
                                <span className="text-xs font-medium" style={{ color: '#E7C7A0' }}>Modo Arena</span>
                            </div>
                            <h3 className="text-2xl font-medium tracking-tight mb-4" style={{ fontFamily: "'Spectral', serif" }}>Debates IA vs IA</h3>
                            <p className="mb-6 leading-relaxed" style={{ color: '#888888' }}>
                                Assista múltiplos sistemas de IA debatendo tópicos complexos de forma estruturada. Você é o juiz — avalie argumentos, aprenda com diferentes perspectivas e desenvolva pensamento crítico.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm" style={{ color: '#CCCCCC' }}>
                                    <CheckCircle2 className="w-5 h-5" style={{ color: '#2ECC71' }} />
                                    Argumentos de IA avaliados por humanos
                                </li>
                                <li className="flex items-center gap-3 text-sm" style={{ color: '#CCCCCC' }}>
                                    <CheckCircle2 className="w-5 h-5" style={{ color: '#2ECC71' }} />
                                    Múltiplos modelos de IA competindo
                                </li>
                                <li className="flex items-center gap-3 text-sm" style={{ color: '#CCCCCC' }}>
                                    <CheckCircle2 className="w-5 h-5" style={{ color: '#2ECC71' }} />
                                    Sistema de pontuação gamificado
                                </li>
                            </ul>
                        </div>
                        <div className="p-6" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderTop: '1px solid #222222' }}>
                            <div className="flex items-center justify-between">
                                <div className="flex -space-x-2">
                                    <div className="w-8 h-8 rounded-full border-2" style={{ background: 'linear-gradient(135deg, #E7C7A0, #C49A6C)', borderColor: '#0D0D0D' }}></div>
                                    <div className="w-8 h-8 rounded-full border-2" style={{ background: 'linear-gradient(135deg, #C49A6C, #8C5A3C)', borderColor: '#0D0D0D' }}></div>
                                </div>
                                <span className="text-xs" style={{ color: '#555555' }}>2 modelos de IA debatendo</span>
                            </div>
                        </div>
                    </div>

                    {/* Creative Mode */}
                    <div className="overflow-hidden group transition-all hover:scale-[1.02]">
                        <div className="animated-bg-card p-8" style={{ backgroundColor: '#0D0D0D' }}>
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6" style={{ backgroundColor: 'rgba(196, 154, 108, 0.1)', border: '1px solid rgba(196, 154, 108, 0.3)' }}>
                                <Sparkles className="w-4 h-4" style={{ color: '#C49A6C' }} />
                                <span className="text-xs font-medium" style={{ color: '#C49A6C' }}>Modo Criativo</span>
                            </div>
                            <h3 className="text-2xl font-medium tracking-tight mb-4" style={{ fontFamily: "'Spectral', serif" }}>Criação Multimodal</h3>
                            <p className="mb-6 leading-relaxed" style={{ color: '#888888' }}>
                                Gere conteúdo em múltiplos formatos em tempo real. Combine texto, imagens, áudio e vídeo com assistência de IA. Colabore com IA para dar vida à sua visão criativa.
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-center gap-3 text-sm" style={{ color: '#CCCCCC' }}>
                                    <CheckCircle2 className="w-5 h-5" style={{ color: '#2ECC71' }} />
                                    Geração multimodal em tempo real
                                </li>
                                <li className="flex items-center gap-3 text-sm" style={{ color: '#CCCCCC' }}>
                                    <CheckCircle2 className="w-5 h-5" style={{ color: '#2ECC71' }} />
                                    Texto, imagem, áudio e vídeo
                                </li>
                                <li className="flex items-center gap-3 text-sm" style={{ color: '#CCCCCC' }}>
                                    <CheckCircle2 className="w-5 h-5" style={{ color: '#2ECC71' }} />
                                    Colaboração humano-IA
                                </li>
                            </ul>
                        </div>
                        <div className="p-8" style={{ backgroundColor: 'rgba(255,255,255,0.02)', borderTop: '1px solid #222222' }}>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2">
                                    <Type className="w-4 h-4" style={{ color: '#555555' }} />
                                    <Image className="w-4 h-4" style={{ color: '#555555' }} />
                                    <Music className="w-4 h-4" style={{ color: '#555555' }} />
                                    <Video className="w-4 h-4" style={{ color: '#555555' }} />
                                </div>
                                <span className="text-xs" style={{ color: '#555555' }}>4 modalidades de saída</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div 
                    className="mt-16 text-center justify-center flex flex-col items-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <p className="text-2xl mb-6" style={{ color: '#555555' }}>Impulsionado por tecnologia moderna</p>
                    <div className="rounded-lg px-6 py-4 max-w-max flex flex-wrap items-center justify-center gap-8" style={{ 
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <div className="flex items-center gap-2" style={{ color: '#888888' }}>
                            <Zap className="w-5 h-5" />
                            <span className="text-base">WebSockets</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: '#888888' }}>
                            <Brain className="w-5 h-5" />
                            <span className="text-base">LLM APIs</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: '#888888' }}>
                            <Database className="w-5 h-5" />
                            <span className="text-base">Supabase</span>
                        </div>
                        <div className="flex items-center gap-2" style={{ color: '#888888' }}>
                            <Cloud className="w-5 h-5" />
                            <span className="text-base">Cloud Native</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SolutionSection;