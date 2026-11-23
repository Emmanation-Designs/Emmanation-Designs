import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Layout from '@/components/Layout';
import { projectsData } from '@/data/projects';

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return (
      <Layout>
        <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Case Study Not Found
          </h1>
          <p className="text-slate-600 dark:text-slate-400">
            The project you requested could not be found. Return to Selected Work to explore our portfolio.
          </p>
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2447FF] text-white text-sm font-semibold hover:bg-[#0B193F] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work</span>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <article className="pt-28 md:pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto text-[#0B193F]">
        <div className="mb-8">
          <Link
            to="/#work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2447FF] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Work</span>
          </Link>
        </div>

        {/* Header */}
        <header className="max-w-4xl space-y-5 pb-12 border-b border-[#D5DBEC]">
          <p className="text-xs font-mono text-[#2447FF]">
            {project.category}
          </p>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0B193F] leading-tight text-balance">
            {project.title}
          </h1>
          <p className="text-lg text-[#4B5675] leading-relaxed">
            {project.shortDescription}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="ed-btn p"
              >
                <span>Visit Live Project</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              type="button"
              onClick={() => navigate('/#contact')}
              className="ed-btn o"
            >
              <span>Discuss a Similar Project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Objective & Solution Architecture */}
        <section className="py-12 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-200 dark:border-slate-800">
          <div className="md:col-span-6 space-y-3">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Business Problem &amp; Objective
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>
          <div className="md:col-span-6 space-y-3">
            <h2 className="font-display text-xl font-bold text-slate-900 dark:text-white">
              Solution Delivered
            </h2>
            <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Deliverables & Tech */}
        <section className="py-10 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-slate-200 dark:border-slate-800">
          <div className="md:col-span-7 space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Key Deliverables
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.deliverables.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-300"
                >
                  <Check className="w-4 h-4 text-[#1E3A8A] dark:text-blue-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5 space-y-4">
            <h2 className="font-display text-lg font-bold text-slate-900 dark:text-white">
              Capabilities &amp; Stack
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {project.technologies.join(' · ')}
            </p>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="pt-12 space-y-6">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
            Interface &amp; Visual Showcase
          </h2>

          {project.type === 'gallery' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxSrc(src)}
                  className="group rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 aspect-[4/3] text-left cursor-pointer"
                >
                  <img
                    src={src}
                    alt={`${project.title} sample ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.dataset.fallbackApplied !== 'true') {
                        target.dataset.fallbackApplied = 'true';
                        target.src = project.fallbackImage;
                      }
                    }}
                  />
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {project.images.map((src, idx) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setLightboxSrc(src)}
                  className="block w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 shadow-sm cursor-pointer text-left"
                >
                  <img
                    src={src}
                    alt={`${project.title} preview ${idx + 1}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.dataset.fallbackApplied !== 'true') {
                        target.dataset.fallbackApplied = 'true';
                        target.src = project.fallbackImage;
                      }
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </section>
      </article>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
            onClick={() => setLightboxSrc(null)}
          >
            <button
              type="button"
              onClick={() => setLightboxSrc(null)}
              aria-label="Close preview"
              className="absolute top-4 right-4 p-2.5 rounded-lg bg-slate-900 text-white border border-slate-700 hover:bg-slate-800 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={lightboxSrc}
              alt="Expanded project preview"
              referrerPolicy="no-referrer"
              className="max-w-full max-h-[88vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
              onError={(e) => {
                const target = e.currentTarget;
                if (target.dataset.fallbackApplied !== 'true') {
                  target.dataset.fallbackApplied = 'true';
                  target.src = project.fallbackImage;
                }
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
