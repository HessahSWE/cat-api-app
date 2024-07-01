import { Cat } from "./Cat";

export interface CatState {
  cats: Cat[];
  loading: boolean;
  error: string | null;
  fetchCats: (limit?: number) => Promise<void>;
}
