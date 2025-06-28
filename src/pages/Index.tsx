
import HiddenNavbar from '../components/HiddenNavbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SocialSection from '../components/SocialSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <HiddenNavbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SocialSection />
    </div>
  );
};

export default Index;
