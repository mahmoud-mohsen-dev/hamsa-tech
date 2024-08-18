import ConfigAntThemes from '@/components/Theme/ConfigAntThemes';
import HeroSection from '@/components/UI/HeroSection';

function Home() {
  return (
    <div className='h-full'>
      <HeroSection />
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
