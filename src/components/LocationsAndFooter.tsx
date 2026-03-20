import { Anchor, MapPin, Phone, Clock } from 'lucide-react';

export default function LocationsAndFooter() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Locations */}
          <div className="space-y-8">
            <h2 className="text-4xl font-black tracking-tighter text-white">LOCATION</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
                <h3 className="text-xl font-bold text-blue-500 mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Deerfield Beach
                </h3>
                <p className="text-slate-300">301 NE River Dr, Deerfield Beach, FL 33441</p>
              </div>
              
              <div className="flex flex-col gap-3 text-slate-400">
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5 text-blue-500" /> 954-421-1223
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-500" /> Mon-Fri 11 AM - 5 PM, Closed Weekends
                </div>
              </div>
            </div>
          </div>

          {/* Right: Map */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-500/20 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/50 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14304.588999599839!2d-80.11950331284179!3d26.321731000000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d91d87b0205f21%3A0xa2b65f36cb151653!2sDrummond's%20Outboard!5e0!3m2!1sen!2sus!4v1773968873773!5m2!1sen!2sus" 
                width="100%" 
                height="350" 
                style={{border:0}} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                className="rounded-2xl"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Drummond's Outboard Service. All rights reserved.</p>
          <Anchor className="w-6 h-6 text-blue-500/50" />
        </div>
      </div>
    </footer>
  );
}
