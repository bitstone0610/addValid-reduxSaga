import React from 'react';
import { Logo } from '../../assets/icons';
import './style.css';

const Header = () => (
  <div className="header">
    <div className="header__logo">
      <img src={Logo} alt="logo" />
      <span>Campaigns</span>
    </div>
    <div>username</div>
  </div>
);

export default Header;
