import { createContext, useContext } from 'react';
import { ITheme } from 'shared/types';

interface IThemeContext {
  theme: ITheme;
  setTheme?: (theme: ITheme) => void;
}

const ThemContext = createContext<IThemeContext | null>(null);

const useTheme = () => {
  const context = useContext(ThemContext);
  if (!context) {
    throw new Error('Your component must be inside ThemeContext.');
  }
  return context;
};

export { ThemContext };
export default useTheme;
