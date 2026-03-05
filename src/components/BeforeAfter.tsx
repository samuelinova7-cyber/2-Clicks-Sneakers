export default function BeforeAfter() {
  return (
    <section id="antes-depois" className="py-24 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Resultados Reais</h2>
        <p className="text-gray-400 mb-16">Arraste para o lado e veja a transformação completa de alguns dos nossos serviços.</p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20video%202.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgdmlkZW8gMi5tcDQiLCJpYXQiOjE3NzI2NTg1OTUsImV4cCI6MjA1NjQ4MjU5NX0.vWua5kJfYmehMVPAUPEVhnfdsZdUKmvef_HevBpCsow",
            "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20video%204.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgdmlkZW8gNC5tcDQiLCJpYXQiOjE3NzI2NTg2MjcsImV4cCI6MjA1NjQ4MjYyN30.BOwacdStpmPZ2bkk0MTM-9G4ZdTuIkHVIw86GrYzSVo"
          ].map((src, i) => (
            <div key={i} className="rounded-3xl overflow-hidden aspect-[9/16] shadow-2xl bg-black">
              <video 
                src={src} 
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        <button onClick={() => window.open('https://wa.me/5511983499718', '_blank')} className="bg-[#0066FF] text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-colors">
          Avaliar meu tênis agora
        </button>
      </div>
    </section>
  );
}
