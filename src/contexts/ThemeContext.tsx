import { createContext, FunctionComponent } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import ThemeData, { Theme } from '../Types/ThemeData';

const ThemeContext = createContext<ThemeData>({
    theme: 'light',
    updateTheme: () => null,
    useSystemTheme: true,
    updateUseSystemTheme: () => null,
});

export default ThemeContext;
export const ThemeContextProvider: FunctionComponent = ({ children }) => {
    const [theme, updateTheme] = useLocalStorage<Theme>('theme', 'light');
    const [useSystemTheme, updateUseSystemTheme] = useLocalStorage<boolean>('useSystemTheme', true);

    return (
        <ThemeContext.Provider value={{
            theme,
            updateTheme,
            useSystemTheme,
            updateUseSystemTheme,
        }}>
            {children}
        </ThemeContext.Provider>
    );
}