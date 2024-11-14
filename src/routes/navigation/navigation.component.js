import { Link, Outlet } from 'react-router-dom';

import CrownLogo from '../../assets/crown.svg';
import { useUserContext } from '../../contexts/user.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import './navigation.styles.scss';

function Navigation() {
  const { currentUser } = useUserContext();

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
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
