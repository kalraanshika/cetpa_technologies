"use client"
import { motion } from 'framer-motion';

interface Partner {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  position: { top: string; left: string };
}

const sizeMap = {
  sm: 'w-16 h-16 text-xs',
  md: 'w-20 h-20 text-sm',
  lg: 'w-24 h-24 text-base',
  xl: 'w-32 h-32 text-lg',
};

export default function LogoBubble({ partner }: { partner: Partner }) {
  const floatDuration = 3 + Math.random() * 2;
  const floatDelay = Math.random() * 2;

  return (
    <motion.div
      className={`absolute flex items-center justify-center  rounded-full shadow-lg overflow-hidden transition-transform duration-300 hover:scale-110  z-10 ${partner.bgColor} ${partner.textColor} ${sizeMap[partner.size]}`}
      style={{
        top: partner.position.top,
        left: partner.position.left,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -10, 0],
      }}
      transition={{
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
        y: {
          duration: floatDuration,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
          delay: floatDelay,
        },
      }}
    >
      <span className="font-bold text-center  px-2 uppercase tracking-tighter">
        {partner.name}
      </span>
    </motion.div>
  );
}