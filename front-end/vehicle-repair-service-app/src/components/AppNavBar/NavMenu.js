import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useSelector } from "react-redux";
import LogoutButton from "../Auththentication/GoogleAuthButton/LogoutButton";

import PATHS from "../../config/webPath";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router";


const NavMenu = (props) => {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose } = props;

  const auth = useSelector(state => state.auth);

  // const history = useHistory();

  const onProfileClick = (e) => {
    // handleMenuClose(e);
    // history.push(PATHS.PROFILE)
  }

  return (
    <>
    {auth && (
      <LogoutButton 
      isMenuOpen={isMenuOpen} 
      handleMenuClose={handleMenuClose} 
      anchorEl={anchorEl}
      menuId={menuId}
    />
    )}
    {!auth && ( <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    > 
      <MenuItem onClick={onProfileClick}>Profile</MenuItem>
      <MenuItem component={Link} to={PATHS.USER_LOGIN} onClick={handleMenuClose}>Login</MenuItem> 
    </Menu>
    )}
  </>
  );
};

export default NavMenu;
