import { motion } from 'framer-motion';

const images = [
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2%20c%20c1.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMiBjIGMxLmpwZyIsImlhdCI6MTc3MjY1MjA5NywiZXhwIjoyMDU2NDc2MDk3fQ.oQKP5aFbqV9Utgidl8nSRHpES3BUmJihRr1wZ47kGGw",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c2.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzIuanBnIiwiaWF0IjoxNzcyNjUyMTM0LCJleHAiOjIwNTY0NzYxMzR9.VsXV-vj8zzbNLNFDN3cMQsZLAmMYNMiU4ZhCDu8uuz8",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzMuanBnIiwiaWF0IjoxNzcyNjUyMTU1LCJleHAiOjIwNTY0NzYxNTV9.ZnazLafZfu42BFuPC-ealEnDrCEwC4EFtC-UrSevIIg",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzQuanBnIiwiaWF0IjoxNzcyNjUyMTgyLCJleHAiOjIwNTY0NzYxODJ9.fKz20GZUyNLD-bHdIC03tqnGp2-GLaKDEWRR9Fp-oHg",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c5.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzUuanBnIiwiaWF0IjoxNzcyNjUyMTk4LCJleHAiOjIwNTY0NzYxOTh9.4gFHS6Z2tATCCghHnPIt3FmRHOKjWAzniC4T2qnbxuQ",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzYuanBnIiwiaWF0IjoxNzcyNjUyMjIxLCJleHAiOjIwNTY0NzYyMjF9.zLgDAgCF0Y0Pb7oQB2q57dh2UnM7-Lyz4jZZLgtZdKM",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzYuanBnIiwiaWF0IjoxNzcyNjUyMjQ0LCJleHAiOjIwNTY0NzYyNDR9.UFF27IV40SxC8rE7Bs_ZZrrovqMleirMkpBKqbpLU1s",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c6.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzYuanBnIiwiaWF0IjoxNzcyNjUyMjY3LCJleHAiOjIwNTY0NzYyNjd9.X0paPRanPNZ4auXYzad1e3qy9imj5mM8sqW-QfgMQsU",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c7.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzcuanBnIiwiaWF0IjoxNzcyNjUyMjg1LCJleHAiOjIwNTY0NzYyODV9.At432d05wZpeIJYRBc_qQjGWRybMsK3S_IjA0zElkF8",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c8.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzguanBnIiwiaWF0IjoxNzcyNjUyMzA0LCJleHAiOjIwNTY0NzYzMDR9.vIPgDQ66BkbbmK-FGfhsVCQhuAg-MEjfxwJ6DX1CS6A",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c9.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzkuanBnIiwiaWF0IjoxNzcyNjUyMzIyLCJleHAiOjIwNTY0NzYzMjJ9.4e7eOlF2jqEYM-lR3o4ExqP0qnWymrqvJsOa1z4rYko",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c10.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYzEwLmpwZyIsImlhdCI6MTc3MjY1MjM0MiwiZXhwIjoyMDU2NDc2MzQyfQ.VCpzEuXu9MrQXzJlQJC4cvK7d76Px5ZnVA_PWVSmpSc",
  "https://ophugihxmlphgcryuode.supabase.co/storage/v1/object/sign/inova7/2c%20c%2011.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV82NjhkNTkyYi05MDM0LTRjNjgtYmI3Ny03YzYzYTA2NTM0OTAiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbm92YTcvMmMgYyAxMS5qcGciLCJpYXQiOjE3NzI2NTIzNjYsImV4cCI6MjA1NjQ3NjM2Nn0.1tLsKDh9RddunTx8LSIcJ14fJDfNSsxkNPE_4YU_1MU"
];

const duplicatedImages = [...images, ...images];

export default function Customization() {
  return (
    <section className="py-24 bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Customização</h2>
        <p className="text-gray-400 mb-16">Transforme seu sneaker em uma peça única com nossos serviços de personalização.</p>
        
        <div className="relative overflow-hidden mb-16">
          <motion.div 
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {duplicatedImages.map((src, i) => (
              <img 
                key={i}
                src={src}
                alt={`Customização ${i}`}
                className="w-80 h-80 object-cover flex-shrink-0 rounded-2xl"
                referrerPolicy="no-referrer"
              />
            ))}
          </motion.div>
        </div>

        <p className="text-gray-400 mb-8">Quer ver mais trabalhos incríveis? Siga nosso perfil e acompanhe as transformações diárias!</p>
        
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-bold hover:opacity-90 transition-all">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.77 1.683 4.92 4.92.058 1.265.07 1.645.07 4.85 0 3.204-.012 3.584-.07 4.85-.148 3.252-1.683 4.92-4.92 4.92-1.265.058-1.645.07-4.85.07-3.204 0-3.584-.012-4.85-.07-3.252-.148-4.77-1.683-4.92-4.92-.058-1.265-.07-1.645-.07-4.85 0-3.204.012-3.584.07-4.85.148-3.252 1.683-4.92 4.92-4.92 1.265-.058 1.645-.07 4.85-.07zm0 1.817c-3.143 0-3.52.012-4.76.068-2.65.12-3.76 1.39-3.88 3.88-.056 1.24-.068 1.617-.068 4.76 0 3.143.012 3.52.068 4.76.12 2.65 1.39 3.76 3.88 3.88 1.24.056 1.617.068 4.76.068 3.143 0 3.52-.012 4.76-.068 2.65-.12 3.76-1.39 3.88-3.88.056-1.24.068-1.617.068-4.76 0-3.143-.012-3.52-.068-4.76-.12-2.65-1.39-3.76-3.88-3.88-1.24-.056-1.617-.068-4.76-.068zm0 3.658c3.21 0 5.81 2.6 5.81 5.81s-2.6 5.81-5.81 5.81-5.81-2.6-5.81-5.81 2.6-5.81 5.81-5.81zm0 1.817c-2.204 0-3.993 1.79-3.993 3.993s1.79 3.993 3.993 3.993 3.993-1.79 3.993-3.993-1.79-3.993-3.993-3.993zm6.406-3.845c0 .75-.608 1.358-1.358 1.358-.75 0-1.358-.608-1.358-1.358 0-.75.608-1.358 1.358-1.358.75 0 1.358.608 1.358 1.358z"/></svg>
          Siga no Instagram
        </a>
      </div>
    </section>
  );
}
