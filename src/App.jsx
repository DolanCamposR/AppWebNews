import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { AppBar, Toolbar, Typography, Container, Paper} from "@mui/material";
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
        <AppBar position="sticky" color="primary">
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" color="inherit" >
            </Typography>
            <Navbar /> 
          </Toolbar>
        </AppBar>

        {/* Contenedor de todo el contenido */}
        <Container maxWidth="lg" sx={{ mt: 4 }}>
          <Paper sx={{ padding: 2 }}>
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
