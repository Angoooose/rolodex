export type Theme = 'light'|'dark';
export default interface ThemeData {
    theme: Theme,
    updateTheme: (newValue: Theme) => void,
    useSystemTheme: boolean,
    updateUseSystemTheme: (newValue: boolean) => void,
}