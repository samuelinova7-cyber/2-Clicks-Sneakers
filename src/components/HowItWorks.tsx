export default function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-black mb-4">COMO FUNCIONA</h2>
        <p className="text-gray-500 mb-16">Prático, seguro e sem burocracia através do nosso sistema de armários.</p>

        <div className="bg-[#EBF5FF] border border-blue-200 p-8 rounded-3xl max-w-3xl mx-auto mb-16">
          <h3 className="font-bold text-2xl text-black mb-4">Retire e entregue 24h</h3>
          <p className="text-gray-600">Disponibilizamos armários inteligentes nas unidades para que você possa deixar ou retirar seu tênis no horário que preferir, com total segurança e praticidade.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-left">
            {[
              { title: "Deixe seu tênis na loja", desc: "Escolha um armário disponível, coloque o tênis, tranca a porta e deposite a chave no compartimento indicado." },
              { title: "Informe o armário", desc: "Entre em contato pelo WhatsApp e avise o número do armário onde deixou seu tênis." },
              { title: "Realize o cadastro", desc: "Acesse o link enviado e preencha seus dados para agilizar o seu cadastro." },
              { title: "Triagem e Contato", desc: "Faremos a triagem técnica e entraremos em contato para confirmar o serviço e valor final." },
              { title: "Pronto para retirada", desc: "Seu tênis será tratado e avisaremos assim que estiver pronto. Prazo médio de 5 a 10 dias úteis." }
            ].map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-bold text-black mb-1">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <video 
              src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20maquina%20limpando.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgbWFxdWluYSBsaW1wYW5kby5tcDQiLCJpYXQiOjE3NzI2NTg3MDAsImV4cCI6MjA1NjQ4MjcwMH0.JWB8AXWaiMRV9Euy_O61HAb1ViC64s0Y8PGuslWwo8k" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="rounded-3xl h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
            <video 
              src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20video.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgdmlkZW8ubXA0IiwiaWF0IjoxNzcyNjU4NzIyLCJleHAiOjIwNTY0ODI3MjJ9.CEgMKTCVdWUikFHbeIpsRzAfWI2FoK_yfYNxmfWwXP8" 
              autoPlay 
              loop 
              muted 
              playsInline
              className="rounded-3xl h-full object-cover" 
              referrerPolicy="no-referrer" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
