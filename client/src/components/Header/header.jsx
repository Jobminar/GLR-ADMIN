import * as React from "react";
import "./header.css";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.jpeg";

const drawerWidth = 240;
const navItems = ["About us", "Courses", "Careers", "Contactus", "Blogs"];

function Navbar(props) {
  const navigate = useNavigate();
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6">
        <img
          src={logo}
          alt="chandra"
          style={{ width: "15%", height: "50px" }}
          onClick={() => navigate("/")}
        />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => navigate("/" + item)}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ height: "70px" }} className="app-bar-glass">
        <Toolbar
          sx={{
            display: "grid",
            gridTemplateColumns: "30% 40% 30%",
            alignItems: "center",
          }}
        >
          <div className="logo-section">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              // sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <img
                src={logo}
                alt="chandra"
                style={{ width: "60px", height: "70px" }}
                onClick={() => navigate("/")}
              />
            </Typography>
            <div className="logo-tittle">
              <h1>GLR-EDTECH</h1>
              <p>Modern & Innovative Learning</p>
            </div>
          </div>
          <div>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  key={item}
                  sx={{ color: "#353535" }}
                  onClick={() => navigate("/" + item)}
                >
                  {item}
                </Button>
              ))}
            </Box>
          </div>
          <div className="buttons">
            <button
              className="signin-button"
              onClick={() => {
                navigate("/signin");
              }}
            >
              Signin
            </button>
            <button className="help-button">Help</button>
          </div>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box
        component="main"
        sx={{
          marginLeft: "0%",
          marginRight: "0%",
        }}
      >
        <Toolbar />
      </Box>
      <div
        style={{
          width: "100%",
          height: "100%",
          marginTop: "6%",
          marginLeft: "0%",
          marginRight: "0%",
        }}
      >
        {props.children}
      </div>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
