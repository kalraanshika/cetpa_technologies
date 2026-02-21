"use client"
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ProcessCardProps {
  title: string;
  icon: React.ReactElement;
  desc: string;
  step: number;
}

export default function ProcessCard({ title, icon, desc, step }: ProcessCardProps) {
  return (
    <div className="group relative p-1 rounded-[2.5rem] transition-all duration-700 hover:scale-[1.02]">
      
      <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-blue-500/40 group-hover:via-cyan-400/40 group-hover:to-purple-500/40 transition-all duration-1000 blur-sm" />

      <div className="relative h-full p-10 md:px-2 rounded-[2.4rem] bg-[#0A0A0A]/90 backdrop-blur-xl border border-white/5 overflow-hidden flex flex-col">
      
        <div className="absolute -top-4 -right-4 text-9xl font-black text-white/[0.1] italic select-none group-hover:text-blue-500/[0.05] transition-colors duration-700">
          {step}
        </div>

    
        <div className="relative w-15 h-15 ">
          <div className="absolute inset-0 bg-blue-600/20 blur-2xl rounded-full group-hover:bg-blue-600/40 transition-colors duration-700" />
          <div className="relative w-full h-full bg-gradient-to-br from-blue-500/10 to-blue-600/5 border border-white/10 rounded-2xl flex items-center justify-center text-blue-400 group-hover:text-white group-hover:border-blue-500/50 transition-all duration-500">
            {React.cloneElement(icon as React.ReactElement, { size: 36, strokeWidth: 1.5 })}
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center  ">
            <span className="text-xs font-black tracking-[0.3em] text-blue-500 uppercase">Step {step}</span>
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500/50 to-transparent" />
          </div>

          <h3 className="text-3xl font-black mb-6 tracking-tighter italic uppercase group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-blue-400 transition-all duration-500">
            {title}
          </h3>

          <p className="text-gray-400 text-lg leading-relaxed font-light mb-8 group-hover:text-gray-300 transition-colors">
            {desc}
          </p>
        </div>

    
       
      </div>
    </div>
  );
}