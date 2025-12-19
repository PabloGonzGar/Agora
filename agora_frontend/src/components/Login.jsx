export default function Login({ onSwitch }) {
  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4 fade-in">
      <div className="w-full max-w-md bg-white/5 border border-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-2xl">
        <div className="text-center mb-10">
          <span className="text-4xl">🏛️</span>
          <h2 className="text-3xl font-light text-white mt-4 uppercase tracking-widest">Bienvenido</h2>
          <p className="text-gray-400 text-xs mt-2 uppercase tracking-tighter">Ingresa tus credenciales para continuar</p>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-gray-400 text-[10px] uppercase font-bold mb-2 ml-4 tracking-widest">Email</label>
            <input type="email" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:border-violet-500 outline-none transition" placeholder="tu@ejemplo.com" />
          </div>
          <div>
            <label className="block text-gray-400 text-[10px] uppercase font-bold mb-2 ml-4 tracking-widest">Contraseña</label>
            <input type="password" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:border-violet-500 outline-none transition" placeholder="••••••••" />
          </div>
          <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 rounded-full shadow-lg shadow-violet-900/40 transition-all">
            Iniciar Sesión
          </button>
        </form>

        <p className="text-center text-gray-500 text-xs mt-8 uppercase tracking-widest">
          ¿No tienes cuenta? <button onClick={onSwitch} className="text-violet-400 hover:underline font-bold">Regístrate</button>
        </p>
      </div>
    </div>
  );
}