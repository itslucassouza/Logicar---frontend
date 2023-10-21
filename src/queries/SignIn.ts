import axios from "axios";
import { API_URL } from "../api/api";

interface signinProps {
    name: string,
    password: number
}

export const signin = async (signinData: signinProps) => {
    try {
        if (!API_URL) {
            throw new Error("A variável de ambiente VITE_API_URL não está definida.");
        }

        const response = await axios.post(`${API_URL}/users/signin`, signinData);

        return response.data; 
    } catch (error) {
        throw error; 
    }
};
