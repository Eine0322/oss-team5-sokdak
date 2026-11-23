import { BrowserRouter, Routes, Route } from 'react-router-dom';

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={null} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;