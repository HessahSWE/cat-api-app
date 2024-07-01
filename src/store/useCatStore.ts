import create from 'zustand';
import axios from 'axios';
import { CatState } from '../types/Cat';

const useCatStore = create<CatState>((set) => ({
  cats: [],
  loading: false,
  error: null,
  fetchCats: async (limit = 10) => {
    set({ loading: true });
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
      set({ cats: response.data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch cats', loading: false });
    }
  },
}));

export default useCatStore;
