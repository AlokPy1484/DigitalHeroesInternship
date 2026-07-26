import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import LogoLooper from './components/LogoLooper';
import PickMe from './components/PickMe';
import ServicesSection from './components/ServicesSection';
import ShowcaseGrid from './components/ShowcaseGrid';
import Testimonial from './components/Testimonial';
import ContactSection from './components/ContactSection';
import AnimatedNavbar from './components/AnimatedNavbar';
import PreviewVideo from './components/PreviewVideo';

export default function Home() {
  return (
    <div className="bg-neutral-950 ">
      <AnimatedNavbar />
      <HeroSection />
      <PreviewVideo />
      {/* <ShowcaseGrid /> */}
      <ServicesSection />
      <LogoLooper />
      <PickMe />
      {/* <Testimonial /> */}
      <ContactSection />
      <Footer />
    </div>
  );
}
