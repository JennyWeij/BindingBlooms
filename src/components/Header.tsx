import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const navItems = ["Our Flowers", "Our Courses", "About Us"];

import logoImage from "../assets/Logotype.png";

function Header() {
  return (
    <AppBar
      component="nav"
      sx={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <img
            src={logoImage}
            alt="Logo"
            style={{ height: 120, marginRight: 16 }}
          />
        </Typography>
        {navItems.map((item) => (
          <Button key={item} sx={{ color: "#B38868" }}>
            {item}
          </Button>
        ))}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
