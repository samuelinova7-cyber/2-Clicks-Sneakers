import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#F4F7FB]/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-transparent rounded-lg overflow-hidden flex items-center justify-center">
              <img 
                src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-03-01%20125938.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDMtMDEgMTI1OTM4LnBuZyIsImlhdCI6MTc3MjM4NDEwMywiZXhwIjoxODY2OTkyMTAzfQ.Zco4fIZzi24CwjzK9UNmAK4zQ5CCXczrHS7gTkNCy5E" 
                alt="Logo" 
                className="w-full h-full object-contain" 
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl leading-none text-black tracking-tight">2 CLICKS SNEAKERS</span>
              <span className="text-[11px] font-bold text-[#0066FF] tracking-wider mt-1">FUNCIONA 24H</span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#sobre-nos" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors uppercase tracking-wide">Sobre Nós</a>
            <a href="#pacotes" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors uppercase tracking-wide">Pacotes</a>
            <a href="#unidades" className="text-sm font-semibold text-gray-500 hover:text-black transition-colors uppercase tracking-wide">Unidades</a>
          </div>

          <div className="hidden md:flex items-center">
            <a href="#pacotes" className="bg-[#0066FF] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-blue-700 transition-colors uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-blue-500/30">
              PACOTES
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-black hover:text-gray-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#sobre-nos" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-black">Sobre Nós</a>
            <a href="#pacotes" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-black">Pacotes</a>
            <a href="#unidades" className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-black">Unidades</a>
          </div>
        </div>
      )}
    </nav>
  );
}
