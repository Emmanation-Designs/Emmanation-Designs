import { Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content: "Emmanation Designs transformed our digital presence completely. The attention to detail is unmatched.",
    image: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    id: 2,
    name: "David Chen",
    role: "Founder, ArtFlow",
    content: "Incredible creativity and technical expertise. They brought our complex vision to life effortlessly.",
    image: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    id: 3,
    name: "Amara Okeke",
    role: "Director, Global Ventures",
    content: "Professional, timely, and world-class quality. Highly recommended for any serious business.",
    image: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "Marketing Head, Nexus",
    content: "The UI/UX design exceeded our expectations. Our user engagement has doubled since the launch.",
    image: "https://randomuser.me/api/portraits/men/4.jpg"
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "CTO, InnovateX",
    content: "A seamless collaboration from start to finish. The team truly understands modern web standards.",
    image: "https://randomuser.me/api/portraits/women/5.jpg"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-blue-500 font-mono text-sm tracking-widest uppercase mb-4 block">Testimonials</span>
        <h2 className="text-3xl md:text-5xl font-bold text-white">What Clients Say</h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div 
          className="flex gap-8 px-4 w-max animate-marquee pause-on-hover"
        >
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="w-[350px] md:w-[450px] p-8 rounded-2xl bg-slate-900/50 border border-white/5 hover:border-blue-500/30 transition-colors backdrop-blur-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-blue-500/50 mb-6" />
                <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">"{testimonial.content}"</p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-white/10">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-white font-bold">{testimonial.name}</div>
                  <div className="text-slate-500 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
