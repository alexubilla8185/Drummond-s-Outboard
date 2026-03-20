import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import LeadCapture from './components/LeadCapture';
import LocationsAndFooter from './components/LocationsAndFooter';

export default function App() {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      <main className="container mx-auto px-6 py-12">
        <Hero />
        <Services />
        <LeadCapture />
      </main>
      <LocationsAndFooter />
    </div>
  );
}
