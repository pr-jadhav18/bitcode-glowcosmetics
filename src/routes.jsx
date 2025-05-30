import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/Home';
import Category from './pages/Category';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Cart from './pages/Cart';
import ThankYou from './pages/ThankYou';
import Login from './pages/Login';
import Register from './pages/Register';

const AppRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/categories' element={<Category/>}></Route>
        <Route path='/shop' element={<Shop/>}></Route>
        <Route path='/aboutus' element={<AboutUs/>}></Route>
        <Route path='/contactus' element={<ContactUs/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/thankyou' element={<ThankYou/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>


        
    </Routes>
  );
}

export default AppRoutes;