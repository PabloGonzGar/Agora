import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EventCard from './components/EventCard';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  // Estado para controlar qué vista mostrar: 'home', 'login' o 'register'
  const [view, setView] = useState('home');

  const events = [
    { title: "Gamergy Madrid 2025", dateStart: "13/03/25", dateEnd: "15/03/25", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400" },
    { title: "Rol en vivo (LARP)", dateStart: "13/02/26", dateEnd: "15/02/26", image: "https://images.unsplash.com/photo-1519074063236-fa2875152a40?w=400" },
    { title: "Japan Weekend Madrid", dateStart: "15/02/26", dateEnd: "16/02/26", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=400"},
    { title: "Japan Weekend Barcelona", dateStart: "15/03/25", dateEnd: "16/03/25", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?w=400" },
  ];

  return (
    <div className="min-h-screen bg-[#05051a] bg-[radial-gradient(circle_at_top,_#1e1b4b_0%,#020617_100%)] text-white">
      {/* Pasamos setView a la Navbar para que los botones funcionen */}
      <Navbar onNavigate={setView} />
      
      <main className="pt-24 transition-all duration-500">
        {view === 'home' && (
          <>
            <Hero />
            <section className="max-w-6xl mx-auto px-4 pb-20">
              <h2 className="text-3xl text-center font-extralight text-white mb-12">Próximos eventos</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {events.map((ev, i) => (
                  <EventCard key={i} {...ev} />
                ))}
              </div>
            </section>
          </>
        )}

        {view === 'login' && <Login onSwitch={() => setView('register')} />}
        {view === 'register' && <Register onSwitch={() => setView('login')} />}
      </main>

      <footer className="py-10 border-t border-white/10 text-center bg-black/20 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center gap-6 mb-6 text-gray-400 text-sm">
            <a href="#" onClick={() => setView('home')} className="hover:text-violet-400 transition">Inicio</a>
            <a href="#" className="hover:text-violet-400 transition">Comunidades</a>
            <a href="#" className="hover:text-violet-400 transition">Eventos</a>
            <a href="#" className="hover:text-violet-400 transition">Soporte</a>
          </div>
          
          <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
            © 2025 Ágora | Todos los derechos reservados.
          </p>
          
          <div className="flex justify-center gap-4 mt-4">
            <p className="text-[9px] text-gray-600 uppercase hover:text-gray-400 cursor-pointer transition">Política de Privacidad</p>
            <span className="text-gray-800">|</span>
            <p className="text-[9px] text-gray-600 uppercase hover:text-gray-400 cursor-pointer transition">Términos de Uso</p>
            <span className="text-gray-800">|</span>
            <p className="text-[9px] text-gray-600 uppercase hover:text-gray-400 cursor-pointer transition">Contacto</p>
          </div>
          
          <div className="mt-6 text-xl opacity-20 grayscale hover:grayscale-0 hover:opacity-100 transition duration-500">
            🏛️
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;