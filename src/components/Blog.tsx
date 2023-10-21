import { useNavigate } from "react-router-dom";

const Blog = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-full p-5 bg-[#0A0D14]">
      <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
        <p className="py-6 text-white">👋 Bem-vindo a Logicar</p>
        <blockquote className="border-l-4 text-white border-blue-500 italic my-8 pl-8 md:pl-12">
          Bem-vindo ao nosso aplicativo de Gerenciamento de Estacionamento! Estamos felizes por você escolher nossa plataforma para simplificar a sua experiência de estacionamento. Com nosso aplicativo, você terá o controle total do estacionamento nas pontas dos seus dedos. Aqui estão algumas informações importantes para você:
        </blockquote>
        <section className="flex flex-col md:flex-row gap-3">
          <button
            onClick={() => navigate('/cars')}
            className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mb-4 md:mb-0">
            Entrada de Novo Veículo
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Saída de Veículo
          </button>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="shadow-md p-3 bg-[#474A4F]">
            <p className="text-white">Vagas Disponíveis:</p>
          </div>
          <div className="shadow-md p-3 bg-[#474A4F]">
            <p className="text-white">Vagas Ocupadas:</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blog;
