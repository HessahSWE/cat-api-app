import axios from 'axios';
import { Cat } from '../../types/Cat';
import { ENDPOINTS } from '../Endpoints';


const fetchCats = async (limit: number): Promise<Cat[]> => {
  const { data } = await axios.get<Cat[]>(`${ENDPOINTS.FETCH_CATS}?limit=${limit}`);
  return data;
};

export default fetchCats;
