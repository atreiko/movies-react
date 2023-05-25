import React from 'react'
import { Link } from 'react-router-dom'

import bg from '../../assets/footer-bg.jpeg'
import logo from '../../assets/tmovie.png'

import './footer.scss'

const Footer = () => {
  return (
    <div className='footer' style={{background: `url(${bg})`}}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt='logo' />
            <Link to='/'>tMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to='/'>Home</Link>
            <Link to='/'>Contact us</Link>
            <Link to='/'>Term of services</Link>
            <Link to='/'>About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to='/'>Love</Link>
            <Link to='/'>FAQ</Link>
            <Link to='/'>Premium</Link>
            <Link to='/'>Privacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to='/'>You must watch</Link>
            <Link to='/'>Recent release</Link>
            <Link to='/'>Top IMDB</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer