import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import Frontend from '@/pages/Frontend';
import Backend from '@/pages/Backend';
import AISolutions from '@/pages/AISolutions';
import DigitalPlatforms from '@/pages/DigitalPlatforms';
import GraphicDesign from '@/pages/GraphicDesign';
import UIDesign from '@/pages/UIDesign';
import VideoEditing from '@/pages/VideoEditing';
import CaseStudy from '@/pages/CaseStudy';
import ScrollToTop from '@/components/ScrollToTop';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<CaseStudy />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/backend" element={<Backend />} />
        <Route path="/ai-solutions" element={<AISolutions />} />
        <Route path="/digital-platforms" element={<DigitalPlatforms />} />
        <Route path="/ui-design" element={<UIDesign />} />
        <Route path="/graphic-design" element={<GraphicDesign />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Router>
  );
}
