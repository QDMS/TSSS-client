/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { useState } from "react";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const { auth } = useSelector((state) => ({
    ...state,
  }));

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={(e) => e.stopPropagation()}>
        <div className="nav-container">
          <Link to="/" className="nav-logo font-face-qs">
            TismStudios, LLC
          </Link>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/"
                activeclassname="active"
                className="nav-links font-face-qs"
                onClick={click ? handleClick : null}
              >
                Home
              </Link>
            </li>

            {auth !== null && (
              <li className="nav-item">
                <a
                  style={{ cursor: "pointer" }}
                  activeclassname="active"
                  className="nav-link logout text-white font-face-qs"
                  onClick={click ? handleClick : logout}
                >
                  Logout
                </a>
              </li>
            )}

            {auth === null && (
              <>
                <li className="nav-item">
                  <Link
                    to="/login"
                    activeclassname="active"
                    className="nav-links font-face-qs"
                    onClick={click ? handleClick : null}
                  >
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/register"
                    activeclassname="active"
                    className="nav-links font-face-qs"
                    onClick={click ? handleClick : null}
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TopNav;
