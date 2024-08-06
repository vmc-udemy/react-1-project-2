import { Link, Outlet } from 'react-router-dom';

import CrownLogo from '../../assets/crown.svg';
import './navigation.styles.scss';

function Navigation() {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={CrownLogo} alt="logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;