import axios from "axios";
import { API_URL } from "../api/api";

interface createCarProps {
    plate: string;
}

export const updateTransaction = async (newCarData: createCarProps) => {
    try {
        if (!API_URL) {
            throw new Error("A variável de ambiente VITE_API_URL não está definida.");
        }

        const response = await axios.put(`${API_URL}/car/update-car/${newCarData}`);

        return response.data; // Retorna apenas os dados da resposta
    } catch (error) {
        throw error; // Lança o erro para que ele possa ser tratado onde a função for chamada
    }
};