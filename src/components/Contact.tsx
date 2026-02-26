import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  'AI Video Production',
  'Script Writing',
  'Motion Graphics',
  'Brand Films',
  'Social Content',
  'Post-Production',
];

interface FormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const { ref: headingRef, isVisible: headingVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation({ threshold: 0.05 });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <div className="py-28 px-6 bg-deep-2">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headingRef as React.RefObject<HTMLDivElement>}
          className={`text-center mb-16 transition-all duration-700 ${
            headingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <span className="text-teal text-sm font-semibold tracking-widest uppercase">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-3 mb-5">
            Let's Create Something Extraordinary
          </h2>
          <p className="text-white/55 text-lg max-w-xl mx-auto leading-relaxed">
            Ready to elevate your brand with AI-powered video? Tell us about your project and we'll
            get back to you within 24 hours.
          </p>
        </div>

        <div
          ref={formRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 lg:grid-cols-5 gap-10 transition-all duration-700 ${
            formVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Form */}
          <div className="lg:col-span-3 glass-card rounded-2xl p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-teal/20 flex items-center justify-center mb-6">
                  <CheckCircle size={32} className="text-teal" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-white/55 max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will review your project and get back to you
                  within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', company: '', service: '', message: '' }); }}
                  className="mt-8 px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm hover:border-white/40 hover:text-white transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Name <span className="text-teal">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="Your full name"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all ${
                        errors.name ? 'border-red-500/60' : 'border-white/10 focus:border-teal/40'
                      }`}
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">
                      Email <span className="text-teal">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="you@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all ${
                        errors.email ? 'border-red-500/60' : 'border-white/10 focus:border-teal/40'
                      }`}
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      placeholder="Your company name"
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal/40 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/70 mb-2">Service Interest</label>
                    <select
                      value={formData.service}
                      onChange={(e) => handleChange('service', e.target.value)}
                      className="w-full px-4 py-3 rounded-xl bg-deep-2 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 focus:border-teal/40 transition-all appearance-none cursor-pointer"
                    >
                      <option value="" className="bg-deep-2">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-deep-2">{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/70 mb-2">
                    Message <span className="text-teal">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your project, goals, and timeline..."
                    rows={5}
                    className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-white/25 text-sm focus:outline-none focus:ring-2 focus:ring-teal/50 transition-all resize-none ${
                      errors.message ? 'border-red-500/60' : 'border-white/10 focus:border-teal/40'
                    }`}
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-teal text-deep font-bold text-sm hover:bg-teal-light transition-all duration-200 hover:shadow-lg hover:shadow-teal/30 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02]"
                >
                  {submitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-deep/30 border-t-deep rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
              <div className="space-y-5">
                {[
                  { icon: Mail, label: 'Email', value: 'hello@frameai.studio' },
                  { icon: Phone, label: 'Phone', value: '+1 (555) 234-5678' },
                  { icon: MapPin, label: 'Location', value: 'Los Angeles, CA\nUnited States' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-teal/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-teal" />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs font-medium uppercase tracking-wide mb-0.5">{label}</div>
                      <div className="text-white text-sm whitespace-pre-line">{value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card rounded-2xl p-7">
              <h3 className="text-white font-bold text-base mb-3">Response Time</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                We typically respond to all inquiries within <span className="text-teal font-semibold">24 hours</span> on business days.
                For urgent projects, call us directly.
              </p>
              <div className="mt-5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                <span className="text-teal text-sm font-medium">Currently accepting new projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
