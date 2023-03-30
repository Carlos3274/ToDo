import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardPage, LoginPage, RegisterPage } from 'src/modules';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<LoginPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="dashboard" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
