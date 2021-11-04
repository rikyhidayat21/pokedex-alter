import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pokemon/:name" element={<DetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
