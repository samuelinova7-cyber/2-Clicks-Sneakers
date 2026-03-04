import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    question: "Qual o prazo para ficar pronto?",
    answer: "O prazo médio é de 5 a 10 dias, podendo variar conforme o plano escolhido e a demanda."
  },
  {
    question: "Como funciona o sistema de armários inteligentes?",
    answer: "É super prático! Você vai até uma de nossas unidades, escolhe um armário disponível, coloca seu par, tranca a porta e deposita a chave no local indicado. Entre em contato pelo WhatsApp informando o número da porta que está utilizando. Nós cuidamos de tudo e te avisamos quando estiver pronto."
  },
  {
    question: "Vocês lavam qualquer tipo de tênis?",
    answer: "Atendemos a maioria dos modelos, incluindo couro, camurça, knit, tecido e sintéticos. Tênis de grife ou edição limitada passam por avaliação prévia."
  },
  {
    question: "Vocês removem qualquer tipo de mancha?",
    answer: "Muitas manchas são removidas ou suavizadas significativamente. Porém, o resultado depende do tipo de sujeira, tempo da mancha e material do tênis."
  },
  {
    question: "Tira amarelado de solado?",
    answer: "Sim, realizamos tratamento específico para remoção de oxidação/amarelado, mediante avaliação."
  },
  {
    question: "Qual a diferença entre Street, Hype, Premium Drop e Royal Edition?",
    answer: "Cada plano possui níveis diferentes de cuidado, acabamento e benefícios adicionais. O Royal Edition é indicado para tênis de grife ou edição limitada."
  },
  {
    question: "Vale a pena escolher o Premium Drop?",
    answer: "É o plano mais escolhido por equilibrar custo-benefício e proteção adicional com impermeabilização/hidratação."
  },
  {
    question: "Existe serviço mais rápido?",
    answer: "Sim. Oferecemos o Turbo Clean (entrega express), mediante disponibilidade."
  },
  {
    question: "Preciso agendar?",
    answer: "Recomendamos envio de fotos pelo WhatsApp para avaliação antes da entrega."
  },
  {
    question: "Posso enviar por motoboy?",
    answer: "Sim, desde que combinado previamente pelo WhatsApp."
  },
  {
    question: "Onde ficam as unidades da 2 Clicks?",
    answer: "Estamos localizados em Mogi das Cruzes, com unidades no Mogi Moderno e no Alto do Ipiranga, dentro das lavanderias 2 Clicks."
  },
  {
    question: "Vocês fazem colagem ou costura?",
    answer: "Não realizamos serviços de colagem ou costura diretamente. Porém, contamos com sapateiros parceiros de confiança que executam esses reparos e nos permitem oferecer uma experiência mais completa aos nossos clientes. Se o seu tênis precisar desse tipo de serviço, fale com a nossa equipe para orientarmos você da melhor forma."
  },
  {
    question: "Posso enviar meu tênis pelo correio?",
    answer: "Sim. Recebemos e enviamos tênis de qualquer lugar do país. Após o contato, orientamos sobre embalagem, envio e prazos para que seu par seja tratado com segurança do início ao fim."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-6">
            DÚVIDAS <span className="text-[#0066FF]">FREQUENTES</span>
          </h2>
          <p className="text-lg text-gray-500">Tudo o que você precisa saber sobre nossos serviços.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden transition-colors hover:border-[#0066FF]"
            >
              <button 
                className="w-full px-8 py-6 flex justify-between items-center text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-lg text-black">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-[#0066FF] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                />
              </button>
              
              <div 
                className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
