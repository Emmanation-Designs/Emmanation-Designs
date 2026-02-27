import { Link } from 'react-router-dom';
import { Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-blue-900/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-[0.9]">
              Let's build <br />
              <span className="text-slate-500">something epic.</span>
            </h2>
            <a 
              href="mailto:emmanationdesigns@gmail.com" 
              className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-blue-50 transition-all hover:scale-105"
            >
              <Mail className="w-5 h-5 group-hover:text-blue-600 transition-colors" />
              <span>Send us an email</span>
            </a>
          </div>

          <div className="flex flex-col justify-end items-start md:items-end">
            <div className="flex flex-col gap-4 text-left md:text-right">
              <a href="#hero" className="text-slate-400 hover:text-white transition-colors text-lg">Home</a>
              <a href="#services" className="text-slate-400 hover:text-white transition-colors text-lg">Services</a>
              <a href="#portfolio" className="text-slate-400 hover:text-white transition-colors text-lg">Work</a>
              <a href="#about" className="text-slate-400 hover:text-white transition-colors text-lg">About</a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-white/10">
          <div className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Emmanation Designs. All rights reserved.
          </div>

          <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-400">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <a 
              href="https://www.instagram.com/emmanation.designs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-2"
            >
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
