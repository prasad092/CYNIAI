import { useEffect, useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';

const WORDS = ['Storytelling', 'AI Film Making', 'AI Automation', 'Cinematic Inteligence', 'Web Development'];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % WORDS.length);
        setFade(true);
      }, 400);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://www.synima.com/wp-content/uploads/2025/10/Interim-Header-Reel-V4-NO-80s-COMPRESS.mp4"
          type="video/mp4"
        />
      </video><div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.png')" }}
      />
      {/* Bright overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-[#672ddb]/20 via-transparent to-transparent" /> */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent" />
      {/* <div className="absolute inset-0 bg-gradient-to-b from-deep/70 via-deep/60 to-deep" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep/50 via-transparent to-deep/50" /> */}

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-amber/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1.5s' }} />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-32">
        <div
          className={`transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >

          <h1 className="text-1xl md:text-7xl lg:text-6xl font-black tracking-tight leading-[1.05] md:leading-[1.08] mb-6">
            <span className="block text-white">The AI Power Cinema Studio Shaping The Feature Of</span>
            <span
              className={`block text-gradient transition-opacity duration-400 ${fade ? 'opacity-100' : 'opacity-0'}`}
            >
              {WORDS[wordIndex]}
            </span>
            <span className="block text-white"></span>
          </h1>

          {/* <p
            className={`text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            We harness the power of artificial intelligence to craft breathtaking video content
            that captivates audiences and drives real results for your brand.
          </p> */}

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-500 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
          >
            {/* <button
              onClick={() => handleScroll('#contact')}
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-teal text-deep font-bold text-base hover:bg-teal-light transition-all duration-300 hover:shadow-2xl hover:shadow-teal/40 hover:scale-105"
            >
              Get Started
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button> */}
            {/* <button
              onClick={() => handleScroll('#portfolio')}
              className="group flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <Play size={14} className="ml-0.5" fill="white" />
              </div>
             Watch Showreel
            </button> */}
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-1000 delay-700 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
        >
       {/*    {[
            { value: '500+', label: 'Videos Produced' },
            { value: '98%', label: 'Client Satisfaction' },
            { value: '50+', label: 'Global Brands' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black text-teal">{stat.value}</div>
              <div className="text-sm text-white/50 mt-1">{stat.label}</div>
            </div>
          ))} */}
        </div>
      </div>

      {/* Scroll indicator */}
 {/*      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-bounce-slow" />
      </div> */}
    </div>
  );
}
