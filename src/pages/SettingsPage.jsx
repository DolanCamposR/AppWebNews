import { useAppContext } from "../context/AppContext";
import { Box, Typography, TextField, MenuItem, Select, Button } from "@mui/material";

const SettingsPage = () => {
  const { user, setUser, settings, setSettings, toggleTheme } = useAppContext();

  const handleNameChange = (e) => {
    setUser({ ...user, name: e.target.value });
  };

  const handleCountryChange = (e) => {
    setSettings({ ...settings, country: e.target.value });
  };

  const handleCategoryChange = (e) => {
    setSettings({ ...settings, category: e.target.value });
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        margin: "0 auto",
        padding: 4,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        backgroundColor: "background.paper",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      {/* Título */}
      <Typography
        variant="h4"
        align="center"
        sx={{
          fontWeight: "bold",
          marginBottom: 2,
        }}
      >
        Configuración
      </Typography>

      {/* Campo de nombre de usuario */}
      <Box>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Nombre de usuario:
        </Typography>
        <TextField
          value={user.name}
          onChange={handleNameChange}
          placeholder="Ingresa tu nombre"
          fullWidth
          variant="outlined"
        />
      </Box>

      {/* Selector de país */}
      <Box>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          País:
        </Typography>
        <Select
          value={settings.country}
          onChange={handleCountryChange}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="us">Estados Unidos</MenuItem>
        </Select>
      </Box>

      {/* Selector de categoría */}
      <Box>
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Categoría:
        </Typography>
        <Select
          value={settings.category}
          onChange={handleCategoryChange}
          fullWidth
          variant="outlined"
        >
          <MenuItem value="general">General</MenuItem>
          <MenuItem value="technology">Tecnología</MenuItem>
          <MenuItem value="sports">Deportes</MenuItem>
          <MenuItem value="health">Salud</MenuItem>
          <MenuItem value="business">Negocios</MenuItem>
        </Select>
      </Box>

      {/* Botón para cambiar tema */}
      <Box sx={{ textAlign: "center", marginTop: 3 }}>
        <Button
          variant="contained"
          onClick={toggleTheme}
        >
          Cambiar a {user.theme === "light" ? "Tema Oscuro" : "Tema Claro"}
        </Button>
      </Box>
    </Box>
  );
};

export default SettingsPage;
