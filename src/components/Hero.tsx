export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center py-20">
      <div className="space-y-6">
        <h1 className="text-6xl font-black tracking-tighter text-white">EXPERT OUTBOARD DIAGNOSTICS & REPAIR.</h1>
        <p className="text-xl text-slate-400">The trusted choice for hardcore fishermen who demand peak performance on the water.</p>
        <div className="flex gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl">Schedule Service</button>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-blue-500/20 rotate-3 rounded-2xl"></div>
        <img
          src="https://images.unsplash.com/photo-1754934076886-55317e36f1a5?q=80&w=1000&auto=format&fit=crop"
          alt="Speedboat cutting through ocean waves"
          className="relative rotate-3 rounded-2xl shadow-2xl aspect-[4/3] object-cover"
          referrerPolicy="no-referrer"
        />
      </div>
    </section>
  );
}
