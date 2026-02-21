import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
    const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing...');

  const statuses = [
    'Initializing Core...',
    'Loading Neural Assets...',
    'Establishing Secure Link...',
    'Syncing Global Nodes...',
    'Finalizing Interface...'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.random() * 5;
        const next = Math.min(prev + step, 100);
        
        
        const statusIdx = Math.floor((next / 100) * (statuses.length - 1));
        setStatus(statuses[statusIdx]);
        
        return next;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);
    return(
             <motion.div 
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]" />
      </div>

      <div className="relative flex flex-col items-center">
        
        <div className="relative w-64 h-64 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-[1px] border-blue-500/20 rounded-full border-t-blue-500"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 border-[1px] border-blue-500/10 rounded-full border-b-blue-600"
          />
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-8 border-[1px] border-white/5 rounded-full"
          />

          <div className="text-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-black tracking-[0.2em] text-white"
            >
              CETPA TECHNOLOGIES
            </motion.div>
            <motion.div className="text-blue-500 mono text-xl font-bold mt-2">
              {Math.floor(progress)}%
            </motion.div>
          </div>
        </div>

        
        <div className="mt-16 w-80">
          <div className="flex justify-between items-end mb-2">
            <span className="text-[10px] mono text-blue-400 uppercase tracking-widest overflow-hidden h-4">
              {status}
            </span>
            <span className="text-[10px] mono text-gray-600">100</span>
          </div>
          <div className="h-[2px] w-full bg-white/5 relative overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              className="absolute top-0 left-0 h-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]"
            />
          </div>
        </div>
      </div>

      
      <div 
        className="absolute bottom-0 w-full h-[30vh] opacity-10"
        style={{
          background: 'linear-gradient(0deg, rgba(59,130,246,0.3) 0%, transparent 100%)',
          clipPath: 'polygon(0 100%, 100% 100%, 80% 0, 20% 0)'
        }}
      />
    </motion.div>
    )
}