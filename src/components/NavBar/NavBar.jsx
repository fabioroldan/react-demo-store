import React, { Component } from 'react';
import logo from "../../logo.svg";
import closeIcon from "../../icons/close-icon.svg";
import menuIcon from "../../icons/menu-icon.svg";
import "./NavBar.css"
import CartWidget from '../CartWidget/CartWidget';

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
    console.log("blur");
  };

  render() {
    return (
      <nav className='navbar'>
        <img src={logo} className="navbar__logo" alt="logo" />
        <CartWidget />
        <button className="icon-btn menu-btn" onClick={this.handleClick} onBlur={this.handleBlur}>
          <img src={this.state.active ? closeIcon : menuIcon} alt="" />
        </button>
        <ul className={`navbar__menu ${this.state.active ? 'active' : ''}`} >
          <a className="navbar__link active" href="#home"> Home </a>
          <a className="navbar__link" href="#about-us"> About us </a>
          <a className="navbar__link" href="#store"> Store </a>
          <button className="navbar__btn"> Login </button>
        </ul>
      </nav>
    )
  };
}
export default NavBar;