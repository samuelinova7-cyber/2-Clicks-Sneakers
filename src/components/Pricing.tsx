import { Check, Clock } from 'lucide-react';

const PLANS = [
  {
    label: "BÁSICO",
    name: "PACOTE STREET CLEAN",
    price: "39,90",
    features: ["Neutralizador de odor e odorizador", "Limpeza detalhada externa"],
    indicado: "Tênis com sujeira externa leve a moderada, uso do dia a dia, modelos novos ou com parte interna escura que não exige limpeza profunda interna."
  },
  {
    label: "INTERMEDIÁRIO",
    name: "PACOTE HYPE CLEAN",
    price: "59,90",
    features: ["Neutralizador de odor e odorizador", "Limpeza detalhada externa", "Limpeza detalhada interna"],
    indicado: "Higienização completa para pares com uso frequente que necessitam cuidado interno e externo."
  },
  {
    label: "AVANÇADO",
    name: "PACOTE PREMIUM DROP",
    price: "79,90",
    popular: true,
    features: ["Neutralizador de odor e odorizador", "Limpeza detalhada externa", "Limpeza detalhada interna", "Impermeabilização / hidratação do couro"],
    indicado: "Tênis com sujeira mais intensa, materiais sensíveis como couro ou camurça, ou que precisam de hidratação e impermeabilização. Ideal para preservar, proteger e prolongar a vida útil do seu par."
  },
  {
    label: "EXCLUSIVO",
    name: "PACOTE ROYAL EDITION",
    price: "139,90",
    exclusive: true,
    features: ["Neutralizador de odor e odorizador", "Limpeza detalhada externa", "Limpeza detalhada interna", "Impermeabilização / hidratação do couro", "Protocolo técnico para tênis de grife, customizados ou edição limitada"],
    indicado: "Tênis de grife, edição limitada, personalizados ou pares de alto valor que exigem protocolo técnico especial e análise individual."
  }
];

export default function Pricing() {
  return (
    <section id="pacotes" className="py-24 bg-[#0a0a0a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Pacotes de Higienização</h2>
        <p className="text-gray-400 mb-20">Escolha o nível de cuidado ideal para o seu sneaker.</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PLANS.map((plan, i) => (
            <div 
              key={i} 
              className={`relative p-8 rounded-[32px] border flex flex-col transition-all duration-300 ${
                plan.popular 
                  ? 'bg-[#0066FF] border-[#0066FF] shadow-[0_0_40px_rgba(0,102,255,0.3)] scale-105 z-10' 
                  : plan.exclusive
                  ? 'bg-[#141414] border-yellow-500/30 hover:border-yellow-500/60'
                  : 'bg-[#141414] border-white/5 hover:border-white/10'
              }`}
            >
              {/* Top Badges */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-[#0066FF] text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg">
                  MAIS ESCOLHIDO
                </div>
              )}
              {plan.exclusive && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-[#EAB308] text-black text-[10px] font-black px-4 py-1.5 rounded-full shadow-lg">
                  EXCLUSIVO
                </div>
              )}

              {/* Label Pill */}
              <div className="mb-6">
                <span className={`text-[10px] font-bold px-3 py-1 rounded-full ${
                  plan.popular ? 'bg-white/20 text-white' : 'bg-[#0066FF]/10 text-[#0066FF]'
                }`}>
                  {plan.label}
                </span>
              </div>
              
              <h3 className="font-bold text-lg mb-4 text-left leading-tight">{plan.name}</h3>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-sm font-medium opacity-60">R$</span>
                <span className="text-4xl font-bold">{plan.price}</span>
              </div>
              
              <ul className="space-y-4 mb-8 text-left flex-grow">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex gap-3 text-xs leading-relaxed opacity-90">
                    <Check className={`w-4 h-4 shrink-0 ${plan.popular ? 'text-white' : 'text-[#0066FF]'}`} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-2 text-[10px] opacity-60 mb-6 text-left">
                <Clock className="w-3 h-3" />
                <span>Prazo: 5 a 10 dias</span>
              </div>
              
              <button className={`w-full py-4 rounded-2xl font-bold text-sm transition-all active:scale-95 mb-8 ${
                plan.popular 
                  ? 'bg-white text-[#0066FF] hover:bg-blue-50' 
                  : plan.exclusive
                  ? 'bg-[#EAB308] text-black hover:bg-yellow-500'
                  : 'bg-[#0066FF] text-white hover:bg-blue-600'
              }`}>
                {plan.exclusive ? 'Solicitar avaliação' : 'Escolher pacote'}
              </button>
              
              <div className="pt-8 border-t border-white/5 text-left">
                <p className="text-[10px] font-bold text-[#0066FF] mb-2 uppercase tracking-wider">Indicado para:</p>
                <p className="text-[11px] leading-relaxed text-gray-400">{plan.indicado}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
