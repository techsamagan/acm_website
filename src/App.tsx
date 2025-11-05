import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Members } from './components/Members';
import { NewsEvents } from './components/NewsEvents';
import { JoinUs } from './components/JoinUs';
import { Footer } from './components/Footer';
import { ScrollProgress, BackToTop } from './components/ScrollProgress';
import './styles/globals.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      <Header />
      <Hero />
      <About />
      <Members />
      <NewsEvents />
      <JoinUs />
      <Footer />
      <BackToTop />
    </div>
  );
}
