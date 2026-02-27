import { motion } from 'motion/react';
import { MessageSquare, UserCheck, Zap, Globe } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Submit Request",
    description: "Submit your project details via our service form.",
    icon: MessageSquare
  },
  {
    id: 2,
    title: "Expert Matching",
    description: "We review and match you with the ideal specialist from our expert network.",
    icon: UserCheck
  },
  {
    id: 3,
    title: "Precision Execution",
    description: "Your project is handled with precision and delivered efficiently.",
    icon: Zap
  },
  {
    id: 4,
    title: "Global Availability",
    description: "Our professionals are always active and ready to receive new orders globally.",
    icon: Globe
  }
];

export default function Process() {
  return (
    <section id="process" className="py-32 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Workflow</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">How We Work</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A streamlined process to bring your vision to life.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-transparent via-blue-500/50 to-transparent hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-slate-400 leading-relaxed max-w-sm">{step.description}</p>
                  </div>
                </div>

                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 text-center bg-slate-900/50 rounded-3xl p-8 border border-white/5 backdrop-blur-sm max-w-3xl mx-auto"
        >
          <p className="text-slate-300 font-medium text-lg">
            Core working hours for fastest response: <span className="text-blue-400 font-bold block md:inline mt-2 md:mt-0 md:ml-2">10:00–18:00 WAT (UTC+1)</span>
          </p>
          <p className="text-slate-500 text-sm mt-4">Inquiries welcome anytime — we reply as quickly as possible.</p>
        </motion.div>
      </div>
    </section>
  );
}
