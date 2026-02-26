import { useState } from 'react';
import { Play, ExternalLink } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const projects = [
  {
    image: '/assets/generated/portfolio-thumb-1.dim_600x400.png',
    title: 'Apex Brand Film',
    category: 'Brand Film',
    client: 'Apex Corp',
  },
  {
    image: '/assets/generated/portfolio-thumb-2.dim_600x400.png',
    title: 'Neon Motion Reel',
    category: 'Motion Graphics',
    client: 'Studio Neon',
  },
  {
    image: '/assets/generated/portfolio-thumb-3.dim_600x400.png',
    title: 'Summit Corporate',
    category: 'Corporate Video',
    client: 'Summit Group',
  },
  {
    image: '/assets/generated/portfolio-thumb-4.dim_600x400.png',
    title: 'Pulse Social Series',
    category: 'Social Content',
    client: 'Pulse Media',
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hovered, setHovered] = useState(false);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative rounded-2xl overflow-hidden cursor-pointer group transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 100}ms`, transitionProperty: 'opacity, transform' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="aspect-[3/2] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-t from-deep via-deep/60 to-transparent transition-opacity duration-300 ${
          hovered ? 'opacity-100' : 'opacity-70'
        }`}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <div
          className={`transition-all duration-300 ${hovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'}`}
        >
          <span className="inline-block px-3 py-1 rounded-full bg-teal/20 border border-teal/30 text-teal text-xs font-semibold mb-2">
            {project.category}
          </span>
          <h3 className="text-white font-bold text-lg">{project.title}</h3>
          <p className="text-white/50 text-sm mt-1">{project.client}</p>
        </div>
        <div
          className={`absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
            hovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`}
        >
          <ExternalLink size={16} className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div className="py-28 px-6 bg-deep">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-teal text-sm font-semibold tracking-widest uppercase">Our Work</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Showreel & Portfolio
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            A glimpse into the cinematic worlds we've built for brands that dare to stand out.
          </p>
        </div>

        {/* Featured Video */}
        <div
          ref={videoRef as React.RefObject<HTMLDivElement>}
          className={`mb-14 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 transition-all duration-700 ${
            videoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative aspect-video bg-deep-2">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&rel=0&modestbranding=1"
              title="Agency Showreel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            {/* Play overlay hint */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-20 h-20 rounded-full bg-teal/20 backdrop-blur-sm border border-teal/40 flex items-center justify-center opacity-0">
                <Play size={32} className="text-teal ml-1" fill="currentColor" />
              </div>
            </div>
          </div>
          <div className="bg-deep-2 px-8 py-5 flex items-center justify-between border-t border-white/5">
            <div>
              <h3 className="text-white font-bold text-lg">FrameAI — 2025 Showreel</h3>
              <p className="text-white/40 text-sm">A year of cinematic excellence</p>
            </div>
            <span className="px-4 py-1.5 rounded-full bg-teal/15 border border-teal/25 text-teal text-sm font-medium">
              Featured
            </span>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
