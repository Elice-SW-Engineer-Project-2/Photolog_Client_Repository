import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Test from './Pages/Test';
import Menu from './Pages/Menu';
import Spinner from './Pages/Home/Components/Spinner';
import Intro from './Pages/Home/Page';
import Map from './Pages/Map';
import Join from './Pages/Join/Page';
import Edit from './Pages/Edit/Page';
import MyPage from './Pages/MyPage';

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <Intro />
          </Suspense>
        }
      />
      <Route path="/menu" element={<Menu />} />
      <Route path="/map" element={<Map />} />
      <Route path="/join" element={<Join />} />
      <Route path="/edit" element={<Edit />} />
      <Route path="/mypage" element={<MyPage />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
