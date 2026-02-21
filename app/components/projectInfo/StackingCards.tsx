// components/StackingCards.tsx
"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react'; 
import ProjectCard from './ProjectCard'; 

interface Project {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  tags: string[];
  previewUrl: string;
  moreDetails?: string;
  color?: string;
}


interface StackingCardsProps {
  projects: Project[];
}



const StackingCards: React.FC<StackingCardsProps> = ({ projects }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    
    offset: ['start start', 'end end'],
  });

 
  const cardScaleRanges = projects.map((_, i) => {
    const start = i * 0.1; 
    const end = start + 0.2; 
    return [start, end];
  });


  const targetScale = 0.9;

  return (
    
          <div ref={containerRef} className="relative  mt-20">
      {projects.map((project, i) => {
        
        const range = cardScaleRanges[i];
       
        const scale = useTransform(scrollYProgress, range, [1, targetScale]);

        return (
          <motion.div
            key={project.id}
            style={{ scale }}
            className="h-screen flex items-center justify-center sticky top-0" 
          >
            <ProjectCard project={project} index={i} />
          </motion.div>
        );
      })}
         </div>
          
        
    
  );
};

export default StackingCards;

