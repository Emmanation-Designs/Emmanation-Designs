import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, ZoomIn, ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 'ingenium',
    title: 'Ingenium Virtual Assistant',
    description: 'Custom site for a global VA company, featuring service showcases and client onboarding flows.',
    images: ['/portfolio/Ingenium1.png', '/portfolio/Ingenium2.png'],
    liveLink: 'https://ingeniumvirtualassistant.com',
    type: 'web'
  },
  {
    id: 'gibson',
    title: 'Gibson Collections',
    description: 'Full-featured e-commerce platform with cart functionality and payment integration.',
    images: ['/portfolio/Gibson1.png', '/portfolio/Gibson2.png'],
    liveLink: 'https://gibsoncollections.vercel.app',
    type: 'web'
  },
  {
    id: 'graphics',
    title: 'Graphic Design Highlights',
    description: 'Selected branding, posters, social media graphics, and UI concepts.',
    images: Array.from({ length: 5 }, (_, i) => `/portfolio/graphics/design${i + 1}.png`),
    liveLink: null,
    type: 'gallery'
  }
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-32 bg-slate-950 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Portfolio</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white">Selected Work</h2>
          </div>
          <p className="text-slate-400 max-w-md text-lg text-right md:text-left">
            A showcase of our recent digital solutions. We let our work speak for itself.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center cursor-pointer"
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-900 shadow-2xl shadow-black/50 group-hover:shadow-blue-900/20 transition-all duration-500">
                 {/* Placeholder for missing images */}
                 <div className="absolute inset-0 flex items-center justify-center text-slate-600 bg-slate-800">
                  {project.type === 'gallery' ? <ZoomIn className="w-12 h-12 opacity-50" /> : <ExternalLink className="w-12 h-12 opacity-50" />}
                </div>
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="space-y-6 p-4">
                <div className="flex items-center gap-4">
                  <span className="text-blue-500 font-mono text-xs tracking-widest uppercase py-1 px-3 rounded-full bg-blue-500/10 border border-blue-500/20">
                    {project.type === 'web' ? 'Web Development' : 'Design Gallery'}
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-white font-medium group-hover:translate-x-2 transition-transform">
                  View Case Study <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}

function ProjectModal({ project, onClose }: { project: typeof projects[0] | null, onClose: () => void }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-slate-950 border border-white/10 rounded-3xl w-full max-w-6xl max-h-[90vh] overflow-y-auto flex flex-col shadow-2xl"
        >
          <div className="p-6 border-b border-white/10 flex justify-between items-center bg-slate-950 sticky top-0 z-20">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
            <button onClick={onClose} className="text-slate-400 hover:text-white p-2 hover:bg-white/5 rounded-full transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-8 overflow-y-auto">
            <p className="text-slate-300 mb-12 text-xl max-w-3xl font-light leading-relaxed">{project.description}</p>

            {project.type === 'gallery' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {project.images.map((img, i) => (
                  <div key={i} className="aspect-[3/4] bg-slate-900 rounded-xl overflow-hidden border border-white/5 group">
                     <img
                      src={img}
                      alt={`Graphic ${i + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => {
                         (e.target as HTMLImageElement).src = `https://placehold.co/400x600/1e293b/ffffff?text=Design+${i+1}`;
                      }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className="space-y-12">
                <div className="grid grid-cols-1 gap-8">
                  {project.images.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                      <img
                        src={img}
                        alt={`${project.title} Preview ${i + 1}`}
                        className="w-full h-auto"
                        onError={(e) => {
                           (e.target as HTMLImageElement).src = `https://placehold.co/1600x900/1e293b/ffffff?text=Preview+${i+1}`;
                        }}
                      />
                    </div>
                  ))}
                </div>
                
                {project.liveLink && (
                  <div className="flex justify-center pt-8 pb-8">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 flex items-center gap-3 shadow-lg shadow-blue-900/40 text-lg"
                    >
                      Visit Live Site <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
