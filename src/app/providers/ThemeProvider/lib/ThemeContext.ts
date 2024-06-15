import { createContext } from 'react';

export enum Theme {
    LIGHT = 'light',
    DARK = 'dark'
}

export interface IThemeContext {
    setTheme?: (theme: Theme) => void;
    theme?: Theme
}

export const ThemeContext = createContext<IThemeContext>({});

export const LOCAL_STORAGE_THEME_KEY = 'theme';
