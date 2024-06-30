import create from 'zustand';
import axios from 'axios';

interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Array<object>;
}

interface CatState {
  cats: Cat[];
  loading: boolean;
  error: string | null;
  fetchCats: (limit?: number) => Promise<void>;
}

const useStore = create<CatState>((set) => ({
  cats: [],
  loading: false,
  error: null,
  fetchCats: async (limit = 10) => {
    set({ loading: true });
    try {
      const response = await axios.get(`https://api.thecatapi.com/v1/images/search?limit=${limit}`);
      console.log(response);
      set({ cats: response.data, loading: false });
    } catch (error) {
      set({ error: 'www', loading: false });
    }
  },
}));

export default useStore;
