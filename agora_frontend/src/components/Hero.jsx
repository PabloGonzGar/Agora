export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto my-16 px-4">
      <h2 className="text-4xl text-center font-extralight text-white mb-12">Comunidades Populares</h2>
      <div className="flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-2xl min-h-[450px]">
        <div className="flex-1 p-12 flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold mb-4">Comparte, debate y descubre</p>
          <h1 className="text-5xl font-bold text-black mb-6">Anime & Manga</h1>
          <p className="text-gray-600 leading-relaxed mb-6 text-sm">
            Únete a nuestra comunidad y conecta con otros fans para debatir teorías, dar y recibir recomendaciones, y explorar juntos todo lo relacionado con tus series, juegos y cómics favoritos.
          </p>
          <p className="text-green-500 font-bold text-sm mb-8">10 miembros</p>
          <div className="flex gap-4">
            <button className="bg-violet-600 text-white px-10 py-3 rounded-full font-bold hover:bg-violet-700 transition">Unirse</button>
            <button className="border border-gray-300 text-gray-500 px-8 py-3 rounded-full font-bold hover:bg-gray-50 transition">Identificarse</button>
          </div>
        </div>
        <div className="flex-1">
          <img 
            src="https://images.unsplash.com/photo-1578632292335-df3abbb0d586?q=80&w=1000" 
            className="w-full h-full object-cover" 
            alt="Anime City"
          />
        </div>
      </div>
    </section>
  );
}