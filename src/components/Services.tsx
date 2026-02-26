import { useRef } from 'react';
import { Video, PenTool, Layers, Film, Smartphone, Sliders } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  {
    icon: Video,
    title: 'AI Video Production',
    description: 'End-to-end AI-assisted video production that cuts timelines in half while delivering cinematic quality at scale.',
    color: 'teal',
  },
  {
    icon: PenTool,
    title: 'Script Writing',
    description: 'AI-powered scriptwriting that crafts compelling narratives tailored to your brand voice and target audience.',
    color: 'amber',
  },
  {
    icon: Layers,
    title: 'Motion Graphics',
    description: 'Stunning animated graphics and visual effects that bring your brand story to life with precision and flair.',
    color: 'teal',
  },
  {
    icon: Film,
    title: 'Brand Films',
    description: 'Cinematic brand films that capture your company\'s essence and forge deep emotional connections with viewers.',
    color: 'amber',
  },
  {
    icon: Smartphone,
    title: 'Social Content',
    description: 'Platform-optimized short-form video content engineered for maximum engagement across all social channels.',
    color: 'teal',
  },
  {
    icon: Sliders,
    title: 'Post-Production',
    description: 'Professional color grading, sound design, and AI-enhanced editing that elevates raw footage to broadcast quality.',
    color: 'amber',
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const Icon = service.icon;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card p-8 rounded-2xl group hover:border-teal/30 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms`, transitionProperty: 'opacity, transform, border-color, box-shadow' }}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
          service.color === 'teal' ? 'bg-teal/15 text-teal' : 'bg-amber/15 text-amber'
        } group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={22} />
      </div>
      <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
      <p className="text-white/55 text-sm leading-relaxed">{service.description}</p>
    </div>
  );
}

export default function Services() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

  return (
    <div className="py-28 px-6 bg-deep-2">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-teal text-sm font-semibold tracking-widest uppercase">What We Do</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Full-Spectrum Video Services
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto leading-relaxed">
            From concept to delivery, our AI-powered studio handles every aspect of video production
            with unmatched speed, quality, and creative vision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
