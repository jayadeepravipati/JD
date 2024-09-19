import React from 'react';
import image from './images/logo.png';
import image1 from './images/new.png';
import image2 from './images/cal.png';
import image3 from './images/love.png';
import image4 from './images/home.png';
import image5 from './images/first.jpg';
import image6 from './images/second.jpg';
import image7 from './images/back.jpg';
import {Link } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import Slideshow from './Slideshow';
export default function  () {
  return (
   <>
   <div className="body">
   <nav className="top">
    <img src={image}></img>
    <div className="search">
   <input type="text" placeholder='search...' ></input>
   <button  type="submit"><i className="fa fa-search"></i></button>
   </div>
   <div className="top2">
   <Link to='LIKE'><i className="fa fa-heart"></i></Link>
   <Link to='CART'><i className="fa fa-shopping-cart"></i></Link>
   <Link to='PROFILE'><i className="fa fa-user-circle"></i></Link>
   </div>
   </nav>
   {/* .........dropdown options ........*/}
   <div className="list">
<div className="dropdown">
<Link to='HOME'><button className="dropbtn"><img src={image1}></img> NEW.</button></Link>
</div>
<div className="dropdown">
<button className="dropbtn"><img src={image2}></img> DAYS</button>
<div className="dropdown-option">
<a href="#">FATHERSDAY</a>
<a href="#">MOTHERSDAY</a>
<a href="#">LOVERSDAY</a>
<a href="#">BIRTHDAY</a>
</div>
</div>

<div className="dropdown">
<button className="dropbtn"><img src={image3}></img> LOVE</button>
<div className="dropdown-option">
<a href="#">BOYFRIEND</a>
<a href="#">GIRLFRIEND</a>
<a href="#">ANNIVERSARY</a>
</div>
</div>

<div className="dropdown">
<button className="dropbtn"> <img src={image4}></img> HOME</button>
<div className="dropdown-option">
<a href="#">KITCHEN</a>
<a href="#">BEDROOM</a>
<a href="#">HALL</a>
</div>
</div>
</div>
{/* .........fetchapi ........*/}
{/* <Slideshow></Slideshow> */}



   </div>
   </>
  )
}
