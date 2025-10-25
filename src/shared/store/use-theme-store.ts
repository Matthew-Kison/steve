import { create } from "zustand";
import { type Theme, getInitialTheme, setStoredTheme, applyTheme } from "@shared/lib/theme";

type ThemeStore = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>((set, get) => ({
  theme: getInitialTheme(),

  setTheme: (theme: Theme) => {
    applyTheme(theme);
    setStoredTheme(theme);
    set({ theme });
  },

  toggleTheme: () => {
    const currentTheme = get().theme;
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    get().setTheme(newTheme);
  },
}));

// 초기화: 앱 시작 시 저장된 테마 적용
if (typeof window !== "undefined") {
  applyTheme(useThemeStore.getState().theme);
}
