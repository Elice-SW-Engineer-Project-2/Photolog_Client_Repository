import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Intro from './Pages/Intro';
import Spinner from './Pages/Spinner';

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
      <Route path="/map" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
