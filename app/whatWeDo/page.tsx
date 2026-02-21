"use client"
import { motion } from 'framer-motion';
import { Layers, Zap, Cpu, Code, Database, BarChart, HardDrive, Smartphone } from 'lucide-react';
import WorkProcess from '../components/workflow/WorkProcess';

export default function WhatWeDo() {
    const services = [
  {
    title: 'Custom Software Architecture',
    desc: 'Bespoke systems designed for high-availability and zero downtime operations.',
    icon: <Code className="w-10 h-10" />,
    features: ['Microservices', 'API First', 'Event-Driven']
  },
  {
    title: 'Machine Learning Pipelines',
    desc: 'Training and deploying models that turn raw data into actionable business foresight.',
    icon: <BarChart className="w-10 h-10" />,
    features: ['Predictive Analytics', 'Computer Vision', 'NLP']
  },
  {
    title: 'Edge Computing Solutions',
    desc: 'Moving intelligence closer to the source to reduce latency and bandwidth.',
    icon: <HardDrive className="w-10 h-10" />,
    features: ['IoT Integration', 'Real-time Processing', 'Hybrid Cloud']
  },
  {
    title: 'Security & Compliance',
    desc: 'End-to-end encryption and compliance monitoring for global standards.',
    icon: <Layers className="w-10 h-10" />,
    features: ['ISO 27001', 'SOC 2', 'Pen-Testing']
  },
  {
    title: 'Infrastructure Modernization',
    desc: 'Legacy to cloud migration with zero friction and guaranteed data integrity.',
    icon: <Database className="w-10 h-10" />,
    features: ['Cloud Native', 'Kubernetes', 'Serverless']
  },
  {
    title: 'Digital Experience Design',
    desc: 'Creating interfaces that are not just beautiful, but intuitively powerful.',
    icon: <Smartphone className="w-10 h-10" />,
    features: ['UX Strategy', 'UI Systems', 'User Research']
  }
];
  return (
     <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">ENGINEERING THE <span className="text-blue-500">EXCEPTIONAL</span></h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed">
              We provide the tools and expertise to help businesses transition from the present to the future. Our approach is rooted in efficiency and built for scale.
            </p>
          </motion.div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent" />
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-blue-500 transition-all group"
              >
                <div className="text-blue-500 mb-8 group-hover:scale-110 transition-transform duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-8 font-light">{service.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map(f => (
                    <span key={f} className="px-3 py-1 bg-white/5 rounded-full text-[10px] uppercase font-bold text-gray-400 border border-white/5">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

   
      <WorkProcess/>
    </div>
  );
}