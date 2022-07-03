import { Routes, Route, Navigate } from 'react-router-dom';
import { About, Contacts } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/test" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element={<Navigate to="/contacts" replace />} />
    </Routes>
  );
};
