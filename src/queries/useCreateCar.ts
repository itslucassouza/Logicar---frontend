import axios from "axios";
import { API_URL } from "../api/api";

interface createCarProps {
    conductorName: string
    color: string
    plate: string
    parkingId: string
}

export const createCar = async (newCarData: createCarProps) => {
  try {
    if (!API_URL) {
      throw new Error("A variável de ambiente VITE_API_URL não está definida.");
    }

    const response = await axios.post(`${API_URL}/car`, newCarData);

    return response.data; // Retorna apenas os dados da resposta
  } catch (error) {
    throw error; // Lança o erro para que ele possa ser tratado onde a função for chamada
  }
};
