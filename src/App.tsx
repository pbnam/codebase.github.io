import React, { useState } from 'react';
import AppRoute from './routes';
import { Provider } from 'react-redux';
import { store } from 'store';
import { ThemContext } from 'hooks/useTheme';
import { ITheme } from 'shared/types';
import { lightTheme } from 'untils/theme';

function App() {
  const [theme, setTheme] = useState<ITheme>(lightTheme);
  return (
    <ThemContext.Provider value={{ theme, setTheme }}>
      <Provider store={store}>
        <AppRoute />
      </Provider>
    </ThemContext.Provider>
  );
}

export default App;
