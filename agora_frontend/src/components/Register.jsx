export default function Register({ onSwitch }) {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4 py-10 fade-in">
      <div className="w-full max-w-lg bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-light text-white uppercase tracking-widest">Únete a Ágora</h2>
          <p className="text-gray-400 text-xs mt-2 uppercase tracking-tighter">Crea tu cuenta para ser parte de la comunidad</p>
        </div>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
          <div className="md:col-span-2">
            <label className="block text-gray-400 text-[10px] uppercase font-bold mb-2 ml-4 tracking-widest">Nombre Completo</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white outline-none focus:border-violet-500 transition" />
          </div>
          <div>
            <label className="block text-gray-400 text-[10px] uppercase font-bold mb-2 ml-4 tracking-widest">Usuario</label>
            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white outline-none focus:border-violet-500 transition" />
          </div>
          <div>
            <label className="block text-gray-400 text-[10px] uppercase font-bold mb-2 ml-4 tracking-widest">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white outline-none focus:border-violet-500 transition" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-gray-400 text-[10px] uppercase font-bold mb-2 ml-4 tracking-widest">Contraseña</label>
            <input type="password" placeholder="Mínimo 8 caracteres" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white outline-none focus:border-violet-500 transition" />
          </div>
          <button className="md:col-span-2 bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-full shadow-lg shadow-violet-900/40 transition-all mt-4">
            Crear cuenta gratuita
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-8 uppercase tracking-widest">
          ¿Ya eres miembro? <button onClick={onSwitch} className="text-violet-400 hover:underline font-bold">Inicia Sesión</button>
        </p>
      </div>
    </div>
  );
}