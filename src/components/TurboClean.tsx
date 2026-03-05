import { Zap } from 'lucide-react';

export default function TurboClean() {
  return (
    <section className="py-12 bg-[#0066FF] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Side */}
          <div className="flex items-start gap-4">
            <Zap className="w-8 h-8 shrink-0 mt-1 fill-white" />
            <div>
              <h2 className="text-3xl font-bold mb-2">PACOTE TURBO CLEAN</h2>
              <p className="text-blue-100 text-lg">Entregue em até 48 horas (taxa adicional ao pacote escolhido).</p>
              <p className="text-sm text-blue-200 mt-2">* Necessário consultar disponibilidade.</p>
            </div>
          </div>

          {/* Middle Options */}
          <div className="flex gap-4">
            <div className="border border-white/30 bg-white/10 rounded-2xl p-6 text-center min-w-[160px]">
              <p className="text-[10px] font-bold tracking-widest mb-1 opacity-80 uppercase">Até 48h</p>
              <p className="text-2xl font-bold">+ R$ 20</p>
            </div>
            <div className="border border-white/30 bg-white/10 rounded-2xl p-6 text-center min-w-[160px]">
              <p className="text-[10px] font-bold tracking-widest mb-1 opacity-80 uppercase">Até 24h</p>
              <p className="text-2xl font-bold">+ R$ 40</p>
            </div>
          </div>

          {/* Right Side Button */}
          <button className="bg-white text-[#0066FF] px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
            Adicionar entrega expressa
          </button>

        </div>
      </div>
    </section>
  );
}
