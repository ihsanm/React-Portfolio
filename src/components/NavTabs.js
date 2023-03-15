import React from 'react';
import { NavLink } from 'react-router-dom';
import "../assets/styles.css";



function NavTabs() {
  return (
    // <ul className="nav nav-tabs">
    //   <li className="nav-item">
    //     <NavLink
    //       to="/"
          
    //     >
    //       <span className='text'>Home</span>
    //     </NavLink>
    //   </li>
    //   <li className="item">
    //     <NavLink
    //       to="about"
          
    //     >
    //       <span className='text'>About</span>
    //     </NavLink>
    //   </li>
    //   <li className="nav-item">
    //     <NavLink
    //       to="ProjectGallery"
          
    //     >
    //       <span className='text'>Project Gallery</span>
    //     </NavLink>
    //   </li>
    //   <li className="item">
    //     <NavLink
    //       to="contact"
    //       end
          
    //     >
    //       <span className='text'>Contact</span>
    //     </NavLink>
    //   </li>
      
    // </ul>

    <nav class="navbar navbar-expand-lg navbar-light nav-bg">
      
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">

      <li className='nav-item'>
        <NavLink to="/"
      className='nav-text'>
  <span>Home</span>
  </NavLink>
      </li>
      
      <li class="nav-item">
        <NavLink to="ProjectGallery"
        className='nav-text'>
        <span>Projects</span>
        </NavLink>
      </li>
      
      
      <li class="nav-item">
        <NavLink to="contact"
        className='nav-text'>
        <span>Contact</span>
        </NavLink>
      </li>
      
    </ul>
  </div>
</nav>
  );
}

export default NavTabs;
