import axios from "axios";

interface signinProps {
    name: string,
    password: number
}

export const signin = async (signinData: signinProps) => {
  try {
    const response = await axios.post(`https://logicar-api.onrender.com/users/signin`, signinData);

    return response.data; 
  } catch (error) {
    throw error; 
  }
};