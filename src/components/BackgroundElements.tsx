import { motion } from 'motion/react';
import { Code, Figma, Database, Cpu, Globe, Layers, Zap, Smartphone } from 'lucide-react';

const icons = [
  { Icon: Code, color: '#60a5fa', delay: 0, x: '10%', y: '20%' },
  { Icon: Figma, color: '#f472b6', delay: 2, x: '80%', y: '15%' },
  { Icon: Database, color: '#34d399', delay: 4, x: '20%', y: '80%' },
  { Icon: Cpu, color: '#fbbf24', delay: 1, x: '70%', y: '60%' },
  { Icon: Globe, color: '#818cf8', delay: 3, x: '50%', y: '40%' },
  { Icon: Layers, color: '#a78bfa', delay: 5, x: '15%', y: '50%' },
  { Icon: Zap, color: '#fb7185', delay: 2.5, x: '85%', y: '85%' },
  { Icon: Smartphone, color: '#22d3ee', delay: 1.5, x: '40%', y: '10%' },
];

export default function BackgroundElements() {
  return (
    <div className="fixed inset-0 z-20 pointer-events-none overflow-hidden">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute opacity-[0.07]"
          initial={{ x: item.x, y: item.y, scale: 0.5 }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 10, -10, 0],
            scale: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
          style={{ left: item.x, top: item.y }}
        >
          <item.Icon size={64} color={item.color} />
        </motion.div>
      ))}
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 bg-blue-500/30 rounded-full"
          initial={{
            x: Math.random() * 100 + "%",
            y: Math.random() * 100 + "%",
            opacity: 0,
          }}
          animate={{
            y: [0, -100],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 10,
          }}
        />
      ))}
    </div>
  );
}
