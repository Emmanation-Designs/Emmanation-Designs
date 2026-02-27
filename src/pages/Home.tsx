import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Layout from '@/components/Layout';

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
    </Layout>
  );
}
