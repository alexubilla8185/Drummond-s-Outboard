export default function LeadCapture() {
  return (
    <section className="py-16 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">
          <h2 className="text-3xl font-black text-white mb-6 tracking-tight">SERVICE REQUEST</h2>
          <form data-netlify="true" name="service-request" className="space-y-6">
            <input type="hidden" name="form-name" value="service-request" />
            
            {[
              { name: 'name', label: 'Name', type: 'text' },
              { name: 'phone', label: 'Phone Number', type: 'tel' },
              { name: 'engine', label: 'Engine Make/Model', type: 'text' },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  id={field.name}
                  className="peer w-full bg-slate-950 border border-slate-700 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder={field.label}
                  required
                />
                <label htmlFor={field.name} className="absolute left-4 top-2 text-xs text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 transition-all">
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative">
              <textarea
                name="issue"
                id="issue"
                className="peer w-full bg-slate-950 border border-slate-700 rounded-lg px-4 pt-6 pb-2 text-white placeholder-transparent focus:border-blue-500 focus:outline-none transition-colors h-32"
                placeholder="Issue Description"
                required
              />
              <label htmlFor="issue" className="absolute left-4 top-2 text-xs text-slate-500 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-slate-400 peer-focus:top-2 peer-focus:text-xs peer-focus:text-blue-500 transition-all">
                Issue Description
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-lg transition-transform hover:scale-[1.02] active:scale-95"
            >
              SUBMIT REQUEST
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
