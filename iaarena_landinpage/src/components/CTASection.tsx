import { Download, Mail, Github, Twitter, Linkedin, MessageCircle } from 'lucide-react';

const CTASection = () => {
    return (
        <section id="contact" className="py-24 sm:py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="animated-border-card relative overflow-hidden p-8 sm:p-12 lg:p-16">
                    <div className="animated-bg-card absolute inset-0" style={{ backgroundColor: '#0D0D0D' }}></div>
                    <div className="bg-glow absolute top-0 right-0 w-96 h-96" style={{ backgroundColor: 'rgba(231, 199, 160, 0.15)' }}></div>
                    <div className="bg-glow absolute bottom-0 left-0 w-96 h-96" style={{ backgroundColor: 'rgba(196, 154, 108, 0.15)', animationDelay: '-2s' }}></div>

                    <div className="relative z-10 max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                            Pronto para explorar o futuro da interação com IA?
                        </h2>
                        <p className="text-lg mb-10" style={{ color: '#888888' }}>
                            Obtenha nosso sumário executivo, documentação técnica ou agende uma chamada com nossa equipe.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium rounded-xl transition-all hover:scale-105" style={{ backgroundColor: '#E7C7A0', color: '#0D0D0D' }}>
                                <Download className="w-5 h-5" />
                                Baixar PDF do Pitch
                            </a>
                            <a href="mailto:contact@iaarena.io" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-medium rounded-xl transition-colors border hover:bg-white/10" style={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#444444' }}>
                                <Mail className="w-5 h-5" />
                                Fale Conosco
                            </a>
                        </div>

                        <div className="flex items-center justify-center gap-6 mt-8">
                            <a href="#" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                <Github className="w-6 h-6" />
                            </a>
                            <a href="#" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="https://wa.me/1234567890" className="transition-colors hover:text-white" style={{ color: '#555555' }}>
                                <MessageCircle className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
