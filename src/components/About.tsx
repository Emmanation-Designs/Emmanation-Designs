import { motion } from 'motion/react';
import { Instagram, Users, Award } from 'lucide-react';

const stats = [
  { label: 'Projects Delivered', value: '120+', icon: Award },
  { label: 'Expert Team', value: '15+', icon: Users },
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-6 block">About Us</span>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight leading-tight">
              Crafting Digital <br />
              <span className="text-slate-500">Excellence.</span>
            </h2>
            <p className="text-xl text-slate-300 leading-relaxed mb-8 font-light">
              At <span className="font-semibold text-white">Emmanation Designs</span>, we don't just build websites; we engineer digital ecosystems. Our mission is to bridge the gap between imagination and reality through code and design.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-10 font-light">
              We operate globally, delivering bespoke solutions that empower brands to scale. From intricate backend architectures to stunning frontend interfaces, our work is defined by precision, performance, and passion.
            </p>
            
            <a
              href="https://www.instagram.com/emmanation.designs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all group"
            >
              <Instagram className="w-5 h-5 text-pink-500 group-hover:scale-110 transition-transform" />
              <span className="text-white font-medium">Follow our journey</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Founder Card */}
            <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-black border border-blue-500/20 hover:border-blue-500/40 transition-all backdrop-blur-sm flex items-center gap-6 shadow-2xl shadow-blue-900/10">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30 flex-shrink-0">
                <img src="/founder.jpeg" alt="Emmanuel Nwaije Ikemefuna" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-blue-400 text-xs font-mono uppercase tracking-widest mb-1">Founder</div>
                <div className="text-2xl font-bold text-white mb-1">Emmanuel Nwaije Ikemefuna</div>
                <div className="text-slate-400 text-sm">Visionary & Lead Developer</div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-colors backdrop-blur-sm flex flex-col justify-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-4">
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
