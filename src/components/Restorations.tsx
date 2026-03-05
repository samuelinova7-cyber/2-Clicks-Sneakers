const SERVICES = [
  { name: "Hidratação couro/camurça", price: "a partir de R$ 24,90" },
  { name: "Impermeabilização", price: "a partir de R$ 34,90" },
  { name: "Remoção de amarelado", price: "a partir de R$ 34,90" },
  { name: "Remoção de manchas", price: "a partir de R$ 39,90" },
  { name: "Revitalização camurça", price: "a partir de R$ 34,90" },
  { name: "Revitalização tecido", price: "a partir de R$ 34,90" },
  { name: "Pintura cabedal", price: "a partir de R$ 59,90" },
  { name: "Pintura camurça", price: "a partir de R$ 49,90" },
  { name: "Pintura Midsole", price: "a partir de R$ 49,90" },
  { name: "Retoque pintura", price: "a partir de R$ 29,90" },
];

export default function Restorations() {
  const leftColumn = SERVICES.filter((_, i) => i % 2 === 0);
  const rightColumn = SERVICES.filter((_, i) => i % 2 !== 0);

  return (
    <section className="py-24 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4">Restaurações</h2>
          <p className="text-gray-400">Serviços especializados para devolver a vida ao seu sneaker.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1a1a1a] rounded-3xl border border-white/5 overflow-hidden shadow-2xl">
            <div className="grid md:grid-cols-2">
              {/* Left Column */}
              <div className="divide-y divide-white/5">
                {leftColumn.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-6 hover:bg-white/5 transition-colors">
                    <h3 className="text-sm font-medium text-gray-300">{service.name}</h3>
                    <span className="text-sm font-bold text-[#0066FF]">{service.price}</span>
                  </div>
                ))}
              </div>
              {/* Right Column */}
              <div className="divide-y divide-white/5 border-l border-white/5">
                {rightColumn.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-6 hover:bg-white/5 transition-colors">
                    <h3 className="text-sm font-medium text-gray-300">{service.name}</h3>
                    <span className="text-sm font-bold text-[#0066FF]">{service.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 bg-black/20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-1 text-xs text-gray-500">
                <p>• Prazo: 5 a 10 dias</p>
                <p>• Pagamento: 100% antecipado (Dinheiro, Crédito, PIX)</p>
              </div>
              <button onClick={() => window.open('https://wa.me/5511983499718', '_blank')} className="bg-[#0066FF] text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-600 transition-colors">
                Enviar fotos para avaliação
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
