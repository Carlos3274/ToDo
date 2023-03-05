import Router from 'src/routes/router';
import { theme } from 'src/styles/Theme';

import { ThemeProvider } from 'styled-components';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
}

export default App;
