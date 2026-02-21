"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const services = [
  {
    title: "IT Consulting & Managed Services",
    desc: "Architecting high-speed, low-latency backbone systems for global enterprises.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Software Development & Engineering",
    desc: "Seamlessly managing hybrid and multi-cloud environments for peak efficiency.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "AI & Data Services",
    desc: "Advanced threat detection and zero-trust security frameworks for data integrity.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Cybersecurity Solutions",
    desc: "Deploying custom neural networks to automate complex business decision logic.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "IT Staff Augmentation & Outsourcing",
    desc: "Streamlining CI/CD pipelines to accelerate software delivery cycles.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Cloud & DevOps Solutions",
    desc: "Safe and efficient transitioning of outdated systems to modern tech stacks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Digital Transformation & Automation",
    desc: "Safe and efficient transitioning of outdated systems to modern tech stacks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing Services",
    desc: "Safe and efficient transitioning of outdated systems to modern tech stacks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
  {
    title: "Corporate Training Services",
    desc: "Safe and efficient transitioning of outdated systems to modern tech stacks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
   {
    title: "Plug & Play Products",
    desc: "Safe and efficient transitioning of outdated systems to modern tech stacks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
   {
    title: "Ecommerce Website",
    desc: "Safe and efficient transitioning of outdated systems to modern tech stacks.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-20">
        <div className="text-center">
          <div className="inline-block px-4 py-1 rounded-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
            Our Services
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            Unmatched Quality <br />
            <span className="text-blue-600">Unrivalled IT Solutions!</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
            Transform your business with innovative, secure and scalable IT solutions to streamline operations, enhance security and drive efficiency for success.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={30}
          slidesPerView={1.2}
          loop
          speed={5000}
          freeMode
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.5 },
            1440: { slidesPerView: 4.5 },
          }}
          className="services-swiper !px-8 md:!px-16"
        >
          {services.map((service, idx) => {
            const isHighlighted = hoveredIndex === idx;

            return (
              <SwiperSlide key={idx} className="h-auto pb-12">
                <div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group h-full p-8 rounded-[2rem] transition-all duration-500 flex flex-col cursor-pointer ${
                    isHighlighted
                      ? "bg-gradient-to-b from-[#0A1A3F] to-[#050505] border border-blue-500/30 shadow-2xl shadow-blue-900/10"
                      : "bg-white/[0.03] border border-white/5 hover:border-white/20"
                  }`}
                >
                  <div className="mb-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-black text-white tracking-tight line-clamp-2">
                        {service.title}
                      </h3>
                      <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm font-light leading-relaxed line-clamp-2">
                      {service.desc}
                    </p>
                  </div>

                  <div className="relative mt-auto overflow-hidden rounded-3xl aspect-[4/3] border border-white/5">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

                   
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
