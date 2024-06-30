import { useQuery } from 'react-query';
import axios from 'axios';

const useFetchCats = (limit: number) => {
  return useQuery(['cats', limit], async () => {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
    return data;
  });
};

export default useFetchCats;
