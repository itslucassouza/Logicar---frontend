import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../api/api";

const fetchCarsData = async () => {
  try {
    if (!API_URL) {
      throw new Error("A variável de ambiente VITE_API_URL não está definida.");
    }

    const response = await axios.get(`${API_URL}/car`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data; // Retorna apenas os dados da resposta
  } catch (error) {
    throw error; // Lança o erro para que ele possa ser tratado onde a função for chamada
  }
};

export const useCarsData = () => {
  const { error, data } = useQuery({
    queryKey: ['carData'],
    queryFn: () => fetchCarsData()
  })

  return {
    data,
    error,
  };
};
