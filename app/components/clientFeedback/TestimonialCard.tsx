"use client";
import { Star, CheckCircle } from 'lucide-react';


export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  content: string;
  company?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
 
}

export default function TestimonialCard({ testimonial,  }: TestimonialCardProps) {
  


  return (
     <div className="group bg-[#0c0c0c] border border-white/10 rounded-2xl p-5 w-[350px] md:w-[400px] flex-shrink-0 hover:border-blue-500/30 transition-all duration-500 hover:translate-y-[-4px] relative overflow-hidden">
     
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/5 blur-[80px] rounded-full group-hover:bg-blue-500/10 transition-colors duration-500"></div>
      
      <div className="flex items-center gap-4 mb-5 relative">
        <div className="relative">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            loading="lazy"
            className="w-14 h-14 rounded-full object-cover border-2 border-white/5 group-hover:border-blue-500/50 transition-colors duration-500"
          />
          <div className="absolute -bottom-1 -right-1 bg-[#050505] rounded-full p-1 border border-white/10">
            <CheckCircle size={14} className="text-blue-500 fill-blue-500/10" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-white text-lg tracking-tight">{testimonial.name}</h4>
          <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{testimonial.role}</p>
          {testimonial.company && (
            <span className="text-[10px] text-blue-400/80 font-bold mt-1 block tracking-widest">
              @{testimonial.company.toUpperCase()}
            </span>
          )}
        </div>
      </div>

      <div className="h-[1px] w-full bg-white/5 mb-5"></div>

      <div className="flex items-center gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            className={i < Math.floor(testimonial.rating) ? "text-blue-500 fill-blue-500" : "text-white/10"} 
          />
        ))}
        <span className="text-white/40 text-xs ml-2 font-mono">{testimonial.rating.toFixed(1)}</span>
      </div>

      <p className="text-gray-300 text-sm leading-relaxed mb-6 italic opacity-90 group-hover:opacity-100 transition-opacity">
        "{testimonial.content}"
      </p>

    
    </div>
  );
}