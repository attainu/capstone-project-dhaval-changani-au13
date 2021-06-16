import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

import PATHS from "../../config/webPath";
import { NavLink } from "react-router-dom";
// import { useHistory } from "react-router";
// import PATHS from "../../config/webPath";

const NavMenu = (props) => {
  const { anchorEl, menuId, isMenuOpen, handleMenuClose } = props;

  // const history = useHistory();

  const onProfileClick = (e) => {
    // handleMenuClose(e);
    // history.push(PATHS.PROFILE)
  }

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={onProfileClick}>Profile</MenuItem>
      <MenuItem component={NavLink} to={PATHS.USER_LOGIN} onClick={handleMenuClose}>Login</MenuItem>
    </Menu>
  );
};

export default NavMenu;
