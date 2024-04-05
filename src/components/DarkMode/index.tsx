import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import App from "../../App";

interface ThemeContextProps {
    darkMode: boolean;
    toggleDarkMode: () => void;
    setDarkMode: (mode:boolean) => void;
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
        const handleStorageChange = (event: StorageEvent) => {
            if (event.key === 'darkMode') {
                setDarkMode(event.newValue === 'true');
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const themeContextValue: ThemeContextProps = {
        darkMode,
        toggleDarkMode,
        setDarkMode
    };

    return (
        <ThemeContext.Provider value={themeContextValue}>
            <App/>
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
