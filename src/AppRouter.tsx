import { Navigate, Route, Routes } from 'react-router-dom';

import { About, Contacts } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<About />} path="/about" />
      <Route element={<Contacts />} path="/contacts" />
      <Route element={<Navigate replace to="/contacts" />} path="*" />
    </Routes>
  );
};
