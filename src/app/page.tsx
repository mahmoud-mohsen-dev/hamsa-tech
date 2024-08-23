import ConfigAntThemes from '@/components/Theme/ConfigAntThemes';
import AboutUs from '@/components/home/AboutUs';
import Articles from '@/components/home/Articles';
import CategoriesSection from '@/components/home/CategoriesSection';
import ContactUs from '@/components/home/ContactUs';
import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import Partners from '@/components/home/Partners';

function Home() {
  return (
    <div className='h-full bg-white-light'>
      <HeroSection />
      <FeaturedSection />
      <CategoriesSection />
      <Partners />
      <AboutUs />
      <Articles />
      <ContactUs />
    </div>
  );
}

function HomePage() {
  return (
    <ConfigAntThemes>
      <Home />
    </ConfigAntThemes>
  );
}

export default HomePage;
