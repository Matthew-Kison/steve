export type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme";

// 저장된 테마 가져오기
export function getStoredTheme(): Theme | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
}

// 테마 저장하기
export function setStoredTheme(theme: Theme): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme);
}

// 시스템 테마 가져오기 (사용자 OS 설정)
export function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

// HTML에 테마 적용하기
export function applyTheme(theme: Theme): void {
  const root = document.documentElement;
  if (theme === "dark") {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

// 초기 테마 결정: 저장된 테마 > 시스템 테마 > 기본값(dark)
export function getInitialTheme(): Theme {
  return getStoredTheme() ?? getSystemTheme() ?? "dark";
}
