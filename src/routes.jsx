import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Category from './pages/Category';
import Shop from './pages/Shop';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/categories' element={<Category/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>

        
    </Routes>
  );
}

export default AppRoutes;