import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, ArrowRight, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import ServiceModal from '@/components/ServiceModal';
import { servicesData } from '@/data/services';
import caseGraphicsFallback from '@/assets/images/case_graphics_preview_1795376703151.jpg';

export default function GraphicDesign() {
  const service = servicesData.find((s) => s.id === 'graphic')!;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const graphicCount = 10;
  const graphics = Array.from(
    { length: graphicCount },
    (_, i) => `/portfolio/graphics/design${i + 1}.png`
  );

  const benefits = [
    'Brand Identity & Logo Design',
    'Marketing Materials & Print Design',
    'Social Media Campaign Graphics',
    'Packaging & Merchandise Design',
    'Typography & Visual Systems',
    'High-Resolution Vector Assets',
  ];

  return (
    <Layout>
      <div className="pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-[#1E3A8A] dark:text-blue-400 hover:underline mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          className="pb-14 border-b border-slate-200 dark:border-slate-800"
        >
          <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 flex items-center justify-center text-[#1E3A8A] dark:text-blue-400 mb-6">
            <service.icon className="w-6 h-6" />
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-bold text-slate-900 dark:text-white mb-5">
            Graphic Design
          </h1>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl mb-8 leading-relaxed">
            We provide cohesive branding, visual systems, and marketing materials that communicate your value clearly. From brand identities to digital campaign assets and print collateral, every visual is designed for consistency and lasting brand recognition.
          </p>
          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#1E3A8A] hover:bg-[#1E40AF] dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-semibold text-base transition-colors cursor-pointer"
          >
            <span>Start This Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <section className="py-14 border-b border-slate-200 dark:border-slate-800">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            What We Deliver
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 p-6 rounded-xl bg-white dark:bg-[#0C1324] border border-slate-200 dark:border-slate-800"
              >
                <CheckCircle2 className="w-5 h-5 text-[#1E3A8A] dark:text-blue-400 shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-medium">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="pt-14">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-8">
            Featured Designs
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {graphics.map((src, index) => (
              <button
                key={src}
                type="button"
                className="block w-full relative rounded-xl overflow-hidden cursor-pointer group break-inside-avoid border border-slate-200 dark:border-slate-800 bg-white dark:bg-[#0C1324]"
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  alt={`Graphic Design ${index + 1}`}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.dataset.fallbackApplied !== 'true') {
                      target.dataset.fallbackApplied = 'true';
                      target.src = caseGraphicsFallback;
                    }
                  }}
                />
              </button>
            ))}
          </div>
        </section>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              aria-label="Close image preview"
              className="absolute top-4 right-4 md:top-6 md:right-6 z-[110] p-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-lg border border-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <motion.img
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              src={selectedImage}
              alt="Selected Design"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.dataset.fallbackApplied !== 'true') {
                  target.dataset.fallbackApplied = 'true';
                  target.src = caseGraphicsFallback;
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <ServiceModal
        service={isModalOpen ? service : null}
        onClose={() => setIsModalOpen(false)}
      />
    </Layout>
  );
}
