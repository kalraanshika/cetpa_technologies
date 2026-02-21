import StackingCards from './StackingCards';

export default function ProjectSection(){
    const PROJECTS = [
  
    {
      id: '1',
      name: 'Human Resource Management System',
      description: 'A cutting-edge video streaming platform built for gamers, featuring zero-latency communication and integrated AI-driven content analysis.',
      imageUrl: 'https://cetpatechnologies.com/wp-content/uploads/2025/02/hrms.jpg',
      tags: ['Reimbursement System', 'Human Resource Management '],
      previewUrl: '#',
      moreDetails: 'CyberStream handles over 100k concurrent viewers with specialized edge computing nodes.',
      color: '#3b82f6' 
    },
    {
      id: '2',
      name: 'Location Tracking System',
      description: 'An advanced machine learning tool that monitors planetary biodiversity through satellite imagery and real-time sensor data from rainforests.',
      imageUrl: 'https://cetpatechnologies.com/wp-content/uploads/2025/02/4.jpg',
      tags: ['Route Tracking', 'User Login'],
      previewUrl: '#',
      moreDetails: 'This project helped identify three previously unknown migratory patterns in endangered avian species.',
      color: '#3b82f6' 
    },
    {
      id: '3',
      name: 'IT Service Management System',
      description: 'A visual architecture tool allowing interior designers to simulate lighting conditions in 3D environments with physically accurate ray tracing.',
      imageUrl: 'https://cetpatechnologies.com/wp-content/uploads/2025/02/5.jpg',
      tags: ['Report Problem', 'Update Details'],
      previewUrl: '#',
      moreDetails: 'Features a proprietary GPU-accelerated rendering engine that works directly in the browser.',
      color: '#3b82f6' 
    },
    {
      id: '4',
      name: 'Bill Tracking System',
      description: 'The next generation of decentralized finance management, offering seamless multi-chain swaps and institutional-grade security for retail users.',
      imageUrl: 'https://cetpatechnologies.com/wp-content/uploads/2025/02/project-3.jpg',
      tags: ['Bill Track', 'User Login'],
      previewUrl: '#',
      moreDetails: 'Nova Wallet uses biometric encryption and multi-sig recovery to ensure user assets are always safe.',
      color: '#3b82f6' 
    },
    {
      id: '5',
      name: 'Tour Reimbursement System',
      description: 'The next generation of decentralized finance management, offering seamless multi-chain swaps and institutional-grade security for retail users.',
      imageUrl: 'https://cetpatechnologies.com/wp-content/uploads/2025/02/Tour-Reimbursement-System.jpg',
      tags: ['Reimbursement System', 'User Login Panel'],
      previewUrl: '#',
      moreDetails: 'Nova Wallet uses biometric encryption and multi-sig recovery to ensure user assets are always safe.',
      color: '#3b82f6' 
    }
  ];
    return(
        <section id="project" className="pt-15 bg-[#050505] ">
                  <div className="max-w-7xl mx-auto px-4 mb-20">
                    <div className="text-center">
                      <div className="inline-block px-4 py-1 rounded-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6">
                        Plug & Play
                      </div>
                      <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                        Our Product  <br />
                        <span className="text-blue-600">Highlights</span>
                      </h2>
                      <p className="text-gray-500 max-w-2xl mx-auto text-lg font-light">
                        Showcasing innovative, successful, tech-driven products that highlight our expertise, efficiency and commitment to excellence.
                      </p>
                    </div>
                  </div>

                  <StackingCards projects={PROJECTS} />
        </section>
    )
}