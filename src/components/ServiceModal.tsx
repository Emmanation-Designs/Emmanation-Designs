import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Send, Mail, AlertCircle } from 'lucide-react';
import { ServiceType } from '@/data/services';

export default function ServiceModal({
  service,
  onClose,
}: {
  service: ServiceType | null;
  onClose: () => void;
}) {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    whatsapp: '',
    description: '',
    budget: '',
    currency: 'NGN',
    timeline: '',
    customField: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  if (!service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setError('Please provide your name and a valid email address.');
      return;
    }
    if (!formData.description.trim()) {
      setError('Please describe your project requirements.');
      return;
    }
    setError(null);
    setSubmitted(true);
  };

  const encodedMessage = encodeURIComponent(
    `*New ${service.title} Inquiry*\n\n` +
      `*Name:* ${formData.name.trim()}\n` +
      `*Business:* ${formData.businessName.trim() || 'Not specified'}\n` +
      `*Email:* ${formData.email.trim()}\n` +
      `*WhatsApp:* ${formData.whatsapp.trim() || 'Not specified'}\n` +
      `*Project:* ${formData.description.trim()}\n` +
      `*Budget:* ${formData.currency} ${formData.budget || 'To be discussed'}\n` +
      `*Timeline:* ${formData.timeline || 'Flexible'}\n` +
      `*Details:* ${formData.customField || 'None'}`
  );

  const mailtoLink = `mailto:emmanationdesigns@gmail.com?subject=${encodeURIComponent(
    `New ${service.title} Inquiry`
  )}&body=${encodedMessage}`;
  const whatsappLink = `https://wa.me/2349038418469?text=${encodedMessage}`;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#060D24]/75 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.97, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.97, opacity: 0, y: 12 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white border border-[#D5DBEC] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl relative text-[#0B193F]"
        >
          <div className="p-5 sm:p-6 border-b border-[#D5DBEC] flex justify-between items-center sticky top-0 bg-white/95 backdrop-blur z-10">
            <div className="flex items-center gap-3">
              <service.icon className="w-5 h-5 text-[#1E3A8A] shrink-0" />
              <h3 className="font-display text-lg sm:text-xl font-bold text-[#0B193F]">
                {service.title} Inquiry
              </h3>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
              className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <div
                    role="alert"
                    className="flex items-center gap-2.5 p-3.5 rounded-lg bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-900 text-xs sm:text-sm text-red-700 dark:text-red-300"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Full Name *
                    </label>
                    <input
                      required
                      type="text"
                      className="w-full min-h-[42px] bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-blue-500 outline-none"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Business Name
                    </label>
                    <input
                      type="text"
                      className="w-full min-h-[42px] bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-blue-500 outline-none"
                      placeholder="Company or organization"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Email *
                    </label>
                    <input
                      required
                      type="email"
                      className="w-full min-h-[42px] bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-blue-500 outline-none"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      WhatsApp Number
                    </label>
                    <input
                      type="tel"
                      className="w-full min-h-[42px] bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-blue-500 outline-none"
                      placeholder="+234 ..."
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    Project Description *
                  </label>
                  <textarea
                    required
                    rows={3}
                    className="w-full bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2.5 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] dark:focus:ring-blue-500 outline-none resize-none"
                    placeholder="Outline your project goals and requirements..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Budget
                    </label>
                    <div className="flex gap-2">
                      <select
                        className="bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-2.5 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] outline-none w-24"
                        value={formData.currency}
                        onChange={(e) => setFormData({ ...formData, currency: e.target.value })}
                      >
                        <option value="NGN">NGN</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="GBP">GBP</option>
                        <option value="CAD">CAD</option>
                        <option value="AUD">AUD</option>
                        <option value="GHS">GHS</option>
                        <option value="KES">KES</option>
                        <option value="ZAR">ZAR</option>
                      </select>
                      <input
                        required
                        type="number"
                        placeholder="Amount"
                        className="flex-1 min-h-[42px] bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                      Timeline
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="e.g. 4 weeks"
                      className="w-full min-h-[42px] bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-slate-700 dark:text-slate-300">
                    {service.fields.join(' / ')}
                  </label>
                  <input
                    type="text"
                    className="w-full min-h-[42px] bg-white dark:bg-[#060B18] border border-slate-300 dark:border-slate-700 rounded-lg px-3.5 py-2 text-sm text-slate-900 dark:text-white focus:ring-2 focus:ring-[#1E3A8A] outline-none"
                    value={formData.customField}
                    onChange={(e) => setFormData({ ...formData, customField: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full min-h-[46px] bg-[#1E3A8A] hover:bg-[#1E40AF] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors cursor-pointer"
                >
                  Prepare Inquiry
                </button>
              </form>
            ) : (
              <div className="space-y-6 py-4">
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-600 dark:text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-3 border border-emerald-200 dark:border-emerald-800">
                    <Check className="w-7 h-7" />
                  </div>
                  <h4 className="font-display text-xl font-bold text-slate-900 dark:text-white">
                    Ready to Send
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    Choose WhatsApp or Email below to send your structured inquiry.
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3 pt-2">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2.5 w-full min-h-[46px] bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </a>
                  <a
                    href={mailtoLink}
                    className="flex items-center justify-center gap-2.5 w-full min-h-[46px] bg-[#1E3A8A] hover:bg-[#1E40AF] text-white font-semibold py-3 rounded-lg transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Send via Email</span>
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="w-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white text-sm py-2 cursor-pointer"
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
