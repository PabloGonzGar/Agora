export default function Navbar({ onNavigate }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-10 py-6 bg-[#05051a] bg-[radial-gradient(circle_at_top,_#1e1b4b_0%,#020617_100%)]">
      <div 
        className="flex items-center gap-3 cursor-pointer" 
        onClick={() => onNavigate('home')} 
      >
        <span className="text-3xl text-white">🏛️</span>
        <span className="text-2xl font-light tracking-widest text-white uppercase">Ágora</span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm text-gray-300 uppercase">
        <button onClick={() => onNavigate('home')} className="hover:text-white transition">Comunidades</button>
        <button className="hover:text-white transition cursor-not-allowed opacity-50">Eventos</button>
      </div>

      <div className="flex items-center gap-6">
        <button
          onClick={() => onNavigate('login')}
          className="text-white text-sm bg-transparent hover:bg-violet-600 px-5 py-1.5 rounded-full font-bold hover:shadow-lg hover:shadow-violet-900/50 transition-all active:scale-95"
        >
          Iniciar Sesión
        </button>
        <button
          onClick={() => onNavigate('register')}
          className="text-white text-sm bg-transparent hover:bg-violet-600 px-5 py-1.5 rounded-full font-bold hover:shadow-lg hover:shadow-violet-900/50 transition-all active:scale-95"
        >
          Registro
        </button>
      </div>
    </nav>
  );
}