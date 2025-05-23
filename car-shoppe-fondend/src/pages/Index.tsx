
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedCars from '@/components/home/FeaturedCars';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';
import BrandSlider from '@/components/home/BrandSlider';
import ContactCTA from '@/components/home/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <FeaturedCars />
        <BrandSlider />
        <Services />
        <Testimonials />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
