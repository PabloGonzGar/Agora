export default function EventCard({ title, dateStart, dateEnd, image, highlighted }) {
  return (
    <div className={`p-5 rounded-2xl flex flex-col items-center transition-all hover:scale-105 cursor-pointer
      ${highlighted
        ? 'bg-violet-700 border-2 border-violet-400 shadow-[0_0_40px_rgba(109,40,217,0.5)]'
        : 'bg-indigo-950/40 border border-indigo-500/20 backdrop-blur-sm hover:bg-violet-700 hover:border-2 hover:border-violet-400 hover:shadow-[0_0_40px_rgba(109,40,217,0.5)]'}`}>
      <div className="w-full aspect-[3/4] rounded-lg overflow-hidden mb-5">
        <img src={image} className="w-full h-full object-cover" alt={title} />
      </div>
      <h3 className="text-xs font-black text-center text-white mb-4 uppercase tracking-tighter px-2">
        {title}
      </h3>
      <div className="text-[10px] text-gray-300 text-center space-y-1">
        <p>del {dateStart}</p>
        <p>al {dateEnd}</p>
      </div>
    </div>
  );
}