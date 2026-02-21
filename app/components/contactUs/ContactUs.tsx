import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Clock, Mail, MapPin, Phone, Send } from 'lucide-react';

const ContactUs = React.forwardRef((props, ref) => {
  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-5">
     
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 px-4 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div >
              <div className="inline-block px-4 py-1 rounded-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
            Contact Us
          </div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Innovate, Scale, <span className="text-blue-600">Succeed.</span>
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Let’s build the future together. Join us today for expert solutions, 
                seamless integration, and 24/7 secure IT support.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Our Office</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    D-58, Sector 2, D Block, Noida,<br />
                    Uttar Pradesh 201301, India
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Phone className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-400 text-sm">US: +1-760-790-2644</p>
                  <p className="text-gray-400 text-sm">IN: +91-921-217-2602</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Mail className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-400 text-sm">info@cetpatechnologies.com</p>
                 
    

                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                  <Clock className="text-blue-500 w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Working Hours</h4>
                  <p className="text-gray-400 text-sm">Mon - Fri: 09:30 AM - 07:00 PM</p>
                  <p className="text-gray-400 text-sm">Sat - Sun: Closed</p>
                </div>
              </div>
            </div>

            
          </motion.div>

         
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-2xl"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="Enter Name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="Enter EmailId" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required 
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Phone Number</label>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone Number" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Project Budget</label>
                  <select className="w-full bg-zinc-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors appearance-none">
                    <option>5k - 10k</option>
                    <option>10k - 25k</option>
                    <option>25k - 50k</option>
                    <option>50k+</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Message</label>
                <textarea 
                  placeholder="Tell us about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors min-h-[150px]"
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center space-x-2 shadow-lg shadow-blue-600/20"
              >
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
              
              <p className="text-center text-gray-500 text-xs mt-4">
                By submitting this form, you agree to our <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default ContactUs;