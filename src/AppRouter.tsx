import { Navigate, Route, Routes } from 'react-router-dom';

import { Contacts, Main } from './pages';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Main />} path="/cycd-test/main" />
      <Route element={<Contacts />} path="/cycd-test/contacts" />
      <Route element={<Navigate replace to="/cycd-test/main" />} path="*" />
    </Routes>
  );
};
