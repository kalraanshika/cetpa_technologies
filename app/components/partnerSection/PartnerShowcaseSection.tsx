"use client"
import { motion } from 'framer-motion';
import LogoBubble from './LogoBubble';

interface Partner {
  id: string;
  name: string;
  bgColor: string;
  textColor: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  position: { top: string; left: string };
}

interface PartnerShowcaseSectionProps {
  title: string;
  highlightText: string;
  buttonText: string;
  onButtonClick: () => void;
}

export default function PartnerShowcaseSection(props: PartnerShowcaseSectionProps){
  const { title, highlightText, buttonText, onButtonClick } = props;
     const partners: Partner[] = [
    // Left Side
    {
      id: '1',
      name: 'Coforge',
      bgColor: 'bg-white',
      textColor: 'text-black',
      size: 'sm',
      position: { top: '10%', left: '5%' }
    },
    {
      id: '2',
      name: 'IRCTC',
      bgColor: 'bg-[#1a1a1a]',
      textColor: 'text-white',
      size: 'md',
      position: { top: '5%', left: '15%' }
    },
    {
      id: '3',
      name: 'DFCCIL',
      bgColor: 'bg-black',
      textColor: 'text-white',
      size: 'md',
      position: { top: '25%', left: '8%' }
    },
    {
      id: '4',
      name: 'IRCON',
      bgColor: 'bg-[#e31837]',
      textColor: 'text-white',
      size: 'lg',
      position: { top: '22%', left: '18%' }
    },
    {
      id: '5',
      name: 'IndiaMart',
      bgColor: 'bg-white',
      textColor: 'text-black',
      size: 'md',
      position: { top: '30%', left: '26%' }
    },
    {
      id: '6',
      name: 'Grant Thornton',
      bgColor: 'bg-white',
      textColor: 'text-gray-400',
      size: 'lg',
      position: { top: '55%', left: '4%' }
    },
    {
      id: '7',
      name: 'VVDN',
      bgColor: 'bg-white',
      textColor: 'text-black',
      size: 'sm',
      position: { top: '50%', left: '20%' }
    },
    {
      id: '8',
      name: 'Girikon',
      bgColor: 'bg-[#F6BE00]',
      textColor: 'text-white',
      size: 'lg',
      position: { top: '75%', left: '12%' }
    },
    {
      id: '9',
      name: 'Xceedance',
      bgColor: 'bg-[#1a1a1a]',
      textColor: 'text-white',
      size: 'xl',
      position: { top: '55%', left: '25%' }
    },
    {
      id: '10',
      name: 'Iris',
      bgColor: 'bg-white',
      textColor: 'text-[#e2a03f]',
      size: 'sm',
      position: { top: '72%', left: '24%' }
    },
    // Right Side
    {
      id: '11',
      name: 'Motherson',
      bgColor: 'bg-[#1a1a1a]',
      textColor: 'text-white',
      size: 'xl',
      position: { top: '10%', left: '70%' }
    },
    {
      id: '12',
      name: 'TATA Power-DDL',
      bgColor: 'bg-[#003087]',
      textColor: 'text-white',
      size: 'xl',
      position: { top: '30%', left: '85%' }
    },
    {
      id: '13',
      name: 'Samsung',
      bgColor: 'bg-[#002855]',
      textColor: 'text-white',
      size: 'sm',
      position: { top: '5%', left: '86%' }
    },
    {
      id: '14',
      name: 'Fiserv',
      bgColor: 'bg-black',
      textColor: 'text-white',
      size: 'md',
      position: { top: '18%', left: '92%' }
    },
    {
      id: '15',
      name: 'Cadence',
      bgColor: 'bg-[#F6BE00]',
      textColor: 'text-white',
      size: 'md',
      position: { top: '40%', left: '76%' }
    },
    {
      id: '16',
      name: 'ITPL',
      bgColor: 'bg-[#c41230]',
      textColor: 'text-white',
      size: 'lg',
      position: { top: '72%', left: '75%' }
    },
    {
      id: '17',
      name: 'Inobees',
      bgColor: 'bg-white',
      textColor: 'text-black',
      size: 'sm',
      position: { top: '78%', left: '85%' }
    },
   
    {
      id: '18',
      name: 'Brajbhumi',
      bgColor: 'bg-black',
      textColor: 'text-white',
      size: 'md',
      position: { top: '55%', left: '84%' }
    }
  ];
    return(
        <section className="relative w-full min-h-[500px] md:min-h-[600px] bg-[#e2e2e8ce] flex items-center justify-center overflow-hidden py-20 px-4">
            <div className="absolute inset-0 hidden md:block">
        {partners.map((partner) => (
          <LogoBubble key={partner.id} partner={partner} />
        ))}
      </div>
      <motion.div 
        className="relative z-20 text-center max-w-2xl px-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#06060d] mb-8 leading-tight">
          {title}
          {highlightText && (
            <span className="block mt-2">{highlightText}</span>
          )}
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onButtonClick}
          className="bg-[#1e3a8a] text-white font-semibold py-4 px-10 rounded-full shadow-xl hover:bg-[#1a365d] transition-colors text-lg"
        >
          {buttonText}
        </motion.button>
      </motion.div>

        <div className="md:hidden absolute bottom-0 left-0 w-full p-4 overflow-x-auto">
         <div className="flex gap-4 animate-scroll whitespace-nowrap">
            
            {[...partners, ...partners].map((partner, idx) => (
               <div 
                 key={`${partner.id}-${idx}`}
                 className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center font-bold text-[10px] shadow-md uppercase ${partner.bgColor} ${partner.textColor}`}
               >
                 {partner.name}
               </div>
            ))}
         </div>
      </div>
   
     

      
      
    </section>
    )
}