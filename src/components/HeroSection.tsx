
const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-50 via-white to-pink-50">
      <div className="absolute bg-[#222831] inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#DFD0B8] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#393E46] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-[#948979] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-gray mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-[#DFD0B8 ] to-[#273F4F] bg-clip-text text-transparent">
            ODEVPABLO
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-fade-in-delay">
          Análista e desenvolvedor de sistemas
        </p>
        <button
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#393E46] text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-in-delay-2"
        >
          Veja meu trabalho
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
