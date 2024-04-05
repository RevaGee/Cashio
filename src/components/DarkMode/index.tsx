import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [darkMode, setDarkMode] = useState<boolean>(() => {
        const storedDarkMode = localStorage.getItem('darkMode');
        return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    });

    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => {
            const newDarkMode = !prevDarkMode;
            localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
            return newDarkMode;
        });
    };

    useEffect(() => {
        document.body.classList.toggle('dark', darkMode);
    }, [darkMode]);

    const themeContextValue: ThemeContextProps = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextProps => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
