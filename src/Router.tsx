import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Join from './join/page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
