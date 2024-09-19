import  './App.css'
import React from 'react';
import Topbar from './components/Topbar';
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Liked from './components/Liked';
import Cart from './components/Cart';
import Profile from './components/Profile';
import Products from './components/Products';
import Slideshow from './components/Slideshow';
import One from './components/One';


 function App() {
  return (
    <>

    <BrowserRouter>
    <div classname='container'>
    <div classname='row'>
     <Topbar></Topbar>
     {/* <Products></Products> */}
  <Routes>
         

         <Route path="/" element={<Navigate to="/HOME" />}></Route>
         <Route path="/HOME" element={<One/>}></Route>
         <Route path="/LIKE" element={<Liked/>}></Route>
         <Route path="/CART" element={<Cart/>}></Route>
         <Route path="/PROFILE" element={<Profile/>}></Route>
  </Routes>
  </div>
  </div>
  </BrowserRouter>
    </>
  );
}

export default App;
