// components/ProjectCard.tsx
import React from 'react';

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


interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  
  const cardOverlap = -10; 

  
  const stickyTopOffset = `${index * cardOverlap}px`;

  return (
    <div
      className="sticky w-full max-w-5xl mx-auto mb-32 group transition-all duration-500"
      style={{
        top: `calc(10vh + ${stickyTopOffset})`, 
        zIndex: 100 - index,
      }}
    >
      <div
        className={`relative overflow-hidden rounded-[2.5rem] shadow-2xl border border-white/10 backdrop-blur-md h-[500px] md:h-[600px] flex flex-col md:flex-row bg-[#0a0a0a] transition-transform duration-500 group-hover:scale-[1.01]`}
      >
        
        <div
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: project.color }}
        />

     
        <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
         
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent md:bg-gradient-to-r" />
        </div>

        
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span
                className="w-3 h-3 rounded-full animate-pulse"
                style={{ backgroundColor: project.color }}
              />
              <span className="text-sm font-semibold tracking-widest text-slate-400 uppercase">
                Project {index + 1}
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
              {project.name}
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 line-clamp-3">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-slate-300"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-auto"> {/* Added mt-auto */}
            <a
              href={project.previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-white text-slate-900 px-8 py-3 rounded-xl font-bold transition-all hover:bg-slate-200 active:scale-95 shadow-lg shadow-white/5"
            >
             
              <i className="fa-solid fa-eye"></i>
              Preview
            </a>
            <button
              className="flex items-center justify-center gap-2 bg-slate-800 text-white px-8 py-3 rounded-xl font-bold border border-white/10 transition-all hover:bg-slate-700 active:scale-95"
              onClick={() => alert(`More info about ${project.name}: ${project.moreDetails}`)}
            >
              <i className="fa-solid fa-plus"></i>
              More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

