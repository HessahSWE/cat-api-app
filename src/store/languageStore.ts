// src/store/languageStore.ts
import create from "zustand";

interface LanguageState {
  language: string;
  direction: "ltr" | "rtl";
  setLanguage: (language: string, direction: "ltr" | "rtl") => void;
}

export const useLanguageStore = create<LanguageState>((set) => ({
  language: "en",
  direction: "ltr",
  setLanguage: (language, direction) => set({ language, direction }),
}));
