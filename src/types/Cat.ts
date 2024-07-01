export interface Cat {
  id: string;
  url: string;
  width: number;
  height: number;
  breeds: Array<object>;
}

export interface CatState {
  cats: Cat[];
  loading: boolean;
  error: string | null;
  fetchCats: (limit?: number) => Promise<void>;
}
