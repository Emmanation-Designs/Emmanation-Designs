import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppBubble from './WhatsAppBubble';
import BackgroundElements from './BackgroundElements';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-black text-slate-100 relative">
      <BackgroundElements />
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
      <WhatsAppBubble />
    </div>
  );
}
