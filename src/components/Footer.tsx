import { Instagram, MessageCircle, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-20 pb-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <span className="font-bold text-3xl tracking-wider text-black mb-6 block">2 CLICKS SNEAKERS</span>
            <p className="text-gray-600 leading-relaxed max-w-sm mb-8">
              O primeiro serviço premium de limpeza e restauração de sneakers com armários inteligentes 24 horas.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/2clicks_sneakers?igsh=bzVpaGNkMDRlODJs" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://wa.me/5511983499718" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-all">
                <MessageCircle className="w-5 h-5" />
              </a>
              <a href="https://g.page/r/CcStKfECPpBMEBM/review" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-[#0066FF] hover:border-[#0066FF] hover:text-white transition-all">
                <MapPin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-black">Links Rápidos</h4>
            <ul className="space-y-4">
              <li><a href="#como-funciona" className="text-gray-600 hover:text-[#0066FF] transition-colors">Como Funciona</a></li>
              <li><a href="#pacotes" className="text-gray-600 hover:text-[#0066FF] transition-colors">Pacotes</a></li>
              <li><a href="#antes-depois" className="text-gray-600 hover:text-[#0066FF] transition-colors">Resultados</a></li>
              <li><a href="#unidades" className="text-gray-600 hover:text-[#0066FF] transition-colors">Unidades</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6 text-black">Contato</h4>
            <ul className="space-y-4 text-gray-600">
              <li>(11) 98349-9718</li>
              <li>contato@2clicks.com.br</li>
              <li>Mogi das Cruzes, SP</li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2026 2 CLICKS SNEAKERS. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-[#0066FF] transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-[#0066FF] transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
