
import React from 'react';
import { Shield, Target, Rocket, Users, Zap, Globe, Cpu, Award, Code } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-2 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-1 rounded-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
            About Us
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            Innovative IT experts <br />
            <span className="text-blue-600">We are your technology partners</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light mb-5">
            We provide expert IT consulting, helping businesses optimize operations, enhance security and drive growth with cutting-edge technology, tailored solutions for long-term success in a digital world.
          </p>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:auto-rows-[150px]">
          
        
          <div className="md:col-span-1 glass-effect rounded-[2rem] p-8 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500">
            <div className="w-10 h-10 bg-blue-600/10 rounded-xl flex items-center justify-center text-blue-500">
              <Award size={20} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-gray-500 mb-2"> Clients Served</h4>
              <p className="text-xl font-black italic uppercase leading-none">300+</p>
            </div>
          </div>

          
          <div className="md:col-span-2 bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 flex items-center gap-6 group hover:bg-white/[0.04] transition-all duration-500">
            <div className="hidden sm:flex w-16 h-16 shrink-0 bg-blue-600/20 rounded-2xl items-center justify-center text-blue-400">
              <Target size={32} />
            </div>
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-blue-500 mb-2">Vision</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                To architect the digital backbones that allow global enterprises to operate at the speed of thought.
              </p>
            </div>
          </div>

         
          <div className="md:col-span-1 glass-effect rounded-[2rem] p-8 flex flex-col items-center justify-center text-center group hover:border-blue-500/30 transition-all duration-500">
            <Zap className="text-blue-500 mb-4 animate-pulse" size={28} />
            <div className="text-3xl font-black italic tracking-tighter">99.99%</div>
            <p className="text-[10px] font-black uppercase tracking-widest text-gray-500">Uptime</p>
          </div>

          
          <div className="md:col-span-1 md:row-span-2 bg-gradient-to-b from-blue-900/20 to-transparent border border-white/5 rounded-[2.5rem] p-8 flex flex-col justify-between group overflow-hidden">
            <div className="relative z-10">
              <Globe className="text-blue-500 mb-6 group-hover:rotate-12 transition-transform duration-700" size={40} />
              <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4">Cetpa Network</h4>
              <p className="text-gray-400 text-sm font-light leading-relaxed">
                We focus to provide you the help in utilization of these IT resources. Our team designs a model for your organization to utilize each resource and provide you better solutions.
              </p>
            </div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl rounded-full" />
          </div>

         
          <div className="md:col-span-2 md:row-span-2 relative rounded-[2.5rem] bg-[#0A1A3F] border border-blue-500/30 overflow-hidden group shadow-2xl shadow-blue-900/20">
            <div className="absolute inset-0 bg-[url('https://cetpatechnologies.com/wp-content/uploads/2025/02/9-1.jpg')] bg-cover bg-center opacity-20 group-hover:scale-110 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-end">
              
              <h3 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter mb-4 leading-none">
                CETPA <br /><span className="text-blue-500">TECHNOLOGIES</span>
              </h3>
              <p className="text-gray-300 text-lg font-light leading-relaxed max-w-md">
                Proprietary AI-driven infrastructure that predicts failures before they happen.
              </p>
            </div>
          </div>

        
          <div className="md:col-span-1 md:row-span-2 glass-effect rounded-[2.5rem] p-8 flex flex-col justify-between group hover:border-blue-500/30 transition-all duration-500">
            <div>
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white mb-6">
                <Shield size={24} />
              </div>
              <h4 className="text-xl font-black italic uppercase tracking-tighter mb-4">Company Offers</h4>
              <p className="text-gray-400 text-xs font-light leading-relaxed">
                We provide IT strategy, cloud computing, cybersecurity, software development, managed IT services and technical support for businesses of all sizes.
              </p>
            </div>
            <div className="pt-6 border-t border-white/5 mt-auto">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                <span className="text-[8px] font-black uppercase tracking-widest text-gray-500">Cetpa Technologies</span>
              </div>
            </div>
          </div>

          
          <div className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center group hover:bg-white/[0.04] transition-all duration-500">
            <Rocket className="text-purple-500 mb-4" size={24} />
            <h4 className="text-lg font-black uppercase tracking-widest mb-1">1800+</h4>
            <p className="text-gray-500 text-xs font-light italic"> Transparency Services</p>
          </div>

    
          <div className="md:col-span-2 glass-effect rounded-[2rem] p-8 flex items-center justify-between group hover:bg-blue-600/5 transition-all duration-500">
            <div className="flex flex-col">
              <h4 className="text-lg font-black uppercase tracking-widest mb-2">The Collective</h4>
              <p className="text-gray-500 text-sm font-light">15+ engineers </p>
            </div>
            <div className="flex -space-x-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-[#050505] bg-gray-800 overflow-hidden grayscale hover:grayscale-0 transition-all cursor-pointer">
                  <img src={`https://i.pravatar.cc/100?img=${i + 20}`} alt="team" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-[#050505] bg-blue-600 flex items-center justify-center text-[10px] font-black">
                +12
              </div>
            </div>
          </div>

          
          <div className="md:col-span-1 bg-white/[0.02] border border-white/5 rounded-[2rem] p-8 flex flex-col justify-center items-center group hover:border-blue-500/30 transition-all duration-500">
            <Code className="text-blue-500 mb-3" size={24} />
            <h4 className="text-lg font-black uppercase tracking-widest text-white">Community</h4>
            <span className="text-xs text-gray-500 mt-1 uppercase font-black">Open Source Core</span>
          </div>

        </div>
      </div>

      
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full pointer-events-none" />
    </section>
  );
}
