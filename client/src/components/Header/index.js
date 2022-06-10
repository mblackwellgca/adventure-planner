import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Auth from "../../utils/auth";

const pages = ["dashboard", "meal-planning", "discussions"];
const settings = ["dashboard", "destinations", "meal-planning", "discussions"];

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-end",
    backgroundColor: "rgba(0, 0, 0, 0)",
  },
  link: {
    textDecoration: "none",
    fontSize: 22,
  },
}));

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const classes = useStyles();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className={classes.root}>
          {Auth.loggedIn() ? (
            <>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      sx={{ bgcolor: "secondary.main" }}
                      alt={Auth.getProfile().data.username}
                      src={Auth.getProfile().data.username}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  className="Menu"
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Link className={`homeProfile ${classes.link}`} to={`/`}>
                      Home
                    </Link>
                  </MenuItem>
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">
                        <Link className={classes.link} to={`/${setting}`}>
                          {setting}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                  <MenuItem onClick={handleCloseUserMenu}>
                    <div className={`btnLO ${classes.link}`} onClick={logout}>
                      Logout
                    </div>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          ) : (
            <>
              <Link className={classes.link} to="/login">
                Log in &nbsp;
              </Link>
              <Link
                style={{ textDecoration: "none" }}
                className={classes.link}
                to="/signup"
              >
                Sign up
              </Link>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
