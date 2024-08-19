import ConfigAntThemes from '@/components/Theme/ConfigAntThemes';
import Categories from '@/components/home/Categories';
import HeroSection from '@/components/home/HeroSection';

function Home() {
  return (
    <div className='h-ful bg-[rgb(249, 249, 249)]l'>
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
