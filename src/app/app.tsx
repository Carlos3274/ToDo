import Router from 'src/routes/router';
import GlobalStyle from 'src/styles/global-style';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { theme } from 'src/styles/theme';
import { ThemeProvider } from 'styled-components';

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ToastContainer />
      <Router />
    </ThemeProvider>
  );
}

export default App;
