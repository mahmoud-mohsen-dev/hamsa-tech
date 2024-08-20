import ConfigAntThemes from '@/components/Theme/ConfigAntThemes';
import CategoriesSection from '@/components/home/CategoriesSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import HeroSection from '@/components/home/HeroSection';
import Partners from '@/components/home/Partners';

function Home() {
  return (
    <div className='h-full bg-white-light'>
      <HeroSection />
      <FeaturedSection />
      <Partners />
      <CategoriesSection />
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
