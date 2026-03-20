import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-6 flex justify-between items-center">
      <div className="text-2xl font-bold text-blue-500">Drummond's Outboard</div>
      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-blue-500">Services</a>
        <a href="#" className="hover:text-blue-500">Locations</a>
      </div>
      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-950 z-50 flex flex-col items-center justify-center gap-8">
          <button onClick={() => setIsMenuOpen(false)}><X size={40} /></button>
          <a href="#" className="text-4xl font-bold" onClick={() => setIsMenuOpen(false)}>Services</a>
          <a href="#" className="text-4xl font-bold" onClick={() => setIsMenuOpen(false)}>Locations</a>
        </div>
      )}
    </nav>
  );
}
