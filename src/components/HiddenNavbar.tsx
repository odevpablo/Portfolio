
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const HiddenNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isVisible 
        ? 'translate-y-0 bg-white/80 backdrop-blur-md shadow-lg' 
        : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold  bg-clip-text ">
            ODEVPABLO
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Sobre mim
            </button>
            <button onClick={() => scrollToSection('Projetos')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Projetos
            </button>
            <button onClick={() => scrollToSection('Social')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Social
            </button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('SobreMim')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Sobre mim
              </button>
              <button onClick={() => scrollToSection('Projetos')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Projetos
              </button>
              <button onClick={() => scrollToSection('Social')} className="text-left text-gray-700 hover:text-purple-600 transition-colors">
                Social
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default HiddenNavbar;
