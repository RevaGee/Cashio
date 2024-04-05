import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void
    setDarkMode: (mode: boolean) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [darkMode, setDarkMode] = useState<boolean>(localStorage.getItem('darkMode') === 'true');

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
    };

    const themeContextValue: ThemeContextProps = {
        darkMode,
        toggleDarkMode,
        setDarkMode
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
