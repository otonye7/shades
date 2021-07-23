import { HeaderContainer } from './header.styles';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import VoicemailIcon from '@material-ui/icons/Voicemail';
import Modal from '../modal/modal.component';
import PersonIcon from '@material-ui/icons/Person';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Header = ({ ItemCount }) => {

  const history = useHistory()

  const [click, setClick] = useState(false);

  let user = window.localStorage.getItem('auth');
  // let userObj = JSON.parse(user);
  // let person = userObj.user
  // console.log(person)


  const handleClick = () => setClick(!click);
  const { cart } = useSelector((state) => ({ ...state }));

  const itemCount = () => {
    return cart.cartItems.reduce((accumulatedQuantity, cartItems) => accumulatedQuantity + cartItems.quantity, 0)
  }

  const logout = () => {
    window.localStorage.removeItem('auth')
    setTimeout(() => {
      window.location.reload()
    }, 1000)
    history.push('/login')
  }

  return (
    <HeaderContainer>
      <nav className="navbar">
        <div className='logo'>
          <VoicemailIcon className='voice' />
          <Link to='/' className='logo-text'>S0H0QUEST</Link>
        </div>

        <div className="nav-icon" onClick={handleClick}>
          {
            click ? <CloseIcon /> : <MenuIcon />
          }
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              exact
              to="/sun-glasses"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Sunglasses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/sports"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Sports
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/blue-lights"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Bluelight
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/accessories"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Accessories
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/sales"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              SALES
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/learn-mmore"
              activeClassName="active"
              className="nav-links"
              onClick={handleClick}
            >
              Learn More
            </NavLink>
          </li>
        </ul>
        {
          user ?
            <Link>
              <HowToRegIcon onClick={logout} className='icons' />
            </Link>
            :
            <Link to='/login'>
              <PersonIcon className='icons' />
            </Link>
        }

        <div >
          <Modal className='g-icons' />
          <span className='span'>{itemCount()}</span>
        </div>

      </nav>
      <div className='border-bottom'></div>
    </HeaderContainer>

  )
}


export default Header;