import { useState } from 'react';
import { Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const plans = [
  {
    name: 'Starter',
    monthlyPrice: 1499,
    annualPrice: 1199,
    description: 'Perfect for startups and small businesses ready to elevate their video presence.',
    features: [
      '2 videos per month',
      'Up to 60 seconds each',
      'AI script generation',
      'Basic motion graphics',
      'HD delivery (1080p)',
      '2 revision rounds',
    ],
    cta: 'Get Started',
    highlighted: false,
  },
  {
    name: 'Pro',
    monthlyPrice: 3499,
    annualPrice: 2799,
    description: 'The complete package for growing brands that demand cinematic quality at scale.',
    features: [
      '6 videos per month',
      'Up to 3 minutes each',
      'Advanced AI scripting',
      'Premium motion graphics',
      '4K delivery',
      'Unlimited revisions',
      'Dedicated producer',
      'Priority turnaround',
    ],
    cta: 'Start Pro',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    monthlyPrice: 0,
    annualPrice: 0,
    description: 'Custom solutions for large organizations with complex, high-volume video needs.',
    features: [
      'Unlimited videos',
      'Any length & format',
      'Custom AI workflows',
      'Full VFX & compositing',
      'Multi-platform delivery',
      'Dedicated team',
      'SLA guarantee',
      'White-label options',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
];

function PricingCard({
  plan,
  annual,
  index,
}: {
  plan: typeof plans[0];
  annual: boolean;
  index: number;
}) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const price = annual ? plan.annualPrice : plan.monthlyPrice;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative rounded-2xl p-8 flex flex-col transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${
        plan.highlighted
          ? 'bg-gradient-to-b from-teal/20 to-deep-2 border-2 border-teal/50 shadow-2xl shadow-teal/20 scale-105'
          : 'glass-card hover:border-white/15'
      } hover:-translate-y-1`}
      style={{ transitionDelay: `${index * 100}ms`, transitionProperty: 'opacity, transform, box-shadow' }}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-teal text-deep text-xs font-bold tracking-wide">
          MOST POPULAR
        </div>
      )}

      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{plan.description}</p>
      </div>

      <div className="mb-8">
        {price === 0 ? (
          <div className="text-4xl font-black text-white">Custom</div>
        ) : (
          <div className="flex items-end gap-1">
            <span className="text-white/50 text-lg font-medium">$</span>
            <span className="text-5xl font-black text-white">{price.toLocaleString()}</span>
            <span className="text-white/40 text-sm mb-2">/mo</span>
          </div>
        )}
        {annual && price > 0 && (
          <p className="text-teal text-sm mt-1 font-medium">
            Save ${((plan.monthlyPrice - plan.annualPrice) * 12).toLocaleString()}/year
          </p>
        )}
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-3 text-sm text-white/70">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-teal/20 text-teal' : 'bg-white/10 text-white/60'}`}>
              <Check size={12} strokeWidth={3} />
            </div>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105 ${
          plan.highlighted
            ? 'bg-teal text-deep hover:bg-teal-light hover:shadow-lg hover:shadow-teal/30'
            : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
        }`}
      >
        {plan.cta}
      </button>
    </div>
  );
}

export default function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();

  return (
    <div className="py-28 px-6 bg-deep-2">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-14 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-teal text-sm font-semibold tracking-widest uppercase">Pricing</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Transparent, Scalable Plans
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            Choose the plan that fits your ambitions. No hidden fees, no surprises.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-4 p-1.5 rounded-full bg-white/5 border border-white/10">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                !annual ? 'bg-white text-deep shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                annual ? 'bg-white text-deep shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              Annual
              <span className="text-xs px-2 py-0.5 rounded-full bg-teal/20 text-teal font-bold">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} annual={annual} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
