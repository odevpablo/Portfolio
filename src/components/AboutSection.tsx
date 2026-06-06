import Profile from '../assets/profile.jpg'; // Adjust the path as necessary


const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#393E46] mb-4">
            Sobre Mim
          </h2>
          <div className="w-24 h-1 bg-[#393E46] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#393E46] mb-4">
              Transformo desafios técnicos em soluções escaláveis e eficientes
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Minha jornada na tecnologia consolidou-se através do curso de Análise e Desenvolvimento de Sistemas, potencializada por especializações contínuas em dados e automação avançada. Atuo de forma estratégica no desenvolvimento de software e na arquitetura de soluções digitais modernas.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Ao longo da minha trajetória, tenho focado na criação de APIs de alta performance, arquiteturas SaaS, bots de automação (RPA) e na integração de inteligência artificial. Minha abordagem une o desenvolvimento de sistemas à análise de dados para eliminar gargalos e impulsionar a eficiência operacional.
            </p>
            <div className="flex flex-wrap gap-3 mt-6">
              {['Python', '.NET', 'JavaScript', 'React', 'Next.js', 'PostgreSQL', 'BigQuery', 'n8n', 'Power Automate', 'Power BI'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-[#393E46] text-[#F8EEDF] rounded-full text-sm font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="w-80 h-80 mx-auto bg-[#393E46] rounded-full flex items-center justify-center">
              <div className="w-72 h-72 bg-white rounded-full flex items-center justify-center">
                  <img src={Profile} alt="Profile" className="w-full h-full rounded-full object-cover shadow-lg" /> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
