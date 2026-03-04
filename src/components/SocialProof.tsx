import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  { name: "Thalita Fonseca", text: "Fui muito bem atendida. Os tênis vieram muito bem limpos e cheirosos parecem novos amei prazo de entrega foi muito rápida. Super indico." },
  { name: "Chillibeansqsq mogi", text: "Serviço impecável! Meu sapato preferido voltou como novo, super limpo e bem cuidado. Atendimento excelente, recomendo muito!" },
  { name: "Jose Luiz", text: "Profissionais de qualidade super recomendo estão de parabéns 👏🏽👍🏽🙌🏽🎊🎉🎈" },
  { name: "Fabio Moreira", text: "Super recomendo" },
  { name: "Sthefane Gaggioli", text: "Impecável!" },
  { name: "Lucas Silva", text: "Melhor lavanderia de tênis da região. O sistema de armários é muito prático." },
  { name: "Mariana Costa", text: "Fiquei impressionada com a restauração da camurça do meu Jordan. Ficou novo!" },
  { name: "Ricardo Oliveira", text: "Excelente trabalho! Meu Yeezy estava encardido e voltou impecável. Vale cada centavo." },
  { name: "Amanda Martins", text: "O melhor lugar para cuidar dos seus tênis em Mogi. Atendimento nota 10 e resultado surpreendente." },
  { name: "Bruno Santos", text: "Praticidade total com os armários. Deixei meu tênis de manhã e peguei renovado. Recomendo!" },
  { name: "Camila Rodrigues", text: "Trabalho artesanal de primeira. Recuperaram a cor original do meu sneaker que eu achei que estava perdido." },
  { name: "Felipe Almeida", text: "Atendimento rápido e eficiente. O cheiro de limpeza que fica no tênis é maravilhoso. Parabéns!" },
  { name: "Juliana Ferreira", text: "Fiquei muito satisfeita com a higienização. Tudo muito profissional e organizado. Com certeza voltarei." }
];

export default function SocialProof() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % REVIEWS.length);
  const prev = () => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);

  return (
    <section className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Quem confia, recomenda</h2>
        <p className="text-gray-400 mb-16">Mais de 500 sneakers renovados com nota máxima de satisfação.</p>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-[#262626] p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-gray-400">estrelas no Google</div>
          </div>
          <div className="bg-[#262626] p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-white mb-2">+500</div>
            <div className="text-gray-400">Tênis Limpos</div>
          </div>
          <div className="bg-[#262626] p-8 rounded-2xl text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-gray-400">Satisfação</div>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <button onClick={prev} className="absolute left-0 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 z-10">
            <ChevronLeft />
          </button>
          <div className="w-full max-w-2xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-[#262626] p-8 rounded-2xl text-center"
              >
                <p className="text-white text-lg mb-4">"{REVIEWS[index].text}"</p>
                <div className="text-blue-400 font-bold">{REVIEWS[index].name}</div>
                <div className="text-yellow-400">★★★★★</div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={next} className="absolute right-0 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 z-10">
            <ChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
}
