import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from './components/header/index';

import Home from './pages/Home';
import Catalog from './pages/Catalog.jsx';

import './index.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/catalog" element={<Catalog />}></Route>
      </Routes>
    </>
  );
}

export default App;
