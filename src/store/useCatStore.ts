import create from 'zustand';
import fetchCats from '../services/api/CatAPI';
import { CatState } from '../types/CatState';

const useCatStore = create<CatState>((set) => ({
  cats: [],
  loading: false,
  error: null,
  fetchCats: async (limit = 10) => {
    set({ loading: true });
    try {
      const data = await fetchCats(limit);
      set({ cats: data, loading: false });
    } catch (error) {
      set({ error: 'Failed to fetch cats', loading: false });
    }
  },
}));

export default useCatStore;
