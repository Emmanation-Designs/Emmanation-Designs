import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Server, Palette, Layout, Video, X, Check, Send, Mail, ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const services = [
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: Code,
    description: 'Responsive, interactive, and performant user interfaces built with modern frameworks like React and Next.js.',
    fields: ['Tech Stack Preference', 'Existing Design?'],
    className: "md:col-span-2 md:row-span-2"
  },
  {
    id: 'uiux',
    title: 'UI/UX Design',
    icon: Layout,
    description: 'User-centric interfaces and experiences designed for clarity, usability, and aesthetic appeal.',
    fields: ['Target Audience', 'Competitor Examples'],
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 'graphic',
    title: 'Graphic Design',
    icon: Palette,
    description: 'Impactful branding, logos, and marketing materials that tell your story.',
    fields: ['Design Style/References', 'Brand Guidelines?'],
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Server,
    description: 'Robust server-side solutions, API development, and database management.',
    fields: ['Tech Stack Preference', 'Database Requirements'],
    className: "md:col-span-1 md:row-span-1"
  },
  {
    id: 'video',
    title: 'Video Editing & Motion',
    icon: Video,
    description: 'Professional editing and motion graphics to bring your video content to life.',
    fields: ['Footage Type', 'Desired Duration'],
    className: "md:col-span-1 md:row-span-1"
  }
];

export default function Services() {
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(null);

  return (
    <section id="services" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Our Expertise</span>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Services</h2>
          <p className="text-slate-400 max-w-xl text-lg">
            Comprehensive digital services tailored to your needs. We build the future, one pixel at a time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedService(service)}
              className={cn(
                "group relative p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 hover:bg-slate-900/80 transition-all cursor-pointer overflow-hidden backdrop-blur-sm",
                service.className
              )}
            >
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-6 h-6 text-blue-400" />
              </div>
              
              <div className="h-full flex flex-col justify-between relative z-10">
                <div className="w-12 h-12 rounded-full bg-blue-900/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform border border-blue-500/20">
                  <service.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>

      <ServiceModal 
        service={selectedService} 
        onClose={() => setSelectedService(null)} 
      />
    </section>
  );
}

function ServiceModal({ service, onClose }: { service: typeof services[0] | null, onClose: () => void }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    description: '',
    budget: '',
    currency: 'USD',
    timeline: '',
    customField: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const encodedMessage = encodeURIComponent(
    `*New ${service.title} Inquiry*\n\n` +
    `*Name:* ${formData.name}\n` +
    `*Email:* ${formData.email}\n` +
    `*Project:* ${formData.description}\n` +
    `*Budget:* ${formData.currency} ${formData.budget}\n` +
    `*Timeline:* ${formData.timeline}\n` +
    `*Details:* ${formData.customField}`
  );

  const mailtoLink = `mailto:emmanationdesigns@gmail.com?subject=New ${service.title} Inquiry&body=${encodedMessage}`;
  const whatsappLink = `https://wa.me/2348081682884?text=${encodedMessage}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-950 border border-white/10 rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl shadow-blue-900/20"
        >
          <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-slate-950/95 backdrop-blur z-10">
            <div className="flex items-center gap-3">
              <service.icon className="w-6 h-6 text-blue-400" />
              <h3 className="text-xl font-bold text-white">{service.title} Inquiry</h3>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Name</label>
                    <input
                      required
                      type="text"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Email</label>
                    <input
                      required
                      type="email"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Project Description</label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none placeholder:text-slate-600"
                    placeholder="Tell us about your vision..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Budget</label>
                    <div className="flex gap-2">
                      <select
                        className="bg-slate-900 border border-white/10 rounded-xl px-3 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all w-24"
                        value={formData.currency}
                        onChange={(e) => setFormData({...formData, currency: e.target.value})}
                      >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="NGN">NGN</option>
                        <option value="CAD">CAD</option>
                        <option value="AUD">AUD</option>
                        <option value="JPY">JPY</option>
                        <option value="CNY">CNY</option>
                        <option value="INR">INR</option>
                        <option value="ZAR">ZAR</option>
                        <option value="AED">AED</option>
                        <option value="SAR">SAR</option>
                        <option value="GHS">GHS</option>
                        <option value="KES">KES</option>
                      </select>
                      <input
                        required
                        type="number"
                        placeholder="Amount"
                        className="flex-1 bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">Timeline</label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 2 weeks"
                      className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                      value={formData.timeline}
                      onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-slate-400 uppercase tracking-wider">
                    {service.fields.join(' / ')}
                  </label>
                  <input
                    type="text"
                    className="w-full bg-slate-900 border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all placeholder:text-slate-600"
                    value={formData.customField}
                    onChange={(e) => setFormData({...formData, customField: e.target.value})}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all mt-4 shadow-lg shadow-blue-900/20 hover:scale-[1.02]"
                >
                  Generate Inquiry
                </button>
              </form>
            ) : (
              <div className="space-y-6 py-8">
                <div className="text-center space-y-2">
                  <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6 border border-green-500/20">
                    <Check className="w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-white">Ready to Send!</h4>
                  <p className="text-slate-400">Choose your preferred method to send your inquiry.</p>
                </div>

                <div className="grid grid-cols-1 gap-4 pt-4">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <Send className="w-5 h-5" />
                    Send via WhatsApp
                  </a>
                  <a
                    href={mailtoLink}
                    className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                  >
                    <Mail className="w-5 h-5" />
                    Send via Email
                  </a>
                </div>
                
                <button 
                  onClick={() => setSubmitted(false)}
                  className="w-full text-slate-500 hover:text-slate-300 text-sm py-4"
                >
                  Back to edit
                </button>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
