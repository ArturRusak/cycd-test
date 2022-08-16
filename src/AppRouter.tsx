import { Navigate, Route, Routes } from 'react-router-dom';

import { Contacts, Main } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Main />} path="/main" />
      <Route element={<Contacts />} path="/contacts" />
      <Route element={<Navigate replace to="/main" />} path="*" />
    </Routes>
  );
};
