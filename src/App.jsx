import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { AppBar, Toolbar, Typography, Container, Paper } from "@mui/material";
import Navbar from "./Components/NavBar";
import NewsPage from "./pages/NewsPage";
import SearchPage from "./pages/SearchPage";
import SettingsPage from "./pages/SettingsPage";
import FavoritesPage from "./pages/FavoritesPage";

function App() {
  return (
    <AppProvider>
      <Router>
        {/* Barra de navegación */}
        <AppBar position="fixed" color="primary"> {/* Cambié sticky por fixed */}
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="h6" color="inherit">
              Noticias App
            </Typography>
            <Navbar />
          </Toolbar>
        </AppBar>

        {/* Contenedor de páginas */}
        <Container
          maxWidth="lg"
          sx={{
            mt: 8, // Ajusté el margen superior para que el contenido no quede debajo de la AppBar
            backgroundColor: "background.default",
            height: "100vh",
            width: "100", // Aseguramos que el contenedor ocupe toda la altura disponible
            paddingBottom: 4,
            borderRadius: 2,
            display: "flex", // Usamos flexbox para asegurarnos de que el contenido ocupe todo el espacio
            flexDirection: "column",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              borderRadius: 2,
              flexGrow: 1, // Hace que el Paper ocupe todo el espacio restante
            }}
          >
            <Routes>
              <Route path="/" element={<NewsPage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </Paper>
        </Container>
      </Router>
    </AppProvider>
  );
}

export default App;
