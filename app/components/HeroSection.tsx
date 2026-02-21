"use client"
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from "react";



export default function HeroSection(){
    const heroTextRef = useRef<HTMLHeadingElement>(null);
  const heroSectionRef = useRef<HTMLDivElement>(null);
    return(
        <section ref={heroSectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-5">
        <div className="hero-bg absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[150px] animate-pulse delay-1000" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
         
          
          <h1 ref={heroTextRef} className="hero-anim text-6xl md:text-8xl font-black tracking-tighter text-white mb-8 leading-[0.9]">
            Seamless IT Solutions <br /> 
            <span className="text-transparent capitalize bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-700">business growth</span>
          </h1>

          <p className="hero-anim text-lg md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            Empowering timely decision-making and driving business excellence
          </p>

          <div className="hero-anim flex flex-col sm:flex-row items-center  justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              href="#"
              className="group px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all transform hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center"
            >
              Get Start A Project <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#"
              className="px-10 py-5 bg-transparent border border-white/10 hover:border-white/40 text-white rounded-full font-bold transition-all backdrop-blur-sm"
            >
              View Case Study
            </Link>
          </div>
        </div>

        
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-40"
        >
        </motion.div>
      </section>
    )
}