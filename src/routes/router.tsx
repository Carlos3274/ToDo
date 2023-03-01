import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage } from 'src/pages';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
