import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginPage, RegisterPage } from 'src/modules';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
