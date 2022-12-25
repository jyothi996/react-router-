import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <navbar className="navbar">
    <div className="wave-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="wave-image"
      />
      <p className="wave">Wave</p>
    </div>
    <ul className="list-container">
      <li>
        <Link className="list-item" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="list-item" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="list-item" to="/contact">
          Contact
        </Link>{' '}
      </li>
    </ul>
  </navbar>
)
export default Header
