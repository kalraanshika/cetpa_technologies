"use client";
import { motion } from 'framer-motion';
import { Target, Users, Globe, Award } from 'lucide-react';

export default function About() {
  return (
   <div className="pb-24">
      {/* Hero */}
      <section className="pt-20 pb-32 bg-black overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter uppercase leading-none italic">
              WE ARE <br /><span className="text-blue-500">THE CATALYST</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
              Founded in 2018, Lumina Dynamics was built on the belief that high-tech should be highly accessible. 
              We don't just solve problems; we redefine expectations.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-1/2 right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
      </section>

      {/* Stats */}
      <section className="py-24 border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { val: '250+', label: 'Engineers' },
              { val: '12', label: 'Global Offices' },
              { val: '500M+', label: 'Requests/Day' },
              { val: '45', label: 'Patents' }
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="text-4xl md:text-5xl font-black text-blue-500 mb-2">{stat.val}</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 font-bold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl font-black mb-12 tracking-tight">OUR CORE PRINCIPLES</h2>
              <div className="space-y-12">
                {[
                  { title: 'Radical Simplicity', desc: 'Removing friction from complex systems to enable human creativity.', icon: <Target className="text-blue-500" /> },
                  { title: 'Aggressive Innovation', desc: 'Always pushing the boundaries of what is technically possible.', icon: <Users className="text-blue-500" /> },
                  { title: 'Global Stewardship', desc: 'Ensuring our technology serves as a force for positive global change.', icon: <Globe className="text-blue-500" /> }
                ].map((item, idx) => (
                  <div key={idx} className="flex space-x-6">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-tr from-blue-900 to-black border border-white/10 rounded-[60px] flex items-center justify-center overflow-hidden">
                <img src="https://picsum.photos/seed/team/800/800" alt="Team" className="w-full h-full object-cover opacity-60 mix-blend-overlay" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <Award className="w-32 h-32 text-blue-500/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}