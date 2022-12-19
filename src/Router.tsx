import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Join from './join/page';
import Edit from './edit/page';
import MyPage from './mypage/page';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/join" element={<Join />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
