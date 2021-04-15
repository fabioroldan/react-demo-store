import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from "../../logo.svg";
import closeIcon from "../../icons/close-icon.svg";
import menuIcon from "../../icons/menu-icon.svg";
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';
import OrdersWidget from '../OrdersWidget/OrdersWidget';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { active: false }
  }

  handleClick = () => {
    this.setState({ active: !this.state.active })
  };

  handleBlur = () => {
    this.setState({ active: false })
  };

  render() {
    return (
      <nav className='navbar'>
        <NavLink to={'/'}>
          <img src={logo} className="navbar__logo" alt="logo" />
        </NavLink>
        <CartWidget />
        <OrdersWidget />
        <button className="icon-btn menu-btn" onClick={this.handleClick} onBlur={this.handleBlur}>
          <img src={this.state.active ? closeIcon : menuIcon} alt="" />
        </button>
        <ul className={`navbar__menu ${this.state.active ? 'active' : ''}`} >
          <NavLink to={'/'} className="navbar__link " exact activeClassName="active" > Home </NavLink>
          <NavLink to={'/about-us'} className="navbar__link " exact> About us </NavLink>
          <NavLink to={'/store'} className="navbar__link " exact> Store </NavLink>
          <button className="navbar__btn"> Login </button>
        </ul>
      </nav>
    )
  };
}
export default NavBar;