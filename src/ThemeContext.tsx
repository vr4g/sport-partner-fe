// ThemeContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
    theme: 'light' | 'dark';
    toggleTheme: (currentTheme: string) => string;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => 'light',
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const toggleTheme = (currentTheme: string = "light") => {
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        return newTheme
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
