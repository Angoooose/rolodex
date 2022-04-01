export type Theme = 'light'|'dark';
export default interface ThemeData {
    theme: Theme|undefined,
    updateTheme: (newValue: Theme) => void,
    useSystemTheme: boolean|undefined,
    updateUseSystemTheme: (newValue: boolean) => void,
}