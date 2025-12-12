import { useState, useEffect } from 'react'

const WarningVideo = () => {
    const [showModal, setShowModal] = useState(true)

    // Sempre mostrar o modal quando o componente for montado
    useEffect(() => {
        setShowModal(true)
    }, [])

    const handleClose = () => {
        setShowModal(false)
    }

    if (!showModal) {
        return null
    }

    return (
        <div className="fixed inset-0 bg-black/10 backdrop-blur-md bg-opacity-70 flex items-center justify-center z-1000 p-4">
            <div className="bg-primary-bg rounded-2xl border border-[#222222] max-w-2xl w-full p-8 relative">
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
                
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-3xl font-light mb-4">Seja bem vindo ao IAArena!</h1>
                    <p className="font-light text-lg mb-6">
                        Onde Mentes de IA Debatem & Criam. Caso o vídeo não apareça pela primeira vez que você entrar no site, 
                        recarregue dando F5 na página até o conteúdo do vídeo ser mostrado.
                    </p>
                    <button 
                        onClick={handleClose}
                        className="px-6 py-3 rounded-lg font-medium transition-colors"
                        style={{ backgroundColor: '#E7C7A0', color: '#0D0D0D' }}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#C49A6C'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#E7C7A0'}
                    >
                        Entendi
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WarningVideo