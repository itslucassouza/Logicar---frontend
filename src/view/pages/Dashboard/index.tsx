import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDashboardData } from "../../../queries/useDashboardData";
import { ExitCarModal } from "./components/ExitCarModal";
import { useUser } from "../../../context/userContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const {data} = useDashboardData()
  const [isOpen, setIsOpen] = useState<any>(false);
  const { user } = useUser();

  useEffect(() => {
    if(user.loggedIn == false) {
      navigate('/')
    }
  }, [user])

  const handleUpdateShowModal = () => setIsOpen(!isOpen)

    return (
      <>
      <ExitCarModal open={isOpen} handleClose={handleUpdateShowModal} />
      <div className="w-full h-full p-5 bg-[#0A0D14] ">
        <div className="w-full px-4 m13 md:px-6 text-xl text-gray-800 leading-normal">
        <p className="py-6 text-white">
            👋 Bem-vindo a Logicar{" "}
          </p>
          <blockquote className="border-l-4 text-white border-blue-500 italic my-8 pl-8 md:pl-12">
          Bem-vindo ao nosso aplicativo de Gerenciamento de Estacionamento! Estamos felizes por você escolher nossa plataforma para simplificar a sua experiência de estacionamento. Com nosso aplicativo, você terá o controle total do estacionamento nas pontas dos seus dedos. Aqui estão algumas informações importantes para você:
          </blockquote>
          <section className="flex gap-3"> 
          <button 
          onClick={() => navigate('/cars')}
          className="bg-blue-500 mb-4 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Entrada de Novo Veículo
            </button>
          <button 
          onClick={handleUpdateShowModal}
          className="bg-blue-500 mb-4 hover:bg-blue-500 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
            Saída de Veículo
            </button>
          </section>
          <section className="flex gap-3  ">

          <div className="relative rounded-xl  bg-[#474A4F] flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl">
            <div className="p-6 bg-[#474A4F] text-white rounded-xl  bg-[#474A4F]">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#339AF0" aria-hidden="true" className="w-12 h-12 mb-4 text-pink-500">
            <path d="M10.293 15.293l-2.647-2.647a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l7-7a1 1 0 00-1.414-1.414l-6.293 6.293a1 1 0 01-1.414 0z"/>
          </svg>

              <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Vagas Disponíveis
              </h5>
            <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {data?.availableVancacies}

              </h5>
            </div>
          
          </div>
          <div className="relative  flex flex-col mt-6 text-gray-700 bg-white shadow-md w-96 rounded-xl bg-clip-border">
          <div className="p-6 rounded-xl  text-white  bg-[#474A4F]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF0000" aria-hidden="true" className="w-12 h-12 mb-4 text-pink-500">
  <path d="M13.414 12l5.293-5.293a1 1 0 10-1.414-1.414L12 10.586 6.707 5.293a1 1 0 00-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 001.414 1.414L12 13.414l5.293 5.293a1 1 0 001.414-1.414L13.414 12z"/>
</svg>

                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  Vagas Ocupadas
                  </h5>
                  <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                  {data?.ativeCars?.length}
                  </h5>
                </div>
          </div>
       
          </section>
        </div>
      </div>
      </>

    );
  };
  
  export default Dashboard;
  