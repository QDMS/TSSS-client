import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles.scss'

const TopNav = () =>{
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  
  return (
    <div>
     <div className={click ? "main-container" : ""}  onClick={()=>Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <Link to="/" className="nav-logo">
            TismStudios, LLC
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                activeclassname="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                Register
              </Link>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
};

  export default TopNav;