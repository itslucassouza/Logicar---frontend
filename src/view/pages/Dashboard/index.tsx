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
            <div className="shadow-md flex-1 p-3 bg-[#474A4F]">
                <p className="text-white">
                Vagas Disponíveis: {data?.availableVancacies}
                </p>
            </div>
            <div className="shadow-md flex-1 p-3 bg-[#474A4F]">
                <p className="text-white">
                Vagas Ocupadas: {data?.ativeCars?.length}
                </p>
            </div>
          </section>
        </div>
      </div>
      </>

    );
  };
  
  export default Dashboard;
  