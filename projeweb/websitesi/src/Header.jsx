import React from 'react'
import './css/Header.css';
import Logo from './images/Logo.jpg'

function Header() {
  return (
   <div className='header'>  <ul>
    <div className='leftside'> 
      <img src={Logo}alt="Salon Logo"></img> 
      </div>
    <div><li><a href="#">Anasayfa</a></li>
   <li><a href="#">Eğitimler</a></li>
   <li><a href="#">Kayıt Ol</a></li>
   <li><a href="#">Blog</a></li>
   <li><a href="#">İletişim</a></li></div>
   
  
 </ul> 

 </div>
   )
}
export default Header