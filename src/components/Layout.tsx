import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollProgress from './ScrollProgress';
import { SvgSymbols } from './SvgSymbols';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <SvgSymbols />
      <ScrollProgress />
      <Navbar />
      <main id="top" className="ed-shell flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}
