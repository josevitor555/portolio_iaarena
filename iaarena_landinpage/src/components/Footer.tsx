import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="py-12" style={{ borderTop: '1px solid #222222' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="flex flex-col md:flex-row items-center justify-between gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <motion.div 
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: '#E7C7A0' }}>
                            <span className="font-semibold text-sm tracking-tighter" style={{ fontFamily: "'Spectral', serif", color: '#0D0D0D' }}>IA</span>
                        </div>
                        <span className="font-semibold tracking-tight" style={{ fontFamily: "'Spectral', serif" }}>IAArena</span>
                    </motion.div>

                    <motion.p 
                        className="text-base"
                        style={{ color: '#555555' }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        © 2025 IAArena. Todos os direitos reservados.
                    </motion.p>

                    <motion.div 
                        className="flex items-center gap-6"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <a href="#" className="text-base transition-colors hover:text-white" style={{ color: '#555555' }}>Privacidade</a>
                        <a href="#" className="text-base transition-colors hover:text-white" style={{ color: '#555555' }}>Termos</a>
                        <a href="#" className="text-base transition-colors hover:text-white" style={{ color: '#555555' }}>Contato</a>
                    </motion.div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;
