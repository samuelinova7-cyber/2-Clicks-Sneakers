const UNITS = [
  {
    name: "Mogi Moderno",
    address: "Rua Dr. Deodato Wertheimer, 2220",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.582697843053!2d-46.18525042468846!3d-23.65651797871788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7d5663673f85%3A0x6a2c2c2c2c2c2c2c!2sMogi+Moderno!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr",
    mapLink: "https://share.google/4z69emgI8Qtx7LbiK"
  },
  {
    name: "Alto do Ipiranga",
    address: "Av. Japão, 1941",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3654.582697843053!2d-46.18525042468846!3d-23.65651797871788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce7d5663673f85%3A0x6a2c2c2c2c2c2c2c!2sAlto+do+Ipiranga!5e0!3m2!1sen!2sbr!4v1700000000000!5m2!1sen!2sbr",
    mapLink: "https://share.google/uDiD8FJxSbAcrSns6"
  }
];

export default function Units() {
  return (
    <section id="unidades" className="py-24 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Nossas Unidades</h2>
          <p className="text-gray-400">Os armários da Sneakers ficam dentro da 2 Clicks Lavanderia.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {UNITS.map((unit, index) => (
            <div key={index} className="bg-[#1a1a1a] rounded-3xl p-8 border border-gray-800">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-blue-900/30 rounded-full text-blue-500">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{unit.name}</h3>
                  <p className="text-gray-400">{unit.address}</p>
                </div>
              </div>
              
              <div className="space-y-3 mb-6">
                <p className="flex items-center gap-2 text-gray-300"><span className="text-blue-500">✓</span> Armários para entrega e retirada 24h</p>
                <p className="flex items-center gap-2 text-gray-300"><span className="text-blue-500">✓</span> Localizados dentro da 2 Clicks Lavanderia</p>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden border border-gray-700">
                <iframe 
                  src={unit.mapUrl}
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <a href={unit.mapLink} target="_blank" rel="noreferrer" className="absolute top-4 left-4 bg-white text-black px-3 py-1.5 rounded-md text-sm font-bold flex items-center gap-1 shadow-lg hover:bg-gray-100">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  Abrir no Maps
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button onClick={() => window.open('https://g.page/r/CcStKfECPpBMEBM/review', '_blank')} className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all">
            <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.3-4.74 3.3-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Deixe sua avaliação no Google
          </button>
        </div>
      </div>
    </section>
  );
}
