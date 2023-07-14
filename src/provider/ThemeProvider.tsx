import { Theme, ThemeContext } from "../context/ThemeContext";
import { useState } from "react";
import { storage } from "../storage/Storage";

 interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  const [theme, setTheme] = useState(storage.getItem('theme') || Theme.LIGHT);

  const changeTheme = (theme: Theme) => {
    storage.setItem('theme', theme)
    setTheme(theme);
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        changeTheme,
      }}
      {...props}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
