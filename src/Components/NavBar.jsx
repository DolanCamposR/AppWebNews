import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const Navbar = () => {
  const { user, toggleTheme } = useAppContext();

  return (
    <AppBar position="sticky" color="primary">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6" color="inherit">
          Bienvenido, {user.name}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button color="inherit" component={Link} to="/">
            Inicio
          </Button>
          <Button color="inherit" component={Link} to="/search">
            Buscar
          </Button>
          <Button color="inherit" component={Link} to="/settings">
            Configuración
          </Button>
          <Button color="inherit" component={Link} to="/favorites">
            Favoritos
          </Button>
          <IconButton color="inherit" onClick={toggleTheme}>
            {user.theme === "light" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
