import axios from "axios";
import { useQuery } from '@tanstack/react-query';

const fetchDashboardData = async () => {
    try {
      const response = await axios.get('https://logicar-api.onrender.com/transaction', {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      return response.data; // Retorna apenas os dados da resposta
    } catch (error) {
      throw error; // Lança o erro para que ele possa ser tratado onde a função for chamada
    }
  };
  
  export const useDashboardData = () => {
  
    const { isPending, error, data } = useQuery({
        queryKey: ['dashboardData'],
        queryFn: () => fetchDashboardData()
      })
  
    return {
      data,
      error,
    };
  };