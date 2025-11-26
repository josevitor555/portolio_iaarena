const Navigation = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b" style={{ backgroundColor: 'rgba(13, 13, 13, 0.8)', borderColor: '#222222' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E7C7A0' }}>
                            <span className="font-semibold text-sm tracking-tighter" style={{ fontFamily: "'Spectral', serif", color: '#0D0D0D' }}>IA</span>
                        </div>
                        <span className="font-semibold tracking-tight text-lg" style={{ fontFamily: "'Spectral', serif" }}>IAArena</span>
                    </div>
                    <div className="hidden md:flex items-center gap-8">
                        <a href="#problem" className="text-sm transition-colors" style={{ color: '#888888' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = '#888888'}>Problema</a>
                        <a href="#solution" className="text-sm transition-colors" style={{ color: '#888888' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = '#888888'}>Solução</a>
                        <a href="#innovation" className="text-sm transition-colors" style={{ color: '#888888' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = '#888888'}>Inovação</a>
                        <a href="#team" className="text-sm transition-colors" style={{ color: '#888888' }} onMouseOver={(e) => e.currentTarget.style.color = '#FFFFFF'} onMouseOut={(e) => e.currentTarget.style.color = '#888888'}>Equipe</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="#contact" className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg transition-colors border" style={{ color: '#FFFFFF', backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#333333' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.05)'}>
                            Fale Conosco
                        </a>
                        <a href="#pitch" className="px-4 py-2 text-sm font-medium rounded-lg transition-colors" style={{ backgroundColor: '#E7C7A0', color: '#0D0D0D' }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C49A6C'} onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E7C7A0'}>
                            Assistir Pitch
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
