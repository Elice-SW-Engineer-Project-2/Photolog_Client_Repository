import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Intro from './Pages/Intro';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
