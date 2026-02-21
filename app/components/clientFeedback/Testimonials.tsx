"use client";

import TestimonialCard, { Testimonial } from "./TestimonialCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Mukti Prasad Dash",
    role: "Full Stack Developer",
    image: "https://picsum.photos/seed/user1/100/100",
    rating: 5,
    content: "CETPA Technologies delivered a robust and scalable software solution tailored to our needs. Their expertise, professionalism, and commitment to quality made the entire development process seamless. Highly recommended!",
    company: "Tech Solutions",
  },
  {
    id: "2",
    name: "Pradum_k",
    role: "MERN Stack Developer",
    image: "https://picsum.photos/seed/user2/100/100",
    rating: 4,
    content: "CETPA Technologies delivered a robust and scalable software solution tailored to our needs. Their expertise, professionalism, and commitment to quality made the entire development process seamless. Highly recommended!",
    company: "DevFlow",
  },
  {
    id: "3",
    name: "Ankit Warade",
    role: "Frontend Engineer",
    image: "https://picsum.photos/seed/user3/100/100",
    rating: 5,
    content: "CETPA Technologies delivered a robust and scalable software solution tailored to our needs. Their expertise, professionalism, and commitment to quality made the entire development process seamless. Highly recommended!",
    company: "InnovateX",
  },
  {
    id: "4",
    name: "Vikram Singh",
    role: "Backend Developer",
    image: "https://picsum.photos/seed/user4/100/100",
    rating: 5,
    content: "CETPA Technologies delivered a robust and scalable software solution tailored to our needs. Their expertise, professionalism, and commitment to quality made the entire development process seamless. Highly recommended!",
    company: "LogicGate",
  },
  {
    id: "5",
    name: "Pragati Nayak",
    role: "Junior Web Developer",
    image: "https://picsum.photos/seed/user5/100/100",
    rating: 5,
    content: "CETPA Technologies delivered a robust and scalable software solution tailored to our needs. Their expertise, professionalism, and commitment to quality made the entire development process seamless. Highly recommended!",
    company: "StartUp Hub",
  },
  {
    id: "6",
    name: "Samarth Jain",
    role: "Local Guide & Coder",
    image: "https://picsum.photos/seed/user6/100/100",
    rating: 4,
    content: "CETPA Technologies delivered a robust and scalable software solution tailored to our needs. Their expertise, professionalism, and commitment to quality made the entire development process seamless. Highly recommended!.",
    company: "GeoCode",
  },
  {
    id: "7",
    name: "Aisha Khan",
    role: "UI/UX Designer",
    image: "https://picsum.photos/seed/user7/100/100",
    rating: 5,
    content: "CETPA Technologies delivered a robust and scalable software solution tailored to our needs. Their expertise, professionalism, and commitment to quality made the entire development process seamless. Highly recommended!",
    company: "PixelPerfect",
  },
  {
    id: "8",
    name: "Rahul Mehta",
    role: "Software Engineer",
    image: "https://picsum.photos/seed/user8/100/100",
    rating: 5,
    content: "CETPA Technologies delivered a robust and scalable software solution tailored to our needs. Their expertise, professionalism, and commitment to quality made the entire development process seamless. Highly recommended!",
    company: "MegaTech",
  },
];


const LOOPED_TESTIMONIALS: Testimonial[] = [
  ...TESTIMONIALS,
  ...TESTIMONIALS,
  ...TESTIMONIALS,
];

export default function Testimonials() {
  return (
    <section id="clientsFB" className="py-2 py-10 bg-[#0b0b0b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 ">
        <div className="text-center py-10">
          <div className="inline-block px-4 py-1 rounded-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
            Our Client
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
            HEAR FROM OUR <span className="text-blue-500">CLIENTS</span>
          </h2>
        </div>
      </div>

      <Swiper
        modules={[Autoplay, FreeMode]}
        slidesPerView={1}
        spaceBetween={20}
        speed={9000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={{
          enabled: true,
          momentum: false,
        }}
        allowTouchMove={false}
        loop={true}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full"
      >
        {LOOPED_TESTIMONIALS.map((testimonial, index) => (
          <SwiperSlide key={`${testimonial.id}-${index}`}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
