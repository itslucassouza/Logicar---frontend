import axios from "axios";
import { useQuery } from '@tanstack/react-query';

const fetchCarsData = async () => {
    try {
      const response = await axios.get('https://logicar-api.onrender.com/car', {
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