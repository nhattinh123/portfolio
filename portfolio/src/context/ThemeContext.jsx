import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Lấy theme từ localStorage hoặc mặc định là 'light'
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") || "light"
  );

  // Hàm toggle để chuyển đổi theme giữa dark và light
  const toggleDarkMode = () => {
    setIsDarkMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Cập nhật class cho <html> và lưu vào localStorage
  useEffect(() => {
    const root = window.document.documentElement;

    if (isDarkMode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    localStorage.setItem("theme", isDarkMode);
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: isDarkMode === "dark",
        toggleDarkMode,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook để dễ sử dụng theme context
export const useTheme = () => useContext(ThemeContext);

export default ThemeProvider;
