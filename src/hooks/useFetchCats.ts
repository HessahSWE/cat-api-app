import { useQuery } from 'react-query';
import axios from 'axios';
import { Cat } from '../types/Cat';

const useFetchCats = (limit: number) => {
  return useQuery<Cat[], Error>(['cats', limit], async () => {
    const { data } = await axios.get<Cat[]>(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
    return data;
  });
};

export default useFetchCats;
