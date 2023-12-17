// import React from 'react'
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>
        <div className="header-content flex flex-c text-center text-white">
          <h2 className='header-title text-capitalize'>Explore your book of Choice</h2>
          <br />
          <p className='header-text fs-18 fw-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Inventore rerum ab nulla quidem hic, ex facilis officiis
            laborum explicabo illum recusandae deserunt culpa
            temporibus nisi nobis. Veritatis temporibus ad eligendi.
          </p>
        <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header
