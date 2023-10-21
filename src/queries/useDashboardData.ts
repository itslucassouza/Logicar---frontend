import axios from "axios";
import { API_URL } from "../api/api";
import { useQuery } from '@tanstack/react-query';


const fetchDashboardData = async () => {
  try {
    const response = await axios.get(`${API_URL}/transaction`, {
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
  const { error, data } = useQuery({
    queryKey: ['dashboardData'],
    queryFn: () => fetchDashboardData()
  });

  return {
    data,
    error,
  };
};
