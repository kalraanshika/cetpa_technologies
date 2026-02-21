"use client"
import { Zap, Shield, Globe, Cpu } from 'lucide-react';
import ProcessCard from './ProcessCard'; 

export default function WorkProcess() {
  const processes = [
    { step: 1, title: 'Research', icon: <Zap />, desc: 'We do research before we start any project' },
    { step: 2, title: 'Designing', icon: <Cpu />, desc: 'Design according to client\'s requirements' },
    { step: 3, title: 'Development', icon: <Shield />, desc: 'Developed by skilled developers team' },
    { step: 4, title: 'Live Testing', icon: <Globe />, desc: 'After Completion, tests are executed in live environments' },
  ];

  return (
    <section id="process" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      <div className="absolute top-1/4 -right-40 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full animate-pulse-slow" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-indigo-600/10 blur-[120px] rounded-full" />

      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="inline-block px-4 py-1 rounded-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
            Work Process
            </div>
            <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
              Revolutionizing Workflows  <br/> <span className="text-blue-600">Through IT Excellence</span> <br />
            </h2>
          
            <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light mb-4">
             Enhancing efficiency, automation, and growth with cutting-edge IT solutions for seamless workflows.
            </p>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {processes.map((process, idx) => (
            <ProcessCard key={idx} {...process} />
          ))}
        </div>

        
      </div>
    </section>
  );
}