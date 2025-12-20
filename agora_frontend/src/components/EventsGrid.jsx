import EventCard from './EventCard';

export default function Events() {
  const eventList = [
    { title: "GAMERGY Madrid 2025", dateStart: "13/03/25", dateEnd: "15/03/25", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=400" },
    { title: "Rol en vivo (LARP)", dateStart: "13/02/26", dateEnd: "15/02/26", image: "https://images.unsplash.com/photo-1519074063236-fa2875152a40?q=80&w=400" },
    { title: "JAPAN WEEKEND MADRID", dateStart: "15/02/26", dateEnd: "16/02/26", image: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=400", highlighted: true },
    { title: "JAPAN WEEKEND BARCELONA", dateStart: "15/03/25", dateEnd: "16/03/25", image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?q=80&w=400" },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl text-center font-light mb-12">Próximos eventos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {eventList.map((e, i) => <EventCard key={i} {...e} />)}
      </div>
    </section>
  );
};