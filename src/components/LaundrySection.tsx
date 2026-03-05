export default function LaundrySection() {
  return (
    <section className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Video on the left */}
          <div className="relative rounded-[3rem] overflow-hidden h-[600px] border-4 border-gray-800 shadow-2xl">
            <video 
              src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20lav%20hero%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgbGF2IGhlcm8gdmlkZW8ubXA0IiwiaWF0IjoxNzcyMTI3MzkxLCJleHAiOjE4MDM2NjMzOTF9.8_c0PCaxrdV6Lj9lO_mdJ1VbykiBn5yXAUhpPWczZOY" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Content on the right */}
          <div>
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-950/30 text-blue-400 font-bold text-xs uppercase tracking-wider mb-6">
              2 CLICKS LAVANDERIA SELF SERVICE
            </div>
            <h2 className="text-5xl font-bold mb-8 leading-tight">
              CUIDADO PROFISSIONAL PARA SUAS <span className="text-[#0066FF]">ROUPAS PESSOAIS, CAMA, MESA E BANHO</span>
            </h2>
            
            <div className="grid grid-cols-2 gap-6 mb-12">
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2">
                  <span className="text-[#0066FF]">✓</span> Self-Service Profissional
                </h4>
                <p className="text-sm text-gray-400">Autoatendimento com tecnologia industrial de ponta.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2">
                  <span className="text-[#0066FF]">✓</span> Maior Cesto da Região
                </h4>
                <p className="text-sm text-gray-400">Máquinas de alta capacidade para grandes volumes.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2">
                  <span className="text-[#0066FF]">✓</span> Produtos Inclusos
                </h4>
                <p className="text-sm text-gray-400">Sabão, amaciante e tira manchas dosados automaticamente.</p>
              </div>
              <div className="space-y-2">
                <h4 className="font-bold flex items-center gap-2">
                  <span className="text-[#0066FF]">✓</span> Aberto 24 Horas
                </h4>
                <p className="text-sm text-gray-400">Disponível todos os dias da semana para você.</p>
              </div>
            </div>
            
            <div className="bg-[#111] border border-gray-800 p-8 rounded-3xl">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-[#0066FF]">💰</span> CICLOS E PREÇOS
                  </h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p className="flex justify-between"><span>1 CESTO</span> <span className="font-bold text-white">R$ 16,00</span></p>
                    <p className="flex justify-between"><span>2 CESTOS</span> <span className="font-bold text-white">R$ 34,00</span></p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="text-[#0066FF]">🎁</span> VANTAGENS EXCLUSIVAS
                  </h3>
                  <div className="space-y-2 text-sm text-gray-400">
                    <p>CASHBACK MENSAIS</p>
                    <p>PRESENTES EXCLUSIVOS PARA ANIVERSARIANTES DO MÊS CADASTRADOS E MUITO MAIS</p>
                  </div>
                </div>
              </div>
            </div>
            
            <button onClick={() => window.open('https://lavanderia2clicks-lovat.vercel.app/', '_blank')} className="mt-8 w-full inline-flex justify-center items-center px-8 py-4 bg-[#0066FF] text-white rounded-full font-bold text-sm uppercase tracking-wider hover:bg-blue-700 transition-all">
              Visitar site da Lavanderia
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
