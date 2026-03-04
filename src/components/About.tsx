export default function About() {
  return (
    <section id="sobre-nos" className="py-24 bg-[#F4F7FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-black mb-2">SOBRE NÓS</h2>
        <p className="text-gray-500 mb-12">Tecnologia e precisão a serviço do seu sneaker.</p>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
            <img 
              src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/Captura%20de%20tela%202026-02-26%20101921.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvQ2FwdHVyYSBkZSB0ZWxhIDIwMjYtMDItMjYgMTAxOTIxLnBuZyIsImlhdCI6MTc3MjY1MTQ2MywiZXhwIjoyMDU2NDc1NDYzfQ.biOTk-ZacUSPOSWZbKAN7zS-vUKcJc7QU_y8npzr4P4" 
              alt="Oficina 2 Clicks" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-8">
              <p className="font-bold text-2xl text-white">Cuidado especializado</p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <p className="text-gray-600 leading-relaxed mb-8">
              Somos uma lavanderia especializada em tênis que une o melhor da tecnologia de ponta com o toque insubstituível do acabamento manual detalhado.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Nosso diferencial está em um protocolo técnico rigoroso, desenvolvido para tratar cada material — de couros e camurças a tecidos tecnológicos com máxima segurança e precisão. Mais do que estética, nosso foco é a preservação real da estrutura e a extensão da vida útil do seu par com cuidado profissional.
            </p>
            
            <div className="space-y-6">
              <h3 className="font-bold text-xl text-black">O que nos move:</h3>
              
              <div>
                <h4 className="font-bold text-black mb-1">Tecnologia e Higiene:</h4>
                <p className="text-gray-600">Processos controlados com produtos específicos, e esterilização UV.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-black mb-1">Cuidado Artesanal:</h4>
                <p className="text-gray-600">Finalização manual que garante um padrão profissional superior.</p>
              </div>
              
              <div>
                <h4 className="font-bold text-black mb-1">Compromisso:</h4>
                <p className="text-gray-600">Recuperar, proteger e renovar a história de cada sneaker que passa por nossas mãos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
