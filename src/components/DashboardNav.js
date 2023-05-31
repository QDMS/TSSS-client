import { Link } from "react-router-dom";

const DashboardNav = () => {
  const active = window.location.pathname;
  // console.log(active);
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item font-face-qs" >
        <Link
          className={`nav-link ${active === "/dashboard" && "active"}`}
          to="/dashboard"
        >
          Your Service Bookings
        </Link>
      </li>
      <li className="nav-item font-face-qs">
        <Link
        className={`nav-link ${active === "/dashboard/servicer" && "active"}`} 
        to="/dashboard/servicer">
          Your Services
        </Link>
      </li>
    </ul>
  );
};

export default DashboardNav;
