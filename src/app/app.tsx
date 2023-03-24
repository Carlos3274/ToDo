import Router from 'src/routes/router';
import GlobalStyle from 'src/styles/global-style';

import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
