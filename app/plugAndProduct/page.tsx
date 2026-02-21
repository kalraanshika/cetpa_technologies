"use client"
import { motion } from 'framer-motion';
import { ShoppingCart, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';

export default function PlugAndProduct() {
    const products = [
  {
    id: 1,
    name: 'Core Nexus Node',
    category: 'Infrastructure',
    price: '$4,999',
    features: ['Self-healing architecture', 'Auto-scaling enabled', 'Global CDN'],
    image: 'https://picsum.photos/seed/node1/400/400'
  },
  {
    id: 2,
    name: 'Shield Guard AI',
    category: 'Security',
    price: '$2,499',
    features: ['Zero-trust verified', 'Anomaly detection', 'Identity management'],
    image: 'https://picsum.photos/seed/guard1/400/400'
  },
  {
    id: 3,
    name: 'Flux Analytics',
    category: 'Big Data',
    price: '$1,899',
    features: ['Real-time dashboard', 'ML insights', 'Export to 50+ formats'],
    image: 'https://picsum.photos/seed/flux1/400/400'
  },
  {
    id: 4,
    name: 'OmniStream Pro',
    category: 'Media',
    price: '$3,299',
    features: ['Low latency ( <10ms)', '4K streaming ready', 'Adaptive bitrate'],
    image: 'https://picsum.photos/seed/omni1/400/400'
  }
];
  return (
     <div className="pb-24">
      {/* Header */}
      <section className="pt-20 pb-20 bg-black text-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">THE <span className="text-blue-500 italic">PLUG & PLAY</span> CATALOG</h1>
            <p className="text-gray-400 max-w-2xl mx-auto font-light">
              Enterprise hardware and software pre-configured for immediate deployment. 
              Skip the setup phase and go straight to execution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row bg-white/5 rounded-[40px] overflow-hidden border border-white/10 group hover:border-blue-500/50 transition-all duration-500"
              >
                <div className="md:w-1/2 relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" 
                  />
                  <div className="absolute top-6 left-6 bg-blue-600 text-white text-[10px] font-black uppercase px-4 py-2 rounded-full shadow-xl">
                    Featured
                  </div>
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-blue-500 font-bold text-xs uppercase tracking-widest">{product.category}</span>
                    <h3 className="text-3xl font-black mt-2 mb-6 tracking-tight">{product.name}</h3>
                    <ul className="space-y-3 mb-8">
                      {product.features.map(feature => (
                        <li key={feature} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-blue-500 mr-2" /> {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-bold mb-1">Price</p>
                      <p className="text-2xl font-mono text-white">{product.price}</p>
                    </div>
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold transition-all flex items-center">
                      Configure <Zap className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     
    </div>
  );
}