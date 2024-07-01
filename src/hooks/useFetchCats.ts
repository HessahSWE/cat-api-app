import { useEffect } from 'react';
import useCatStore from '../store/UseCatStore';


const useFetchCats = (limit: number) => {
  const fetchCats = useCatStore(state => state.fetchCats);
  const cats = useCatStore(state => state.cats);
  const error = useCatStore(state => state.error);
  const loading = useCatStore(state => state.loading);

  useEffect(() => {
    fetchCats(limit);
  }, [fetchCats, limit]);

  return { cats, error, loading };
};

export default useFetchCats;
