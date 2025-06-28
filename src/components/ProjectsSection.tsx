import ProjectCard from './ProjectCard';
import Python from '../assets/Python.png'
const ProjectsSection = () => {
  const projectsScript = [
    {
      title: "Scheduler Service",
      description: "Automação de serviços de agendamento com integração a APIs internas, permitindo a criação e gerenciamento de eventos de forma eficiente.",
      image: Python,
      technologies: ["Python", "API REST", "Power Automate"],
      githubUrl: "https://github.com/odevpablo/Script-Agendamento"
    },
    {
      title: "Debtors Calculation",
      description: "Sistema de cálculo de devedores com integração a bancos de dados, notificando aos gestores quantidade de devedores que tem em suas filiais.",
      image: Python,
      technologies: ["Python", "Google Cloud", "Power Automate"],
      githubUrl: "https://github.com/odevpablo/Script-Calculo-Usuarios-Inadimplentes"
    },
    {
      title: "Identificação de Serviços por latitude e longitude",
      description: "Automatize a identificação de serviços próximos utilizando BigQuery e cálculos geográficos precisos com a fórmula de Haversine, integrando dados em tempo real para otimizar decisões operacionais.",
      image: Python,
      technologies: ["Python", "Google Cloud", "Power Automate"],
      githubUrl: "https://github.com/odevpablo/Script-Haversine"
    }
  ],
  projects = [
    {
      title: "Template de Loja Virtual",
      description: "Um Template de Loja Virtual é um modelo pré-desenhado que serve como base estrutural e visual para a criação de lojas online. Ele fornece um layout e design prontos para uso, com elementos fundamentais já organizados.",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa24e2stztd1g72gvk23h.png",
      technologies: ["React", "Vite", "TypeScript", "n8n"],
      githubUrl: "https://github.com/odevpablo/Script-Haversine",
      liveUrl: "https://template-loja.netlify.app/"
    },
    {
      title: "Landing Page - Social Media",
      description: "Apresenta os projetos de um profissional é uma página web projetada para destacar o portfólio e as conquistas no campo de redes sociais de maneira atrativa e organizada. Seu objetivo é capturar a atenção de visitantes, demonstrar expertise e criar conexões com potenciais clientes ou empregadores.",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa24e2stztd1g72gvk23h.png",
      technologies: ["React", "Vite","TypeScript","n8n"],
      githubUrl: "https://github.com/odevpablo/Script-Haversine",
      liveUrl: "https://victorgabriel.netlify.app/"
    },
   {
      title: "Portfólio Pessoal",
      description: "Minha landing page é um espaço digital dedicado a apresentar meu trabalho, minha trajetória profissional e meus projetos mais impactantes. Criada com um design moderno e funcional, ela é estruturada para destacar minha expertise e facilitar a conexão com potenciais clientes e parceiros.",
      image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fa24e2stztd1g72gvk23h.png",
      technologies: ["React", "Vite","TypeScript","n8n"],
      githubUrl: "https://github.com/odevpablo/Script-Haversine"
    },
  ];

  return (
    <section id="Projetos" className="py-20 bg-[#222831]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#DFD0B8] mb-4">
            Meus Projetos
          </h2>
          <div className="w-24 h-1 bg-[#393E46] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Aqui estão alguns dos meus projetos recentes que mostram minhas habilidades.
          </p>
        </div>
         <h1 className="mt-10 text-2xl text-[#DFD0B8]">Front End</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 mt-5 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
        <h1 className=" mt-5 mb-5 text-2xl text-[#DFD0B8]">Scripts em Python</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsScript.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div> 
      </div>
    </section>
  );
};

export default ProjectsSection;