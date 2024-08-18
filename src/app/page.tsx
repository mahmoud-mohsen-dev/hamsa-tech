import ConfigAntThemes from '@/components/Theme/ConfigAntThemes';
import Categories from '@/components/home/Categories';
import HeroSection from '@/components/home/HeroSection';

function Home() {
  return (
    <div className='h-full'>
      <HeroSection />
      <Categories />
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
