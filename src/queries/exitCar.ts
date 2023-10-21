import axios from "axios";
import { useMutation, UseMutationOptions } from '@tanstack/react-query';

interface createCarProps {
    plate: string
}

export const updateTransaction = async (newCarData: createCarProps) => {
  try {
    const response = await axios.put(`https://logicar-api.onrender.com/car/update-car/${newCarData}`);

    return response.data; // Retorna apenas os dados da resposta
  } catch (error) {
    throw error; // Lança o erro para que ele possa ser tratado onde a função for chamada
  }
};

// export const useCreateCar = () => {
//     const createCarMutation = useMutation((newCarData: Promise<createCarProps>) => createCar(newCarData)) as UseMutationOptions;

//   return createCarMutation;
// };