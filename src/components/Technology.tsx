import { Zap, ShieldCheck, Droplet, Sparkles } from 'lucide-react';

export default function Technology() {
  return (
    <section className="py-24 bg-[#111] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Tecnologia que <span className="text-[#0066FF]">preserva.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed">
              Na 2 Clicks Sneakers, seu tênis não é apenas lavado, ele é tratado. Utilizamos o que há de mais moderno em tecnologia de higienização para garantir que seu sneaker volte como novo, sem riscos.
            </p>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-[#0066FF]" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Maquinário Profissional</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Equipamentos específicos para cada tipo de material e fibra.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-[#0066FF]" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Esterilização UV</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Eliminação de 99.9% de fungos e bactérias causadores de odores.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Droplet className="w-5 h-5 text-[#0066FF]" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Processo Controlado</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Uso de produtos biodegradáveis e técnicas que não agridem os calçados.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#0066FF]" />
                  <h3 className="font-bold text-sm uppercase tracking-wide">Finalização Manual</h3>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  O toque final de quem entende de sneakers para um acabamento impecável.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Video/Image Frame */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-[60px] border-[12px] border-white overflow-hidden shadow-[0_0_100px_rgba(0,0,0,0.5)]">
              <video 
                src="https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20sem%20bom%20dia.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgc2VtIGJvbSBkaWEubXA0IiwiaWF0IjoxNzcyNjUxODk1LCJleHAiOjIwNTY0NzU4OTV9.GbYy-Z5-mJDWq7GV0t6PGZBAw-A3sSdSE8FLsuQUBBU" 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer" 
              />
              {/* Overlay for that blue glow look in the image */}
              <div className="absolute inset-0 bg-blue-600/10 pointer-events-none" />
            </div>
            
            {/* Decorative background glow */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#0066FF]/10 blur-[120px] rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
