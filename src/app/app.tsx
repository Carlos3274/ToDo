import Router from 'src/routes/router';
import styled from 'styled-components';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Router />
    </StyledApp>
  );
}

export default App;
