import { Cpu, Wrench, ShoppingBag } from 'lucide-react';

export default function Services() {
  return (
    <section className="py-20">
      <h2 className="text-4xl font-black tracking-tighter text-white mb-12">OUR SERVICES</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4">
        <div className="group md:col-span-2 md:row-span-2 p-8 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-inner rounded-2xl hover:border-blue-500 transition-all duration-300 flex flex-col justify-between">
          <Cpu className="w-12 h-12 text-blue-500 mb-4" />
          <div>
            <h3 className="text-2xl font-bold mb-2">Advanced Diagnostics</h3>
            <p className="text-slate-400">State-of-the-art computer analysis for modern outboard engines to pinpoint issues quickly.</p>
          </div>
        </div>
        <div className="group p-6 bg-slate-900 border border-slate-800 shadow-inner rounded-2xl hover:border-blue-500 transition-all duration-300">
          <Wrench className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Routine Maintenance</h3>
          <p className="text-slate-400 text-sm">Keep your engine running at peak performance with regular service.</p>
        </div>
        <div className="group p-6 bg-slate-900 border border-slate-800 shadow-inner rounded-2xl hover:border-blue-500 transition-all duration-300">
          <ShoppingBag className="w-8 h-8 text-blue-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Marine Accessories</h3>
          <p className="text-slate-400 text-sm">Premium parts and accessories for all your marine needs.</p>
        </div>
      </div>
    </section>
  );
}
