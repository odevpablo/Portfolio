import { Github, Linkedin, Instagram } from 'lucide-react';

const SocialSection = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/odevpablo',
      color: 'hover:text-gray-900',
      description: 'Meus projetos e contribuições'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/odevpablo/',
      color: 'hover:text-blue-600',
      description: 'Conecte-se comigo profissionalmente'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/odevpablo?utm_source=ig_web_button_share_sheet&igsh=MW1uYXhwd2YxMGhrYw==',
      color: 'hover:text-pink-600',
      description: 'Acompanhe meu dia a dia e projetos'
    }
  ];

  return (
    <section id="Social" className="py-20 bg-[#34495E] to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Vamos nos conectar!
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-6"></div>
  
        </div>
        <div className="flex justify-center mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
                  <social.icon size={48} className={`mx-auto mb-4 text-white ${social.color} transition-colors duration-300`} />
                  <h3 className="text-lg font-semibold mb-2">{social.name}</h3>
                  <p className="text-gray-300 text-sm">{social.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialSection;