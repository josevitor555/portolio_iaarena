import { Play } from 'lucide-react';

const PicthVideoSection = () => {
    return (
        <section id="pitch" className="py-24 sm:py-32 relative" style={{ backgroundColor: 'rgba(255,255,255,0.01)' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <p className="text-sm font-medium mb-4" style={{ color: '#E7C7A0' }}>Assista ao Nosso Pitch</p>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight mb-6" style={{ fontFamily: "'Spectral', serif" }}>
                        Veja o IAArena em ação
                    </h2>
                </div>

                <div className="w-full mx-auto relative">
                    {/* Background Glow Effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-[#E7C7A0] via-[#C49A6C] to-[#8C5A3C] rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition duration-500"></div>

                    <div className="animated-border-card aspect-video flex items-center justify-center relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.01] rounded-2xl shadow-2xl">
                        <div className="animated-bg-card absolute inset-0 flex items-center justify-center" style={{ backgroundColor: '#0D0D0D' }}>
                            {/* Radial Gradient Overlay */}
                            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, #333 0%, transparent 70%)', backgroundSize: '100% 100%' }}></div>

                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(231,199,160,0.3)]" style={{ backgroundColor: 'rgba(231, 199, 160, 0.1)', border: '1px solid rgba(231, 199, 160, 0.5)' }}>
                                    <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#E7C7A0' }}>
                                        <Play className="w-6 h-6 ml-1" style={{ color: '#0D0D0D' }} />
                                    </div>
                                </div>
                                <p className="mt-6 text-sm font-medium tracking-wide uppercase" style={{ color: '#E7C7A0' }}>Assistir Pitch</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PicthVideoSection;
