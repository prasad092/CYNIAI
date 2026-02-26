import { Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const testimonials = [
  {
    initials: 'SR',
    name: 'Sarah Reynolds',
    company: 'Apex Technologies',
    role: 'CMO',
    rating: 5,
    quote:
      'FrameAI completely transformed our brand storytelling. The quality of their AI-assisted production is indistinguishable from traditional high-budget filmmaking — but delivered in half the time.',
    color: 'teal',
  },
  {
    initials: 'MK',
    name: 'Marcus Kim',
    company: 'Pulse Media Group',
    role: 'Creative Director',
    rating: 5,
    quote:
      'We\'ve worked with many video agencies, but none come close to the creative intelligence FrameAI brings. Their AI scripting alone saved us weeks of back-and-forth.',
    color: 'amber',
  },
  {
    initials: 'LP',
    name: 'Laura Patel',
    company: 'Summit Ventures',
    role: 'Head of Marketing',
    rating: 5,
    quote:
      'The social content series they produced for us drove a 340% increase in engagement. The team understood our audience better than we did — remarkable.',
    color: 'teal',
  },
  {
    initials: 'JT',
    name: 'James Torres',
    company: 'Neon Studios',
    role: 'Founder & CEO',
    rating: 5,
    quote:
      'From the first brief to final delivery, the process was seamless. The motion graphics work is absolutely world-class. Our clients are blown away every single time.',
    color: 'amber',
  },
  {
    initials: 'AW',
    name: 'Aisha Williams',
    company: 'Horizon Brands',
    role: 'Brand Manager',
    rating: 5,
    quote:
      'FrameAI\'s brand film for our product launch exceeded every expectation. The cinematic quality and emotional resonance were exactly what we needed to make an impact.',
    color: 'teal',
  },
  {
    initials: 'DC',
    name: 'David Chen',
    company: 'Vertex Digital',
    role: 'VP of Growth',
    rating: 5,
    quote:
      'The ROI on our video content has been extraordinary since partnering with FrameAI. Professional, fast, and genuinely creative — a rare combination in this industry.',
    color: 'amber',
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0]; index: number }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`glass-card p-7 rounded-2xl flex flex-col gap-5 hover:-translate-y-1 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms`, transitionProperty: 'opacity, transform, box-shadow' }}
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={14} className="text-amber fill-amber" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/70 text-sm leading-relaxed flex-1">"{testimonial.quote}"</p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-white/8">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
            testimonial.color === 'teal' ? 'bg-teal/20 text-teal' : 'bg-amber/20 text-amber'
          }`}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{testimonial.name}</div>
          <div className="text-white/40 text-xs">
            {testimonial.role}, {testimonial.company}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

  return (
    <div className="py-28 px-6 bg-deep">
      <div className="max-w-7xl mx-auto">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-teal text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Trusted by Industry Leaders
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            Don't take our word for it — hear from the brands we've helped transform through the power of AI video.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
