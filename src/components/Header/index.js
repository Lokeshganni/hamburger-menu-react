import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import './index.css'

const overlayStyle = {
  backgroundColor: '#fff',
}

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          data-testid="hamburgerIconButton"
          className="hamburg-btn"
          type="button"
          aria-label="Hamburg icon"
        >
          <GiHamburgerMenu className="hamburg-menu" />
        </button>
      }
      overlayStyle={overlayStyle}
      className="popup-content"
    >
      {close => (
        <div className="popup-open-container">
          <div className="close-icon-container">
            <button
              data-testid="closeButton"
              type="button"
              onClick={() => close()}
              aria-label="Close icon"
            >
              <IoMdClose />
            </button>
          </div>
          <div>
            <Link className="link-ele" to="/">
              <AiFillHome />
              <p>Home</p>
            </Link>
            <Link className="link-ele" to="/about">
              <BsInfoCircleFill />
              <p>About</p>
            </Link>
          </div>
        </div>
      )}
    </Popup>
  </div>
)
export default Header
