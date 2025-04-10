import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import AppRoutes from './routes';
import Footer from './components/Footer';
import Header from './components/Header';
import ProductCard from './pages/ProductCard';
 import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <Header />
        <AppRoutes/>
      <Footer/>
    </>
  );
}

export default App;
