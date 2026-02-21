"use client"
import { motion } from 'framer-motion';
import { Search, MapPin, Clock, ArrowRight, UserPlus } from 'lucide-react';

export default function Career() {
    const jobs = [
  { title: 'Senior AI Research Engineer', type: 'Full-time', location: 'San Francisco, CA', team: 'Intelligence' },
  { title: 'Full-Stack Developer (React/Rust)', type: 'Remote', location: 'Europe/US', team: 'Core Product' },
  { title: 'Lead Product Designer', type: 'Full-time', location: 'New York, NY', team: 'Design Systems' },
  { title: 'Cybersecurity Analyst', type: 'Full-time', location: 'Austin, TX', team: 'Defense' },
  { title: 'DevOps & Infrastructure Architect', type: 'Contract', location: 'Remote', team: 'Platform' },
];
  return (
    <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-20 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-5xl md:text-7xl font-black mb-8 tracking-tighter"
            >
              BUILD THE <span className="text-blue-500 underline decoration-2 underline-offset-8">UNTHINKABLE</span>
            </motion.h1>
            <p className="text-gray-400 text-lg font-light leading-relaxed">
              We're looking for the rebels, the dreamers, and the perfectionists. If you believe technology is an art form, you belong here.
            </p>
          </div>
        </div>
      </section>

      {/* Perks */}
      <section className="py-12 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-6">
            {['Remote-First Culture', 'Equity Options', 'Flexible PTO', 'Learning Stipend', 'Health & Wellness'].map((perk) => (
              <span key={perk} className="px-6 py-2 bg-white/5 border border-white/5 rounded-full text-xs font-bold uppercase text-blue-400">
                {perk}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Search & Listings */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <h2 className="text-3xl font-bold">Open Positions</h2>
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search roles..." 
                className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:border-blue-500 transition-colors"
              />
            </div>
          </div>

          <div className="space-y-4">
            {jobs.map((job, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col md:flex-row md:items-center justify-between hover:bg-white/[0.08] transition-all cursor-pointer"
              >
                <div>
                  <span className="text-[10px] text-blue-500 font-bold uppercase tracking-widest">{job.team}</span>
                  <h3 className="text-xl font-bold mt-1 group-hover:text-blue-400 transition-colors">{job.title}</h3>
                  <div className="flex items-center space-x-6 mt-4 text-xs text-gray-500 font-medium">
                    <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {job.type}</span>
                    <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {job.location}</span>
                  </div>
                </div>
                <div className="mt-6 md:mt-0 flex items-center text-blue-500 font-bold text-sm uppercase group-hover:translate-x-2 transition-transform">
                  Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-blue-600 rounded-[40px] text-center text-white">
            <UserPlus className="w-12 h-12 mx-auto mb-6" />
            <h3 className="text-3xl font-black mb-4">DON'T SEE A FIT?</h3>
            <p className="text-blue-100 max-w-xl mx-auto mb-10">We're always looking for exceptional talent. Send us your resume and tell us why we need you.</p>
            <button className="px-10 py-4 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform">
              General Application
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}