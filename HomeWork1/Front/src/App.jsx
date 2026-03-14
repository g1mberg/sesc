import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TurismoLayout from './containers/TurismoLayout';
import TurismoPage from './pages/TurismoPage';
import TourPage from './pages/TourPage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<TurismoLayout />}>
            <Route index element={<TurismoPage />} />
            <Route path="turismo/tour" element={<TourPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
