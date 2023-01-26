// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="nav-container">
    <Link to="/" className="nav-link">
      <img
        className="web-logo"
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button className="hanberger-icon-button" type="button">
          {' '}
          <GiHamburgerMenu
            data-testid="hamburgerIconButton"
            className="hamberger-icon"
          />{' '}
        </button>
      }
    >
      {close => (
        <>
          <div className="popup-content">
            <button
              type="button"
              data-testid="closeButton"
              className="close-Icon"
              onClick={() => close()}
            >
              <IoMdClose />
            </button>
            <ul>
              <Link to="/" className="nav-link">
                <li className="item-container">
                  <AiFillHome />
                  <h1>Home</h1>
                </li>
              </Link>
              <Link to="/about" className="nav-link">
                <li className="item-container">
                  <BsInfoCircleFill />
                  <h1>About</h1>
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </Popup>
  </div>
)

export default Header
