const Footer = () => {
    return (
        <footer className="py-12" style={{ borderTop: '1px solid #222222' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E7C7A0' }}>
                            <span className="font-semibold text-sm tracking-tighter" style={{ fontFamily: "'Spectral', serif", color: '#0D0D0D' }}>IA</span>
                        </div>
                        <span className="font-semibold tracking-tight" style={{ fontFamily: "'Spectral', serif" }}>IAArena</span>
                    </div>

                    <p className="text-sm" style={{ color: '#555555' }}>
                        © 2024 IAArena. Todos os direitos reservados.
                    </p>

                    <div className="flex items-center gap-6">
                        <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#555555' }}>Privacidade</a>
                        <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#555555' }}>Termos</a>
                        <a href="#" className="text-sm transition-colors hover:text-white" style={{ color: '#555555' }}>Contato</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
